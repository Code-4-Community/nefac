import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faRepeat } from "@fortawesome/free-solid-svg-icons";

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
      className={`relative w-[32%] h-[250px] rounded-lg shadow-md cursor-pointer transition-colors duration-300 ${
        isFront
          ? "bg-nefacblue text-white"
          : "bg-white text-black border-4 border-nefacblue"
      }`}
      onMouseEnter={() => setFlipped(!isFront)}
      onMouseLeave={() => setFlipped(!isFront)}
    >
      {isFront ? (
        <div>
          <div className="pb-4">
            <div className="pl-4 pt-4 flex flex-row justify-left gap-4">
              <div className="mb-2 text-nefacblue">
                {imageWhite}
              </div>
              <h1 className="pr-13">{caption}</h1>
            </div>
            <FontAwesomeIcon
              icon={faRepeat}
              className="absolute top-4 right-2 pr-2 text-white"
              style={{ fontSize: "28px" }}
            />
          </div>
          {links && links.length > 0 && (
            <ul className="list-none w-full pl-4 pr-4">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-nefacgray transition-colors"
                  >
                    <span>{link.text}</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ml-auto text-white"
                      style={{ fontSize: "16px" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon
              icon={faRepeat}
              className="absolute top-4 right-2 pr-2 text-nefacblue"
              style={{ fontSize: "28px" }}
            />
          <div className="mb-4 text-nefacblue">
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