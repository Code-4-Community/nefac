import React from 'react';
import {FaLinkedin, FaSpotify} from 'react-icons/fa';
import { FaSquareFacebook,FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="h-fit items-center px-20 relative">

      <div className="flex gap-10">
        <div className="w-1/2 z-10 items-center">
          <h1 className="text-6xl font-black mb-5 mt-16 font-inter leading-snug">
            We are democracy defenders.
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
            <a href="https://open.spotify.com/show/7clTBFLosxgZMnMtV4pbrm" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={25} className="text-gray-800 hover:text-[#2F5C9F] transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="h-[45rem]">
          <div className="absolute top-[-20%] right-[-5%] w-[50%] h-[50rem] overflow-hidden">
            <div className="grid grid-cols-6 grid-rows-15 gap-3 h-full w-full">
              {/* LEFT COLUMN */}
              <div className="col-span-2 row-span-7 rounded-lg overflow-hidden col-start-1 row-start-1">
                <img 
                  src="images\nefac-conference.png" 
                  alt="NEFAC Panel Speaker"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 row-span-7 rounded-lg overflow-hidden col-start-1 row-start-8">
                <img 
                  src="images\nefac-dinner.png" 
                  alt="NEFAC Dinner" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* MIDDLE COLUMN */}
              <div className="col-span-2 row-span-4 rounded-lg overflow-hidden col-start-3 row-start-1">
                <img 
                  src="images\nefac-award.png" 
                  alt="NEFAC Award"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 row-span-5 rounded-lg overflow-hidden col-start-3 row-start-5">
                <img 
                  src="images\nefac-writing.png" 
                  alt="NEFAC Panel Writing" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 row-span-5 rounded-lg overflow-hidden col-start-3 row-start-10">
                <img 
                  src="images\nefac-conversation.png" 
                  alt="NEFAC Conversation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* RIGHT COLUMN */}
              <div className="col-span-2 row-span-7 rounded-lg overflow-hidden col-start-5 row-start-2">
                <img 
                  src="images\nefac presentation.png" 
                  alt="NEFAC Presentation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 row-span-6 rounded-lg overflow-hidden col-start-5 row-start-9">
                <img 
                  src="images\nefac-award.png" 
                  alt="NEFAC Award"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
