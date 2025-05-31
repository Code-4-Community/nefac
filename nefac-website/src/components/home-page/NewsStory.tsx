// InitiativeCard.tsx
import React from "react";

interface NewsStoryProps {
  imageSrc: string;
  title: string;
  date: string;
}

const NewsStory: React.FC<NewsStoryProps> = ({ imageSrc, title, date }) => {
  return (
    <div className="text-white p-4 rounded-md bg-nefacblue">
      <img src={imageSrc} alt="Initiative" className="rounded-md mb-2" />
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-[8px]">{date}</p>
    </div>
  );
};

export default NewsStory;
