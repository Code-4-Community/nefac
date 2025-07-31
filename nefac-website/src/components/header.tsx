"use client";
import React, { useState, useRef } from "react";
import SearchBar from "./header/search-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export interface HeaderProps {
  nefacLogo?: string;
}

const Header = ({ nefacLogo }: HeaderProps) => {
  const [isDropdownOpenAbout, setDropdownOpenAbout] = useState(false);
  const [isDropdownOpenJoin, setDropdownOpenJoin] = useState(false);
  const [isDropdownOpenWWD, setDropdownOpenWWD] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileWWDOpen, setIsMobileWWDOpen] = useState(false);
  const [isMobileJoinOpen, setIsMobileJoinOpen] = useState(false);

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const joinTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (joinTimeoutRef.current) clearTimeout(joinTimeoutRef.current);
    setDropdownOpenWWD(true);
  };

  const handleMouseLeaveWWD = () => {
    joinTimeoutRef.current = setTimeout(() => {
      setDropdownOpenWWD(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
    setIsMobileWWDOpen(false);
    setIsMobileJoinOpen(false);
  };

  const toggleMobileWWD = () => {
    setIsMobileWWDOpen(!isMobileWWDOpen);
    setIsMobileAboutOpen(false);
    setIsMobileJoinOpen(false);
  };

  const toggleMobileJoin = () => {
    setIsMobileJoinOpen(!isMobileJoinOpen);
    setIsMobileAboutOpen(false);
    setIsMobileWWDOpen(false);
  };

  return (
    <header className="relative bg-white border-b-4 border-nefacblue z-50 w-full">
      <div className="hidden lg:flex flex-row justify-between items-center w-full px-6 lg:px-10 pt-6 pb-4">
        {/* Left: Logo + Search */}
        <div className="flex flex-row items-center gap-4 lg:gap-8 min-w-0 flex-shrink">
          <a href="/#" className="flex-shrink-0">
            <img
              src={nefacLogo ?? "/icons/nefac-logo.svg"}
              alt="NEFAC LOGO"
              className="w-16 h-16"
            />
          </a>
          <div className="flex-1 min-w-0">
            <SearchBar />
          </div>
        </div>

        {/* Right: Nav + Donate */}
        <div className="flex flex-row items-center gap-4 lg:gap-8 min-w-0 flex-1 justify-end">
          <nav className="flex gap-4 lg:gap-8 items-center min-w-0">
            <div
              className="relative"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <button className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-200">
                About
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              {isDropdownOpenAbout && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 z-50">
                  <ul className="py-2 text-4 text-gray-600">
                    <li>
                      <a
                        href="/leadership"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Our Supporters
                      </a>
                    </li>
                    <li>
                      <a
                        href="sustaining-memberships"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        How You Can Help
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={handleMouseEnterWWD}
              onMouseLeave={handleMouseLeaveWWD}
            >
              <button className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-200">
                <a href="/mission">What We Do</a>
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              {isDropdownOpenWWD && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 z-50">
                  <ul className="py-2 text-4 text-gray-600">
                    <li>
                      <a
                        href="/education"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Advocacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Defense
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a href="/nefac-news/" className="p-2 rounded-md hover:bg-gray-200">
              News
            </a>
            <div
              className="relative"
              onMouseEnter={handleMouseEnterJoin}
              onMouseLeave={handleMouseLeaveJoin}
            >
              <button className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-200">
                Get Involved
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              {isDropdownOpenJoin && (
                <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-48 z-50 overflow-y-auto">
                  <ul className="py-2 text-4 text-gray-600">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        30 Minute Skills
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Commentary and Coverage
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        First Amendment and the Free Press
                      </a>
                    </li>
                    <li>
                      <a
                        href="/education/foi-guide"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        FOI Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Legal Briefs, Letters, and Statements
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        NEFAC Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/education/negri-institute"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Negri Institute
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        New England First Amendment Awards
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Sunshine Week
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Donate Button */}
          <a href="/sustaining-memberships" className="flex-shrink-0">
            <button
              type="button"
              className="text-white bg-[#2F5C9F] rounded-xl px-4 md:px-6 lg:px-10 py-2 text-sm lg:text-base hover:bg-[#1e4a8a] transition-colors flex-1 min-w-0"
            >
              Donate
            </button>
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-row items-center w-full px-2 sm:px-4 py-3 gap-x-2">
        <a href="/#" className="flex-shrink-0">
          <img
            src={nefacLogo ?? "/icons/nefac-logo.svg"}
            alt="NEFAC LOGO"
            className="w-10 h-10"
          />
        </a>
        {/* Mobile Search */}
        <div className="flex-1 min-w-0 mx-2">
          <SearchBar />
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-nefacblue hover:bg-gray-200 rounded-md flex-shrink-0 ml-2 flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="w-5 h-5"
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="px-4 py-2">
            <nav className="flex flex-col space-y-1">
              <div>
                <button
                  onClick={toggleMobileAbout}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>About</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`w-3 h-3 transition-transform ${
                      isMobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileAboutOpen && (
                  <div className="ml-4 mt-1 space-y-1 text-gray-600">
                    <a
                      href="/leadership"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Leadership
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Our Supporters
                    </a>
                    <a
                      href="sustaining-memberships"
                      className="block p-3 hover:bg-gray-100 rounded-md text-black text-sm"
                    >
                      How You Can Help
                    </a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={toggleMobileWWD}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>What We Do</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`w-3 h-3 transition-transform ${
                      isMobileWWDOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileWWDOpen && (
                  <div className="ml-4 mt-1 space-y-1 text-gray-600">
                    <a
                      href="/education"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Education
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Advocacy
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Defense
                    </a>
                  </div>
                )}
              </div>
              <div>
                <a
                  href="/nefac-news/"
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>News</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </a>
              </div>
              <div>
                <a
                  href="/subscribe"
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>Subscribe</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </a>
              </div>
              <div>
                <button
                  onClick={toggleMobileJoin}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>Get Involved</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`w-3 h-3 transition-transform ${
                      isMobileJoinOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileJoinOpen && (
                  <div className="ml-4 mt-1 space-y-1 text-gray-600">
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      30 Minute Skills
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Commentary and Coverage
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      First Amendment and the Free Press
                    </a>
                    <a
                      href="/education/foi-guide"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      FOI Guide
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Legal Briefs, Letters, and Statements
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      NEFAC Mentors
                    </a>
                    <a
                      href="/education/negri-institute"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Negri Institute
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      New England First Amendment Awards
                    </a>
                    <a
                      href="#"
                      className="block p-3 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Sunshine Week
                    </a>
                  </div>
                )}
              </div>
              <div>
                <a
                  href="/sustaining-memberships"
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-md font-medium"
                >
                  <span>Donate</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
