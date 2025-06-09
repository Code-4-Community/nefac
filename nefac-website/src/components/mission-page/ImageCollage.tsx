import React from "react";

interface ImageCollageProps {
  images: string[];
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Member ${index + 1}`} 
          className="w-full aspect-square object-cover border-2 border-gray-300"
          loading="lazy"
        />
      ))}
    </div>
  );
};

const defaultTeamImages: string[] = [
  "/images/team-1.png", "/images/team-2.png", "/images/team-3.png", "/images/team-4.png",
  "/images/team-5.png", "/images/team-6.png", "/images/team-7.png", "/images/team-8.png",
  "/images/team-9.png", "/images/team-10.png", "/images/team-11.png", "/images/team-12.png",
  "/images/team-13.png", "/images/team-14.png", "/images/team-15.png", "/images/team-16.png",
  "/images/team-17.png", "/images/team-18.png", "/images/team-19.png", "/images/team-20.png",
  "/images/team-21.png", "/images/team-22.png", "/images/team-23.png", "/images/team-24.png",
  "/images/team-25.png"
];

// if no custom images are provided, use the default team images
export function ImageCollageWrapper() {
  return <ImageCollage images={defaultTeamImages} />;
}

export default ImageCollage;
