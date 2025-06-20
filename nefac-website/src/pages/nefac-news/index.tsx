import { useState, useEffect } from 'react';
import NewsBubble from '@/components/news-page/news-bubble';
import LeftChevron from '@/components/icons/LeftChevron'
import RightChevron from '@/components/icons/RightChevron'
import { WordPressArticle } from "@/components/news-page/article-interface";

import { gql } from '@apollo/client';
import { getNextServerSideProps } from '@faustwp/core';

export const NewsPage = ( props: WordPressArticle ) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const posts = props.data?.posts.nodes || [];
  const featuredArticle = posts[0] || null;
  const iDsMinusFeatured = posts.slice(1).map((post) => post.id);

  const calculatedTotalPages = Math.ceil((posts.length - 1) / articlesPerPage);
  const totalPages = (calculatedTotalPages > 0 ? calculatedTotalPages : 1);

  const [currPageIds, setCurrPgaeIds] = useState(iDsMinusFeatured.slice(0, articlesPerPage));

  const handlePageChange = (pageNum: number = 1) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setCurrPgaeIds(iDsMinusFeatured.slice(
        (pageNum - 1) * articlesPerPage,
        pageNum * articlesPerPage));
    }
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

  if (currentPage === 1 && !featuredArticle) {
    console.log(posts)
    console.log('No featured article available');
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8">Loading news articles...</div>
      </div>
    );
  }

  return (
      <div className="mx-20 pt-16 flex flex-row flex-wrap gap-4">
        <h1 className="text-nefacblue font-semibold text-5xl mb-4">NEFAC News</h1>
        {featuredArticle && (
          <NewsBubble
            id={featuredArticle.id}
            header={true}
        />
        )}
        
        <h2 className="text-nefacblue font-semibold text-4xl mb-4">Latest News</h2>
        <div className="grid grid-flow-row grid-cols-4 gap-8 gap-y-4 mb-6">
          {currPageIds.map((id) => (
            <NewsBubble
              id={id}
              header={false}
            />
          ))}
        </div> 
        
        {totalPages > 1 && (
          <div className="flex justify-center w-full mb-32">
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 mx-1 rounded-md text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
                aria-label="Previous Page"
              >
                <LeftChevron width={24} height={24} />
              </button>
              {generatePageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 mx-1 rounded-md transition-colors
                    ${currentPage === pageNum 
                    ? 'bg-nefacblue text-white font-bold border-b-2 border-blue-800' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
                  disabled={currentPage === pageNum}
                >
                  {pageNum}
                </button>
              ))}
              <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 mx-1 rounded-md text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
                    aria-label="Next Page"
                >
                    <RightChevron width={24} height={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

NewsPage.query = gql`
  query GetPostIds {
		posts {
      nodes {
        id
      }
    }
	}
`;

export async function getServerSideProps(context) {
  return getNextServerSideProps(context, {
    Page: NewsPage,
  });
}

export default NewsPage;