import NewsBubble from '@/components/news-page/NewsBubble';
import { NewsPostData, NewsPostEdge } from '@/components/news-page/NewsInterfaces';

import { useQuery, gql } from '@apollo/client';

const GET_NEWS = gql`
  query GetNewsPosts($first: Int!, $after: String) {
	  newsPosts(first: $first, after: $after) {
        pageInfo {
            hasNextPage
            endCursor
        }
        edges {
            node {
                id
                title
                date
                link
            }
        }
    }
  }
`;

// how many results to return in the first query (i.e., includes the featured post)
const INITIAL_BATCH_SIZE = 7;

// how many results to return in subsequent queries
const SUBSEQUENT_BATCH_SIZE = 6;

function NewsStatusMessage(message: string) {
  return (
    <div className="mx-20 pt-12">
      <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
      <div className="mt-8">{message}</div>
    </div>
  );
}

export default function LoadNews() {
  const { data, loading, error, fetchMore } = useQuery(GET_NEWS, {
    variables: { first: INITIAL_BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return NewsStatusMessage("Sorry, an error occurred. Please reload.");
  }

  if (!data && loading) {
    return NewsStatusMessage("Loading news articles...");
  }

  if (!data?.newsPosts.edges.length) {
    return NewsStatusMessage("There is no news to display.");
  }

  const posts = data.newsPosts.edges.map((edge: NewsPostEdge) => edge.node);
  const haveMorePosts = Boolean(data?.newsPosts?.pageInfo?.hasNextPage);

  const featuredArticle = posts[0] || null;
  const latestPosts = posts.slice(1);

  return (
      <div className="mx-20 pt-16 flex flex-col flex-wrap gap-4">
        <h1 className="text-nefacblue font-semibold text-5xl mb-4">NEFAC News</h1>
        {featuredArticle && (
          <NewsBubble
          id={featuredArticle.id}
          key={featuredArticle.id}
          featured={true}
          title={featuredArticle.title}
          date={featuredArticle.date}
          link={featuredArticle.link}
          content={featuredArticle.content}
        />
        )}
        
        <h2 className="text-nefacblue font-semibold text-3xl mb-4">Latest News</h2>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6 mb-6">
          {latestPosts.map((post: NewsPostData) => {
            const { id, title, date, content, link } = post;
            return (
              <NewsBubble
                id={featuredArticle.id}
                key={id}
                featured={false} 
                title={title}
                date={date}
                content={content}
                link={link}
              />
            )
          })} 
        </div>
        <div className="flex justify-center mb-16">
          {haveMorePosts ? (
            <form
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                fetchMore({ 
                  variables: { first: SUBSEQUENT_BATCH_SIZE, after: data.newsPosts.pageInfo.endCursor },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                      newsPosts: {
                        ...fetchMoreResult.newsPosts,
                        edges: [
                          ...prev.newsPosts.edges,
                          ...fetchMoreResult.newsPosts.edges,
                        ],
                      },
                    };
                  },
                });
              }}
            >
              <button className="bg-nefacblue rounded-md px-20 py-2 text-white font-semibold" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Show More"}
              </button>
            </form>
          ) : null
          }
        </div>
      </div>
    );
}
