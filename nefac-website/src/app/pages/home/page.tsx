import React from 'react';
import {FaLinkedin, FaSpotify} from 'react-icons/fa';
import { FaSquareFacebook,FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="min-h-screen px-8 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-black mb-5 font-inter leading-tight">
            Championing First Amendment Rights for All
          </h1>
          
          <p className="text-lg mb-6 font-inter leading-snug">
            The New England First Amendment Coalition is the region's
            leading defender of First Amendment freedoms and
            government transparency — the foundation of a healthy
            democracy.
          </p>
          
          <div className="flex gap-3 mb-6">
            <a 
              href="/about" 
              className="inline-block px-6 py-3 border-4 border-[#2F5C9F] text-[#2F5C9F] rounded-xl font-roboto font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
            <a 
              href="/sustaining-memberships" 
              className="inline-block px-6 py-4 bg-[#2F5C9F] text-white rounded-xl font-roboto font-medium hover:bg-[#254a80] transition-colors"
            >
              Donate
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com/nefac.org/" target="_blank" rel="noopener noreferrer">
             {/* FaSquareFacebook is bigger somehow, so decrease size by 1*/}
              <FaSquareFacebook size={24} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
            <a href="http://www.twitter.com/fivefreedoms" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={25} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
            <a href="https://www.instagram.com/nefirstamendmentcoalition/" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram size={25} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/nefac/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={25} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          {/* Image collage placeholder for now */}
          <div className="bg-gray-100 rounded-lg h-full min-h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Image collage placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
