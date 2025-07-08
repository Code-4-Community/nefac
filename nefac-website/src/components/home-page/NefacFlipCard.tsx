import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { mapLinks } from "./WhatIsNefacSection";

interface NefacFlipCardProps {
  caption?: string;
  imageBlue?: React.ReactNode;
  imageWhite?: React.ReactNode;
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
      onMouseEnter={() => setFlipped(!isFront)}
      onMouseLeave={() => setFlipped(!isFront)}
    >
      {isFront ? (
        <div>
          <div className="pb-4">  
            <div className="pl-4 pt-4 flex flex-row justify-left items-center gap-2 sm:gap-4">
              <div className="text-nefacblue">
                {imageWhite}
              </div>
              <h1 className="text-sm sm:text-lg md:text-xl">{caption}</h1>
            </div>
            <FontAwesomeIcon
              icon={faRetweet}
              className="absolute top-4 right-2 pr-2 text-white text-[30px]"
            />
          </div>
          {links && links.length > 0 && (mapLinks(links))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon
              icon={faRetweet}
              className="absolute top-4 right-2 pr-2 text-nefacblue text-[30px]"
            />
          <div className="mb-3 text-nefacblue">
            {imageBlue}
          </div>
          {caption && (
            <p className="text-xl font-semibold text-center text-nefacblue">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NefacFlipCard;
