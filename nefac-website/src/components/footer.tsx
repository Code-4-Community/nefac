import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import EmailForm from "./footer/email-form";

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
            <h1 className="text-white font-bold">Get Email Updates</h1>
            <EmailForm />
          </div>
          {/* social media section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold pb-4">Follow Us</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-row gap-3 items-center">
                <a href="https://www.twitter.com/fivefreedoms" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-[30px] h-[30px] text-white hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.facebook.com/nefac.org/" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-[30px] h-[30px] text-white hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.linkedin.com/company/nefac/" target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-[30px] h-[30px] text-white hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.youtube.com/c/fivefreedoms" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-[30px] h-[30px] text-white hover:opacity-50 transition-opacity"
                  />
                </a>
                <a href="https://www.instagram.com/nefirstamendmentcoalition/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-[30px] h-[30px] text-white hover:opacity-50 transition-opacity"
                  />
                </a>
                {/* to correct gap between non-fontawesome icons */}
                <div className="flex flex-row gap-1 items-center">
                  <a href="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2" target="_blank">
                    {/* Tiktok icon is bigger than others so sized down*/}
                    <FontAwesomeIcon
                        icon={faTiktok}
                        className="w-6 h-6 text-white mr-1 hover:opacity-50 transition-opacity"
                    />
                  </a>
                  <a href="https://nefac.eventbrite.com/" target="_blank">
                    <img
                      src={"/icons/eventbrite.svg"}
                      alt="Eventbrite logo"
                      className="w-8 h-8 hover:opacity-50 transition-colors"
                    />
                  </a>
                  <a href="https://bsky.app/profile/nefac.bsky.social" target="_blank">
                    <img
                      src={"/icons/bsky.svg"}
                      alt="Bluesky logo"
                      className="w-8 h-8 hover:opacity-50 transition-opacity"
                    />
                  </a>
                </div>
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