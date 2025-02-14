"use client";
import React, { useState } from "react";
import SearchBar from "./search-bar";

export interface HeaderProps {
  nefacLogo?: string;
}

const Header = ({ nefacLogo }: HeaderProps) => {
  const [isDropdownOpenAbout, setDropdownOpenAbout] = useState(false);
  const [isDropdownOpenJoin, setDropdownOpenJoin] = useState(false);

  return (
    <header className="flex flex-row justify-start items-center pb-4 w-[1920px]">
      <img
        src={nefacLogo ?? "/icons/nefac-logo.svg"}
        alt="NEFAC LOGO"
        className="w-24 h-24"
      />
      <div className="text-[16px]">
        <nav className="pl-10 flex justify-start gap-4 items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpenAbout(!isDropdownOpenAbout)}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              About
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                <path
                  stroke="#3E323280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpenAbout && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-44 z-1000">
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Our Supporters
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      How You Can Help
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a href="/what-we-do/">What We Do</a>
          <a href="/NEFAC-news/">NEFAC News</a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpenJoin(!isDropdownOpenJoin)}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Join
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                <path
                  stroke="#3E323280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpenJoin && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-44 z-10">
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      30 Minute Skills
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Commentary and Coverage
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      First Amendment and the Free Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      FOI Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Legal Briefs, Letters, and Statements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      NEFAC Mentors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Negri Institute
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      New England First Amendment Awards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-black">
                      Sunshine Week
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex flex-row gap-4 w-span">
        <div className="pl-[69px] pr-4">
          <SearchBar />
        </div>
        <button
          type="button"
          className="text-white bg-[#2F5C9F] rounded-lg w-[117px] h-[48px]"
        >
          DONATE
        </button>
        <div className="grid place-items-center box-border border-[#F5F5F5] bg-[#F5F5F5] w-[48px] h-[48px] border-4 rounded-lg">
          <img
            src={nefacLogo ?? "/icons/bookmark.svg"}
            alt="bookmark"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
