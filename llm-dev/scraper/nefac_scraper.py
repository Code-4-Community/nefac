import os
import time
import re
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

class NEFACScraper:
    def __init__(self, base_url="https://www.nefac.org"):
        self.base_url = base_url
        self.visited_urls = set()
        self.output_dir = "output"
        self._setup_driver()
        self._setup_output_directory()

    def _setup_driver(self):
        """Initialize and configure the Selenium WebDriver."""
        options = Options()
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service, options=options)
        self.driver.implicitly_wait(10)

    def _setup_output_directory(self):
        """Ensure the output directory exists."""
        os.makedirs(self.output_dir, exist_ok=True)

    def _is_valid_url(self, url):
        """Check if the URL is within the target domain and is a valid webpage."""
        if not url:
            return False
        parsed_url = urlparse(url)
        return (
            parsed_url.netloc == urlparse(self.base_url).netloc
            and not url.endswith((".pdf", ".jpg", ".png", ".gif"))
            and "#" not in url and "mailto:" not in url
        )

    def _clean_text(self, text):
        """Clean and normalize extracted text."""
        text = re.sub(r'\s+', ' ', text).strip()
        text = re.sub(r'\n\s*\n', '\n\n', text)
        return text

    def _extract_content(self, url):
        """Retrieve and process page content and discover new links."""
        if url in self.visited_urls:
            return None, []

        self.visited_urls.add(url)
        print(f"Scraping: {url}")

        try:
            self.driver.get(url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            time.sleep(2)
            
            soup = BeautifulSoup(self.driver.page_source, "html.parser")
            for tag in soup.find_all(["script", "style", "nav", "footer"]):
                tag.decompose()
            
            content = self._clean_text(soup.get_text(separator=" ", strip=True))
            
            links = [urljoin(url, a["href"]) for a in soup.find_all("a", href=True) if self._is_valid_url(urljoin(url, a["href"]))]
            return content, links
        
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            return None, []

    def _save_content(self, url, content):
        """Save extracted content to a text file."""
        if not content:
            return

        filename = re.sub(r'[^\w\-_]', '_', url.replace(self.base_url, ''))
        filepath = os.path.join(self.output_dir, filename.strip('_') + ".txt")

        with open(filepath, "w", encoding="utf-8") as file:
            file.write(f"Source URL: {url}\n\n{content}")

    def scrape_site(self):
        """Crawl the website starting from the base URL."""
        urls_to_scrape = [self.base_url]
        while urls_to_scrape:
            url = urls_to_scrape.pop(0)
            content, new_links = self._extract_content(url)
            if content:
                self._save_content(url, content)
            urls_to_scrape.extend([link for link in new_links if link not in self.visited_urls and link not in urls_to_scrape])

    def close(self):
        """Shut down the WebDriver."""
        self.driver.quit()


def main():
    scraper = NEFACScraper()
    try:
        scraper.scrape_site()
    finally:
        scraper.close()


if __name__ == "__main__":
    main()
