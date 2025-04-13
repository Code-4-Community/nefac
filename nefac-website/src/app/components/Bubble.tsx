import React from "react";

export interface BubbleProps {
    image?: string;
    title?: string;
    text?: string;
    link?: string;
    linkText?: string;
    style?: string;
    imageStyle?: string;
}

export const Bubble = ({ image, title, text, link, linkText, style, imageStyle }: BubbleProps) => {
    return (
        <div className={`${style} ${image ? "relative" : ""} rounded-xl`}>
            {image && (
                <img 
                    src={image}
                    alt={title ?? "Title"}
                    className={`rounded-xl object-cover ${imageStyle}`}
                />
            )}
            <div className={`${image ? "absolute flex flex-col bottom-0 bg-white bg-opacity-70 m-8 rounded-md p-4" 
                : "relative"} z-10`}>
                {title && (
                    <h2 
                        className={`mb-2 font-extrabold
                        ${image ? "truncate" : ""}
                        `}>{title ?? "Title"}
                    </h2>
                )}
                {text && (
                    <p className="text-sm font-normal">{text}</p>
                )}
                {link && (
                    <a 
                        href={link} 
                        className="hover:font-semibold">
                        {linkText || "Learn more"}
                    </a> 
                )}
            </div>
        </div>
    )
}

export default Bubble;