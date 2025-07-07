import React from "react";
import { NewsPostData } from "./NewsInterfaces";
import { gql, useQuery } from "@apollo/client";

// props for a NewsBubble component
export interface NewsBubbleProps extends NewsPostData {
    featured?: boolean;
}

export const NewsBubble = ({ id, featured, title, date, content, link }: NewsBubbleProps) => {
    const formatDate = (dateString: string) => {
        const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const};
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const extractFirstSentenceFromHtml = (html: string) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const paragraphs = Array.from(temp.querySelectorAll('p'));

        const collected = [];
        for (const p of paragraphs) {
            const text = p.textContent?.trim();
            if (!text || p.querySelector("img") || /^by\s/i.test(text)) continue;

            const safeText = text.replace(/(\b[A-Z])\.(?=\s|$)/g, '$1*');
            const sentences = safeText.split(/(?<=[.!?])\s+(?=[A-Z])/);

            for (let s of sentences) {
                const sentence = s.replace(/\*/g, '.').trim();
                const wordCount = sentence.split(/\s+/).filter(Boolean).length;
                if (wordCount >= 4) {
                    collected.push(sentence);
                    if (collected.length === 3) {
                        return collected.join(' ');
                    }
                }
            }
        }
        return null;
    };

    const GET_POST_CONTENT = gql`
        query GetNewsPostContent($id: ID!) {
            newsPost(id: $id) {
                content
            }
        }
    `;

    const { data: postData, loading, error } = useQuery(GET_POST_CONTENT, {
        variables: { id },
        skip: !featured,
    });

    // Use fetched content for featured posts, fallback to prop content
    const displayContent = featured && postData?.newsPost?.content 
        ? postData.newsPost.content 
        : content;

    if (featured) {
        return (
            <div className="flex flex-col mb-6 border border-4 border-nefacblue rounded-xl px-4 py-5 bg-white">
                <div className="flex flex-col text-black">
                    {title && (
                        <h2 
                            className="mb-2 font-bold text-nefacblue text-2xl"
                        >
                            <a href={link}>{title}</a>
                        </h2>
                    )}
                    {date && (
                        <p className="font-medium text-black text-lg mb-3">{formatDate(date)}</p>
                    )}
                    {loading && (
                        <p className="text-md mb-3 text-gray-500">Loading preview...</p>
                    )}
                    {error && (
                        <p className="text-md mb-3 text-gray-500">Error loading preview, please refresh</p>
                    )}
                    {!loading && !error && displayContent && (
                        <p className="text-md mb-3 text-gray-700 leading-7">
                            {extractFirstSentenceFromHtml(displayContent)}
                        </p>
                    )}  
                </div>
                <div className="flex justify-end">
                    <a href={link} className="w-1/4 bg-nefacblue rounded-md p-2 
                    text-white text-center text-sm">
                        <p>Read More</p>
                    </a>
                </div>
                
            </div>
        )
    } else {
        return (
            <a href={link}>
                <div className="relative rounded-xl">
                    <div>
                        <h2 className="mb-2 font-semibold mb-6 leading-7 hover:underline">{title}</h2>
                        <p className="font-normal text-[#949494] text-xs">{formatDate(date)}</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default NewsBubble;