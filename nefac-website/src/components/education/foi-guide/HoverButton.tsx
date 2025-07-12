import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
      ? "w-[93.5%]"
      : "w-[86%]"
    : isWide
    ? "w-[98.4%]"
    : "w-[97%]";
  const bg = isHovered ? "bg-nefacblue" : "bg-white";
  const arrowBg = isHovered ? "bg-black" : "bg-nefacblue";
  const arrowHover = isHovered ? "text-white right-[0.375rem]" : "text-black";
  const textColor = isHovered ? "text-white" : "text-black";

  return (
    <Button
      asChild
      variant="outline"
      onMouseEnter={() => setHoveredId(state.id ?? null)}
      onMouseLeave={() => setHoveredId(null)}
      className={`w-full my-4 relative overflow-hidden rounded-[10px] ${isHovered? "bg-black" : "bg-white"} transition-all duration-300`}
    >
      <Link
        href={state.url}
        className="relative w-full h-full flex justify-between overflow-hidden px-4 items-start min-w-0"
      >
        {/* Text */}
        <span
          className={`z-30 font-semibold font-poppins pr-10 leading-tight text-base sm:text-lg
    ${textColor}`}
        >
          {state.name}
        </span>
        {/* Hover Fill Background */}
        <div
          className={`absolute inset-0 h-full z-10 rounded-[10px] transition-all duration-300
            ${bg} ${scale}
          `}
        />
        {/* Arrow */}
        <div
          className={`absolute right-0 h-full w-12
            transition-all duration-300
            flex items-center 
            ${arrowBg}`}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`z-20 transition-all duration-300 absolute w-4 h-4 right-4
              ${arrowHover}`}
          />
        </div>
      </Link>
    </Button>
  );
}
