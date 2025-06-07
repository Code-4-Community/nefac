"use client";
import React, { useState, useRef } from "react";
import SearchBar from "./header/search-bar";

export interface HeaderProps {
  nefacLogo?: string;
}

const Header = ({ nefacLogo }: HeaderProps) => {
  const [isDropdownOpenAbout, setDropdownOpenAbout] = useState(false);
  const [isDropdownOpenJoin, setDropdownOpenJoin] = useState(false);
  const [isDropdownOpenWWD, setDropdownOpenWWD] = useState(false);

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const joinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wwdTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterAbout = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setDropdownOpenAbout(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setDropdownOpenAbout(false);
    }, 200);
  };

  const handleMouseEnterJoin = () => {
    if (joinTimeoutRef.current) clearTimeout(joinTimeoutRef.current);
    setDropdownOpenJoin(true);
  };

  const handleMouseLeaveJoin = () => {
    joinTimeoutRef.current = setTimeout(() => {
      setDropdownOpenJoin(false);
    }, 200);
  };
  
  const handleMouseEnterWWD = () => {
    if (wwdTimeoutRef.current) clearTimeout(wwdTimeoutRef.current);
    setDropdownOpenWWD(true);
  };

  const handleMouseLeaveWWD = () => {
    wwdTimeoutRef.current = setTimeout(() => {
      setDropdownOpenWWD(false);
    }, 200);
  };

  return (
    <header className="relative flex flex-row justify-between 
    items-center pt-6 pb-4 px-12 z-50 text-nefacblue border-b-4 bg-white">
      <div className="flex flex-row items-center gap-8">
        <a href="/#">
          <img
            src={nefacLogo ?? "/icons/nefac-logo.svg"}
            alt="NEFAC LOGO"
            className="w-16 h-16"
          />
        </a>
        <SearchBar />
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="text-[16px] ml-36">
          <nav className="flex justify-start gap-4 items-center relative">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
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
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 z-50">
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <a href="/leadership" className="block px-4 py-2 hover:text-black">
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
            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterWWD}
              onMouseLeave={handleMouseLeaveWWD}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
                What We Do
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
              {isDropdownOpenWWD && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 z-50">
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <a href="/education" className="block px-4 py-2 hover:text-black">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:text-black">
                        Advocacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:text-black">
                        Defense
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a href="/NEFAC-news/">NEFAC News</a>

            {/* Join Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterJoin}
              onMouseLeave={handleMouseLeaveJoin}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
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
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 z-50">
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <a href="/subscribe" className="block px-4 py-2 hover:text-black">
                        Subscribe
                      </a>
                    </li>
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
          <a href="/sustaining-memberships">
            <button
              type="button"
              className="text-white bg-[#2F5C9F] rounded-xl w-[117px] h-[36px]"
            >
              Donate
            </button>
          </a>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
