import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import EventbriteIcon from "./icons/EventbriteIcon";
import SquareXIcon from "./icons/SquareXIcon";
import SquareBlueskyIcon from "./icons/SquareBlueskyIcon";

import EmailForm from "./footer/email-form"

export interface FooterProps {
  nefacLogo?: string;
}

const Footer = ({ nefacLogo }: FooterProps) => {
  return (
    <div className="box-border px-16 pt-12 w-full h-[378px] bg-[#1C1E35]">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <img
            src={nefacLogo ?? "/icons/nefac-logo.svg"}
            alt="NEFAC LOGO"
            className="w-[113px] h-[113px] flex-shrink-0"
          />
          {/* connect section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold mb-4">Connect with NEFAC</h1>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link href="/contact" className="text-white underline">
                Contact
              </Link>
              <Link href="/join" className="text-white underline">
                Join
              </Link>
              <Link href="/donate" className="text-white underline">
                Donate
              </Link>
              <Link href="/subscribe" className="text-white underline">
                Subscribe
              </Link>
            </nav>
          </div>
          {/* email section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold mb-2">Get Email Updates</h1>
            <EmailForm />
          </div>
          {/* social media section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold pb-4">Follow Us</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-row gap-3 items-start text-gray-100">
                <SquareXIcon className="w-[25px] h-[25px] hover:opacity-50 transition-opacity" />
                <a href="https://www.facebook.com/nefac.org/" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="text-[25px] hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.linkedin.com/company/nefac/" target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[25px] hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.youtube.com/c/fivefreedoms" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutubeSquare}
                    className="text-[25px] hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.instagram.com/nefirstamendmentcoalition/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="text-[25px] hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://bsky.app/profile/nefac.bsky.social" target="_blank">
                  <SquareBlueskyIcon className="w-[25px] h-[25px] hover:opacity-50 transition-opacity" />
                </a>
                {/* Manually created squares around logos to match consistency of other icons */}
                <div className="bg-gray-100 rounded-md w-[23px] h-[23px] flex items-center justify-center hover:opacity-50 transition-opacity">
                  <a href="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2" target="_blank">
                      <FontAwesomeIcon
                          icon={faTiktok}
                          className="w-[15px] h-[15px] text-[#1C1E35]"
                      />
                  </a>
                </div>
                  <a href="https://nefac.eventbrite.com/" target="_blank">
                    <div className="bg-gray-100 rounded-md w-[23px] h-[23px] flex items-center justify-center hover:opacity-50 transition-opacity">
                      <EventbriteIcon className="w-[15px] h-[15px] fill-[#1C1E35]" />
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom links */}
      <div className="w-full flex flex-row gap-10 justify-center mt-16">
        <Link href="/donate" className="text-white pr-8">
          <span className="mr-1">© 2025</span>
          <span className="underline">
            New England First Amendment Coalition
          </span>
        </Link>
        <Link
          href="https://wordpress.org/"
          target="_blank"
          className="text-white pr-8 underline"
        >
          Powered by WordPress
        </Link>

        <Link href="/donate" className="text-white pr-8 underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
