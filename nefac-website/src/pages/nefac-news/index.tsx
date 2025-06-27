import NewsBubble from '@/components/news-page/news-bubble';

import { useQuery, gql } from '@apollo/client';

const GET_NEWS = gql`
  query getNewsIds($first: Int!, $after: String) {
	newsPosts(first: $first, after: $after) {
        pageInfo {
            hasNextPage
            endCursor
        }
        edges {
            node {
                id
                title
                slug
                date
                content
                link
            }
        }
    }
  }
`;

const INITIAL_BATCH_SIZE = 7;
const SUBSEQUENT_BATCH_SIZE = 6;

export default function LoadNews() {
  const { data, loading, error, fetchMore } = useQuery(GET_NEWS, {
    variables: { first: INITIAL_BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8">Sorry, an error happened. Please reload.</div>
      </div>
    )
  }

  if (!data && loading) {
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8">Loading news articles...</div>
      </div>
    );
  }

  if (!data?.newsPosts.edges.length) {
    return (
      <div className="mx-20 pt-12">
        <h1 className="text-nefacblue font-semibold text-5xl">NEFAC News</h1>
        <div className="mt-8">There is no news to display.</div>
      </div>
    );
  }

  const posts = data.newsPosts.edges.map(edge => edge.node);
  const haveMorePosts = Boolean(data?.newsPosts?.pageInfo?.hasNextPage);

  const featuredArticle = posts[0] || null;
  const latestPosts = posts.slice(1);

  return (
      <div className="mx-20 pt-16 flex flex-col flex-wrap gap-4">
        <h1 className="text-nefacblue font-semibold text-5xl mb-4">NEFAC News</h1>
        {featuredArticle && (
          <NewsBubble
          header={true}
          title={featuredArticle.title}
          date={featuredArticle.date}
          link={featuredArticle.link}
          content={featuredArticle.content}
        />
        )}
        
        <h2 className="text-nefacblue font-semibold text-3xl mb-4">Latest News</h2>
        <div className="grid grid-flow-row grid-cols-3 gap-x-16 gap-y-6 mb-6">
          {latestPosts.map((post) => {
            const { title, date, content, link } = post;
            return (
              <NewsBubble
                header={false} 
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
