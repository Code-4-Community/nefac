import argparse
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque
import json
from tqdm import tqdm

class WebsiteCrawler:
    ATTACHMENT_EXTENSIONS = {
        '.pdf', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg',
        '.mp4', '.mp3', '.avi', '.mov', '.doc', '.docx', '.xls',
        '.xlsx', '.ppt', '.pptx', '.zip', '.rar', '.tar', '.gz'
    }

    def __init__(self, base_url, max_depth=3, verbose=False, include_attachments=False):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.visited = {}
        self.queue = deque()
        self.max_depth = max_depth
        self.verbose = verbose
        self.include_attachments = include_attachments
        
        # Initialize with homepage
        self.visited[base_url] = {'path': [base_url], 'depth': 0}
        self.queue.append(base_url)

    def _is_valid_link(self, url):
        """Check if URL belongs to same domain"""
        parsed = urlparse(url)
        return parsed.netloc == self.domain

    def is_attachment(self, url):
        """Check if URL points to a non-webpage resource"""
        parsed = urlparse(url)
        path = parsed.path.lower()
        return any(path.endswith(ext) for ext in self.ATTACHMENT_EXTENSIONS)

    def _extract_links(self, url):
        """Get all absolute links from page content (ignoring fragments and attachments)"""
        try:
            if self.verbose:
                print(f"Fetching: {url}")
            response = requests.get(url, timeout=5)
            if self.verbose:
                print(f"Status code: {response.status_code} for {url}")
            soup = BeautifulSoup(response.content, 'html.parser')
            links = set()
            
            for tag in soup.find_all('a', href=True):
                absolute_url = urljoin(url, tag['href'])
                defragged_url = urldefrag(absolute_url).url
                
                if self._is_valid_link(defragged_url):
                    if self.include_attachments or not self.is_attachment(defragged_url):
                        links.add(defragged_url)
                    elif self.verbose:
                        print(f"Ignoring attachment: {defragged_url}")
            return links
        except Exception as e:
            if self.verbose:
                print(f"Error fetching {url}: {e}")
            return set()

    def crawl(self):
        """BFS implementation with depth limiting and progress tracking"""
        initial_links = self._extract_links(self.base_url)
        if self.verbose:
            print(f"Found {len(initial_links)} initial links from homepage")

        pbar = tqdm(total=len(initial_links), desc='Exploring links', disable=not self.verbose)
        explored_initial = set()

        while self.queue:
            current_url = self.queue.popleft()
            current_depth = self.visited[current_url]['depth']
            
            if current_depth >= self.max_depth:
                if current_url in initial_links and current_url not in explored_initial:
                    pbar.update(1)
                    explored_initial.add(current_url)
                continue
                
            for link in self._extract_links(current_url):
                if link not in self.visited or current_depth + 1 < self.visited[link]['depth']:
                    self.visited[link] = {
                        'path': self.visited[current_url]['path'] + [link],
                        'depth': current_depth + 1
                    }
                    self.queue.append(link)
            
            if current_url in initial_links and current_url not in explored_initial:
                pbar.update(1)
                explored_initial.add(current_url)

        pbar.close()
        return self.visited

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Website crawler with path tracking')
    parser.add_argument('url', help='Homepage URL to start crawling')
    parser.add_argument('--max-depth', type=int, default=5,
                      help='Maximum link depth from homepage (default: 5)')
    parser.add_argument('--verbose', action='store_true',
                      help='Enable verbose output')
    parser.add_argument('--include-attachments', action='store_true',
                      help='Include attachment links (PDFs, images, etc.)')
    parser.add_argument('--output', default='output.json',
                      help='Output JSON file path (default: output.json)')
    
    args = parser.parse_args()
    
    crawler = WebsiteCrawler(
        args.url,
        max_depth=args.max_depth,
        verbose=args.verbose,
        include_attachments=args.include_attachments
    )
    results = crawler.crawl()
    
    with open(args.output, 'w', encoding='utf8') as f:
        json.dump(results, f, indent=2)
    
    if args.verbose:
        print(f"\nSaved results to {args.output}")

    # Enhanced depth summary with cumulative totals
    depth_counts = {}
    for data in results.values():
        current_depth = data['depth']
        if current_depth > 0 and current_depth <= args.max_depth:
            depth_counts[current_depth] = depth_counts.get(current_depth, 0) + 1

    print("\nCrawl depth summary:")
    print(f"Maximum crawl depth: {args.max_depth}")
    print(f"Total pages crawled: {len(results) - 1}")  # Subtract homepage
    print("\nPages per depth level (Cumulative):")
    
    cumulative_total = 0
    for depth in range(1, args.max_depth + 1):
        count = depth_counts.get(depth, 0)
        cumulative_total += count
        print(f"  Depth {depth}: {count:4} pages   Cumulative: {cumulative_total:4}")