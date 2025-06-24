import React, { useState } from "react";
import { mapLinks } from "./WhatIsNefacSection";

interface NefacFlipCardProps {
  caption?: string;
  imageBlue?: string;
  imageWhite?: string;
  links?: { text: string; url: string }[];
}

const NefacFlipCard = ({
  caption,
  imageBlue,
  imageWhite,
  links,
}: NefacFlipCardProps) => {
  const [isFront, setFlipped] = useState(false);
  return (
    <div
      className={`relative w-[32%] h-[260px] rounded-lg shadow-md transition-colors duration-300 ${
        isFront
          ? "bg-nefacblue text-white border-4 border-nefacblue"
          : "bg-white text-black border-4 border-nefacblue"
      }`}

      onMouseEnter ={() => setFlipped(!isFront)}
      onMouseLeave ={() => setFlipped(!isFront)}
    >
      {isFront ? (
        <div>
          <div className="pb-4">
            <div className="pl-4 pt-4 flex flex-row justify-left items-center gap-2 sm:gap-4">
              <img
                src={imageWhite ?? "/icons/nefac-logo.svg"}
                alt="card icon"
                className="w-[15%] h-[15%] sm:w-[10%] sm:h-[10%]"
              />
              <h1 className="text-sm sm:text-lg md:text-xl ">{caption}</h1>
            </div>
            <img
              src="/icons/flip-white.svg"
              alt="flip icon"
              onClick={() => setFlipped(!isFront)}
              className="absolute top-2 sm:top-4 right-2 w-[15%] h-[15%] sm:w-[10%] sm:h-[10%] pr-2"
            />
          </div>
          {links && links.length > 0 && (mapLinks(links))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/icons/flip-blue.svg"
            alt="flip icon"
            className="absolute top-2 sm:top-4 right-2 w-[15%] h-[15%] sm:w-[10%] sm:h-[10%] pr-2"
          />
          <img
            src={imageBlue ?? "/icons/nefac-logo.svg"}
            alt="card icon"
            className="w-[30%] h-[30%] mb-2"
          />
          {caption && (
            <p className="text-2xl font-semibold text-center text-nefacblue">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NefacFlipCard;
