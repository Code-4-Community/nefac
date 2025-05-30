import React from 'react';

interface NewsLetterProps {
    title: string;
    description: string;
    url: string;
}

const NewsLetter: React.FC<NewsLetterProps> = ({ title, description, url }) => {
    return (
        <div className="bg-white border-[4px] border-[rgba(47,92,159,1)] rounded-[24px] p-4 pt-6 flex flex-col justify-between shadow-md font-inter h-full">
            <div>
                <span className="font-bold text-[20px] leading-[100%] tracking-[0%] font-[Poppins]">
                    {title}
                </span>
                <span className="font-light text-[14px] leading-[150%] tracking-[0%] font-[Poppins] mt-4 block">
                    {description}
                </span>
            </div>
            <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-[rgba(47,92,159,1)] text-white px-5 py-2 mt-6 rounded-full hover:bg-[rgba(37,73,127,1)] transition-colors text-center text-m font-medium no-underline self-center"
            >
                Subscribe
            </a>
        </div>
    );
}


export default NewsLetter;