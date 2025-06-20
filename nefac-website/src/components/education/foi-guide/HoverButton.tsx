import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  state: { id?: string; name: string; url: string };
  isHovered: boolean;
  setHoveredId: (id: string | null) => void;
};

export default function HoverButton({ state, isHovered, setHoveredId }: Props) {
  // button hover states
  const isWide = state.id === "FOIA";
  const scale = isHovered
    ? isWide
      ? "scale-x-[0.935]"
      : "scale-x-[0.86]"
    : isWide
    ? "scale-x-[0.984]"
    : "scale-x-[0.97]";
  const bg = isHovered ? "bg-nefacblue" : "bg-white";
  const arrowLoc = isHovered ? "w-full bg-black" : "w-[10%] bg-nefacblue";
  const arrowFill = isHovered ? "fill-white right-1" : "fill-black";
  const textColor = isHovered ? "text-white" : "text-black";

  return (
    <Button
      asChild
      variant="outline"
      onMouseEnter={() => setHoveredId(state.id ?? null)}
      onMouseLeave={() => setHoveredId(null)}
      className={`w-full h-20 relative overflow-hidden rounded-[10px]`}
    >
      <Link
        href={state.url}
        className="relative w-full h-full flex justify-between px-4 items-start"
      >
        {/* Text */}
        <span
          className={`z-30 font-semibold font-poppins text-lg pr-10
              ${textColor}
            `}
        >
          {state.name}
        </span>
        {/* Background Hover Fill */}
        <div
          className={`absolute inset-0 h-[calc(100%-1px)] duration-200 rounded-[10px] z-10 origin-left transition-transform
            ${scale} ${bg}
          `}
        />
        {/* Arrow */}
        <div
          className={`absolute right-0 h-full
            transition-all duration-300
            flex items-center 
            ${arrowLoc}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="39.6 49.5 202 424.2"
            className={`z-20 transition-all duration-300 absolute right-4 
              ${arrowFill}`}
          >
            <path d="M281.4 235.7c12.6 12.6 12.6 33.1 0 45.7l-161.6 161.6c-12.6 12.6-33.1 12.6-45.7 0s-12.6-33.1 0-45.7L212.8 258.6 74.1 119.8c-12.6-12.6-12.6-33.1 0-45.7s33.1-12.6 45.7 0l161.6 161.6z" />
          </svg>
        </div>
      </Link>
    </Button>
  );
}