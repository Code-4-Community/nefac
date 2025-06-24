import React, { useEffect, useState } from 'react';
import NewsBubble from '@/components/news-page/news-bubble';
import { WordPressArticle } from "@/components/news-page/article-interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const NewsPage = () => {
  const [featuredArticle, setFeaturedArticle] = useState<WordPressArticle | null>(null);
  const [newsArticles, setNewsArticles] = useState<WordPressArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const articlesPerPage = 8;

  const fetchFeatured = async () => {
    try {
      const baseUrl = 'https://nefac.org/wp-json/wp/v2/posts';
      const url = new URL(baseUrl);
      url.searchParams.append('per_page', '1');
      url.searchParams.append('page', '1');
      url.searchParams.append('_embed', 'true');

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch featured article');
      }
      const data = await response.json();
      if (data.length > 0) {
        setFeaturedArticle(data[0]);
      }
    } catch (error) {
      console.error('Error fetching featured article:', error);
    }
  };

  const fetchNews = async (pageNum = 1) => {
    try {
      setLoading(true);
      const baseUrl = 'https://nefac.org/wp-json/wp/v2/posts';
      const url = new URL(baseUrl);
      const offset = (pageNum - 1) * articlesPerPage + 1;

      url.searchParams.append('per_page', articlesPerPage.toString());
      url.searchParams.append('offset', offset.toString());
      url.searchParams.append('_embed', 'true');

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch news articles');
      }

      const data = await response.json();

      const totalPosts = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      setTotalPosts(totalPosts);

      const calculatedTotalPages = Math.ceil((totalPosts - 1) / articlesPerPage);
      setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1);

      setNewsArticles(data);
    } catch (err) {
      setError((err as Error).message);
      console.error('Error fetching news articles:', (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      await fetchFeatured();
      await fetchNews(1);
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    if (currentPage > 1 || featuredArticle) {
      fetchNews(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (pageNum: number = 1) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const formatDate = (dateString: string) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const};
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const stripHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const removeAuthor = (excerpt: string) => {
    const plainText = stripHTML(excerpt);
    const authorPattern = /^By\s+(([A-Za-z]+(\s+[A-Za-z]+)?)(,?\s+and\s+|\s*,\s*)?)+?\s+(?=[A-Z])/;
    const match = plainText.match(authorPattern);
    if (match && match[0]) {
      return excerpt.replace(match[0], '').trim();
    }

    return excerpt;
  }

  const getImageFromArticle = (article: string) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = article.match(imgRegex);
    return match ? match[1] : null;
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (loading && currentPage === 1 && !featuredArticle) {
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8">Loading news articles...</div>
      </div>
    );
  }

  if (error && !featuredArticle) {
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8 text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
      <div className="mx-20 pt-16 flex flex-row flex-wrap gap-4">
        <h1 className="text-nefacblue font-semibold text-5xl mb-4">NEFAC News</h1>
        {featuredArticle && (
          <NewsBubble
          image={
            featuredArticle.featured_media && featuredArticle._embedded?.['wp:featuredmedia']?.[0]?.source_url
              ? featuredArticle._embedded?.['wp:featuredmedia']?.[0]?.source_url
              : getImageFromArticle(featuredArticle.content.rendered) || '/images/computer.png'
          }
          title={featuredArticle.title.rendered}
          date={formatDate(featuredArticle.date)}
          link={`/news/${featuredArticle.slug}`}
          header={true}
          headerPreview={removeAuthor(featuredArticle.excerpt.rendered)}
        />
        )}
        
        <h2 className="text-nefacblue font-semibold text-4xl mb-4">Latest News</h2>
        <div className="grid grid-flow-row grid-cols-4 gap-8 gap-y-4 mb-6">
          {newsArticles.map((article) => (
            <NewsBubble
              key={article.id}
              image={
                article.featured_media && article._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                ? article._embedded?.['wp:featuredmedia']?.[0]?.source_url
                : getImageFromArticle(article.content.rendered) || '/images/computer.png'}
              title={article.title.rendered}
              date={formatDate(article.date)}
              link={`/news/${article.slug}`}
              header={false}
            />
          ))}
        </div> 
        
        {totalPages > 1 && (
          <div className="flex justify-center w-full mb-32">
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-3 py-1 mx-1 rounded-md text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
                aria-label="Previous Page"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              </button>
              {generatePageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 mx-1 rounded-md transition-colors
                    ${currentPage === pageNum 
                    ? 'bg-nefacblue text-white font-bold border-b-2 border-blue-800' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
                  disabled={loading}
                >
                  {pageNum}
                </button>
              ))}
              <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loading}
                    className="px-3 py-1 mx-1 rounded-md text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
                    aria-label="Next Page"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default NewsPage;