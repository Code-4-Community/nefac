import React, { useState } from "react";

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
      className={`relative w-[32%] h-[250px] rounded-lg shadow-md cursor-pointer transition-colors duration-300 ${
        isFront
          ? "bg-nefacblue text-white"
          : "bg-white text-black border-4 border-nefacblue"
      }`}
      onMouseEnter ={() => setFlipped(!isFront)}
      onMouseLeave ={() => setFlipped(!isFront)}
    >
      {isFront ? (
        <div>
          <div className="pb-4">
            <div className="pl-4 pt-4 flex flex-row justify-left gap-4">
              <img
                src={imageWhite ?? "/icons/nefac-logo.svg"}
                alt="card icon"
                className="w-[26px] h-[26px]"
              />
              <h1 className="text-[1.5vw] pr-13">{caption}</h1>
            </div>
            <img
              src="/icons/flip-white.svg"
              alt="flip icon"
              className="absolute top-4 right-2 w-[30px] h-[27px] pr-2"
            />
          </div>
          {links && links.length > 0 && (
            <ul className="list-none w-full pl-4 pr-4 text-[1.2vw]">
              {" "}
              {/* Add pr-4 here */}
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-nefacgray transition-colors"
                  >
                    <span>{link.text}</span>
                    <img
                      src="/icons/white-arrow.svg"
                      alt="arrow icon"
                      className="w-[12px] h-[12px] ml-auto"
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/icons/flip-blue.svg"
            alt="flip icon"
            className="absolute top-2 right-2 w-8 h-8"
          />
          <img
            src={imageBlue ?? "/icons/nefac-logo.svg"}
            alt="card icon"
            className="w-[30%] h-[30%] mb-2"
          />
          {caption && (
            <p className="text-[1.5vw] font-semibold text-center text-nefacblue">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NefacFlipCard;