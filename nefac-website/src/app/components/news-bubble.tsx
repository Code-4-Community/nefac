import React from "react";

export interface NewsBubbleProps {
    image?: string;
    title?: string;
    link?: string;
    date?: string;
    header?: boolean;
    headerPreview?: string;
}

export const NewsBubble = ({ image, title, link, date, header, headerPreview }: NewsBubbleProps) => {
    if (header) {
        return (
            <div className="flex flex-row gap-6 mb-6">
                <a href={link} className="w-3/4">
                    <div className="rounded-xl h-full bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.0)),url('/images/filler.jpeg')]
                                    bg-cover bg-no-repeat bg-center min-h-[400px]">
                    </div>
                    <div className="relative">
                        <div className="absolute flex flex-col bottom-0 text-white font-bold text-2xl bg-rounded-md p-6 w-2/3">
                            {title && (
                                <h2 
                                    className={`mb-2 font-extrabold
                                    `}>{title ?? "Title"}
                                </h2>
                            )}
                            {date && (
                                <p className="font-normal text-[#F8F8F8] text-xs">{date}</p>
                            )}
                        </div>
                    </div>
                </a>
                <div className="w-1/4 flex flex-col">
                    <p className="text-base text-[#444444] leading-8 mb-4">{headerPreview}</p>
                    <a href={link} className="bg-nefacblue text-white rounded-md p-2 text-center font-semibold">
                        <p>Read More</p>
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <a href={link} className="">
                <div className="relative rounded-xl">
                {image && (
                    <img 
                        src={image}
                        alt={title ?? "Title"}
                        className="rounded-xl h-[180px] w-full object-cover mb-4"
                    />
                )}
                <div className="">
                    {title && (
                        <h2 
                            className="mb-2 font-semibold mb-4">{title ?? "Title"}
                        </h2>
                    )}
                    {date && (
                        <p className="font-normal text-[#949494] text-xs">{date}</p>
                    )}
                </div>
            </div>
            </a>
        )
    }
}

export default NewsBubble;