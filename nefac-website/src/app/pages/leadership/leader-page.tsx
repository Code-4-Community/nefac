import React, { useEffect, useState, useRef } from "react";
import NameCard from "@/app/components/leadership-page/NameCard";

const exec1 = [
  {
    name: "Justin Silverman, Esq.",
    title: "Executive Director",
  },
  {
    name: "Gregory V Sullivan, Esq",
    title: "President",
  },
  {
    name: "Maggie Mulvihill",
    title: "First Vice President",
  },

  {
    name: "Christopher “Topher” Hamblett",
    title: "Second Vice President",
  },
];

const exec2 = [
  {
    name: "Justin Silverman, Esq.",
    title: "Treasurer and Clerk",
  },
  {
    name: "Shirley Leung",
  },
  {
    name: "Emily Sweeney",
  },
];

const board1 = [
  {
    name: "Jonathan M. Albano, Esq.",
    title: "Morgan Lewis & Bockius LLP",
  },
  {
    name: "Dan Barrett, Esq.",
    title: "ACLU of Connecticut",
  },
  {
    name: "Robert A. Bertsche, Esq. ",
    title: "Klaris Law",
  },
];

const board2 = [
  {
    name: "Jenifer McKim",
    title: "GBH News Center for Investigative Reporting",
  },
  {
    name: "Maggie Mulvihill",
    title: "Boston University",
  },
  {
    name: "Penelope Overton",
    title: "Portland Press Herald",
  },
];

export const LeadershipPage: React.FC = () => {
  // adding scrolling functionality
  const execSection =  useRef<HTMLDivElement>(null);
  const boardSection =  useRef<HTMLDivElement>(null);
  const advSection =  useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Executive Committee");
  console.log(advSection)

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",  
        inline: "nearest",
      });
    }
  };
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-col pr-10 pl-10 gap-2 sticky top-10 self-start h-fit">
        <div
          onClick={() => {{
            setActiveTab("Executive Committee")
            scrollToSection(execSection)
          }}}
          className={`p-3 cursor-pointer font-semibold border-l-4 ${
            activeTab === "Executive Committee"
            ? "border-black bg-white text-black"
            : "border-transparent bg-white text-black hover:bg-gray-200"
          }`}
          >
          Executive Committee
        </div>
        <div
          onClick={() => {{
            setActiveTab("Board of Directors")
            scrollToSection(boardSection)
          }}}
          className={`p-3 cursor-pointer font-semibold border-l-4 ${
            activeTab === "Board of Directors"
            ? "border-black bg-white text-black"
            : "border-transparent bg-white text-black hover:bg-gray-200"
          }`}
          >
          Board of Directors
        </div>
        <div
          onClick={() => {{
            setActiveTab("Advisors")
            scrollToSection(advSection)
          }}}
          className={`p-3 cursor-pointer font-semibold border-l-4 ${
            activeTab === "Advisors"
            ? "border-black bg-white text-black"
            : "border-transparent bg-white text-black hover:bg-gray-200"
          }`}
          >
          Advisors
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
        <div ref={execSection} className="execSection">
          <h1
            
            className="text-lg text-gradient-to-r from-[#464758] via-[#464758] to-[#0D167E] font-default"
          >
            EXECUTIVE COMMITTEE
          </h1>
        </div>
          <div className="flex flex-row gap-4">
            {/* Left col*/}
            <div className="flex flex-col gap-2 pb-4">
              {exec1.map((position, index) => (
                <NameCard {...position} key={index} />
              ))}
            </div>
            {/* Right col*/}
            <div className="flex flex-col gap-2 pb-4">
              {exec2.map((position, index) => (
                <NameCard {...position} key={index} />
              ))}
            </div>
          </div>
        </div>
        <hr className="pb-4 w-span text-[#EBEBEB]"></hr>
        <div ref={boardSection} className="boardSection">
        <h1
          className="text-lg text-gradient-to-r from-[#464758] via-[#464758] to-[#0D167E] font-default"
        >
          BOARD OF DIRECTORS
        </h1>
        </div>
        <div className="flex flex-row gap-4">
          {/* Left col*/}
          <div className="flex flex-col gap-2 pb-4">
            {board1.map((position, index) => (
              <NameCard {...position} key={index} />
            ))}
          </div>
          {/* Right col*/}
          <div className="flex flex-col gap-2 pb-4">
            {board2.map((position, index) => (
              <NameCard {...position} key={index} />
            ))}
          </div>
        </div>
        <hr className="pb-4 w-span text-[#EBEBEB]"></hr>
        <div ref={advSection} className="advSection">
        <h1
          ref={advSection}
          className="text-lg text-gradient-to-r from-[#464758] via-[#464758] to-[#0D167E] font-default"
        >
          ADVISORS
        </h1>
        </div>
        <div className="flex flex-row gap-4">
          {/* Left col*/}
          <div className="flex flex-col gap-2 pb-4">
            {board1.map((position, index) => (
              <NameCard {...position} key={index} />
            ))}
          </div>
          {/* Right col*/}
          <div className="flex flex-col gap-2 pb-4">
            {board2.map((position, index) => (
              <NameCard {...position} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
