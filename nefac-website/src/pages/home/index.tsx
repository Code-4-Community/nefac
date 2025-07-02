import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import SquareXIcon from '@/components/icons/SquareXIcon';

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
              className="inline-block px-6 py-3 border-4 border-nefacblue text-nefacblue rounded-xl font-roboto font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
            <a 
              href="/sustaining-memberships" 
              className="inline-block px-6 py-4 bg-nefacblue text-white rounded-xl font-roboto font-medium hover:bg-[#254a80] transition-colors"
            >
              Donate
            </a>
          </div>
          <div className="flex gap-4 items-start text-gray-800">
            <a href="https://www.facebook.com/nefac.org/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faFacebookSquare} 
              className="text-[27px] hover:text-nefacblue transition-colors"
            />
            </a>
            <SquareXIcon className="w-[27px] h-[27px] hover:fill-nefacblue transition-colors" />
            <a href="https://www.instagram.com/nefirstamendmentcoalition/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faInstagramSquare} 
              className="text-[27px] hover:text-nefacblue transition-colors"
            />
            </a>
            <a href="https://www.linkedin.com/company/nefac/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              className="text-[27px] hover:text-nefacblue transition-colors"
            />
            </a>
            <a href="https://open.spotify.com/show/7clTBFLosxgZMnMtV4pbrm" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faSpotify} 
              className="text-[27px] hover:text-nefacblue transition-colors"
            />
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
