import React, { useState } from "react";

interface NefacFlipCardProps {
  caption?: string;
  image?: string;
}

const NefacFlipCard = ({ caption, image }: NefacFlipCardProps) => {
  const [isFront, setFlipped] = useState(false);
  return (
    <div
      className={`w-[379px] h-[310px] rounded-lg shadow-md cursor-pointer transition-colors duration-300 ${
        isFront ? "bg-nefacblue text-white" 
        : "bg-white text-black border-4 border-nefacblue"
      }`}
      onClick={() => setFlipped(!isFront)}
    >
      {isFront ? (
        <p className="text-lg font-semibold">Back Side</p>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={image ?? "/icons/nefac-logo.svg"}
            alt="card icon"
            className="w-16 h-16 mb-2"
          />
          {caption && <p className="text-md">{caption}</p>}
        </div>
      )}
    </div>
  );
};

export default NefacFlipCard;
