import React from "react";
import { NewsPostBase } from "./NewsInterfaces";

// props for a NewsBubble component
export interface NewsBubbleProps extends NewsPostBase {
    featured?: boolean;
}

export const NewsBubble = ({ featured, title, date, content, link }: NewsBubbleProps) => {
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

    if (featured) {
        return (
            <div className="flex flex-col mb-6 border border-4 border-nefacblue rounded-xl px-4 py-5 bg-white">
                <div className="flex flex-col text-black">
                    {title && (
                        <h2 
                            className="mb-2 font-bold text-nefacblue text-2xl"
                            dangerouslySetInnerHTML={{ __html: title ?? "Title" }}
                        />
                    )}
                    {date && (
                        <p className="font-medium text-black text-lg mb-3">{formatDate(date)}</p>
                    )}
                    {content && (
                        <p className="text-md mb-3 text-gray-700 leading-7">
                            {extractFirstSentenceFromHtml(content)}
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
            <a href={link} className="">
                <div className="relative rounded-xl">
                    <div className="">
                        {title && (
                            <h2 
                                className="mb-2 font-semibold mb-6 leading-7">{title ?? "Title"}
                            </h2>
                        )}
                        {date && (
                            <p className="font-normal text-[#949494] text-xs">{formatDate(date)}</p>
                        )}
                    </div>
                </div>
            </a>
        )
    }
}

export default NewsBubble;