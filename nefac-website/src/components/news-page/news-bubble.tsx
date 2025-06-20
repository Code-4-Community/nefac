import React from "react";
import { useQuery, gql } from "@apollo/client";
import { getNextServerSideProps } from "@faustwp/core";

export interface NewsBubbleProps {
    id?: string;
    header?: boolean;
}

export const NewsBubble = ({ id, header }: NewsBubbleProps) => {
  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });

  const formatDate = (dateString: string) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const};
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error("Error loading post:", error);
    return <div>Error loading post</div>;
  }

  const post = data?.post;
  if (!post) return <div>No post found</div>;
    if (header) {
        return (
            <div className="flex flex-row gap-6 mb-6">
                <a href={post.link} className="w-3/4 relative">
                    <div 
                        className="rounded-xl h-full min-h-[400px] bg-cover bg-no-repeat bg-center"
                    >
                        <div className="absolute flex flex-col bottom-0 text-white font-bold text-2xl p-6 w-2/3">
                            {post.title && (
                                <h2 
                                    className="mb-2 font-extrabold"
                                    dangerouslySetInnerHTML={{ __html: post.title ?? "Title" }}
                                />
                            )}
                            {post.date && (
                                <p className="font-normal text-[#F8F8F8] text-xs">{post.date}</p>
                            )}
                        </div>
                    </div>
                </a>
                <div className="w-1/4 flex flex-col">
                    {post.content && post.content.split(' ').length > 0 ? (
                        <p className="text-base text-[#444444] leading-8 mb-4">
                            <span className="text-3xl [&>p]:inline" dangerouslySetInnerHTML=
                            {{ __html: post.content.match(
              /<p>(?!<img)(?!<strong>By )(?!<strong>by )(?!by )(?!By )[\s\S]*?<\/p>/i
            )?.[0].split(' ')[0] || ''}} />
                            <span dangerouslySetInnerHTML={{ __html: ' ' + post.content.match(
              /<p>(?!<img)(?!<strong>By )(?!<strong>by )(?!by )(?!By )[\s\S]*?<\/p>/i
            )?.[0].split(' ').slice(1).join(' ') || '' }} />
                        </p>
                    ) : null}
                    <a href={post.link} className="bg-nefacblue text-white rounded-md p-2 text-center font-semibold">
                        <p>Read More</p>
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <a href={post.link} className="">
                <div className="relative rounded-xl">
                {post.featuredImage && (
                    <img 
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.fetauredImage.node.altText ?? "Title"}
                        className="rounded-xl h-[180px] w-full object-cover mb-4"
                    />
                )}
                    <div className="">
                        {post.title && (
                            <h2 
                                className="mb-2 font-semibold mb-4">{post.title ?? "Title"}
                            </h2>
                        )}
                        {post.date && (
                            <p className="font-normal text-[#949494] text-xs">{formatDate(post.date)}</p>
                        )}
                    </div>
                </div>
            </a>
        )
    }
}

const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post (id: $id, idType: ID) {
          title
          author {
              node {
                name
              }
          }
          content
          featuredImage {
              node {
                  sourceUrl
                  altText
              }
          }
          link
          date
      }
  }
`;

export default NewsBubble;