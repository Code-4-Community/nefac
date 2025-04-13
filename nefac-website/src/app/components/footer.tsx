import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/x";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";
import "react-social-icons/youtube";
import "react-social-icons/instagram";
import "react-social-icons/tiktok";
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
              <Link to="/contact" className="text-white underline">
                Contact
              </Link>
              <Link to="/join" className="text-white underline">
                Join
              </Link>
              <Link to="/donate" className="text-white underline">
                Donate
              </Link>
              <Link to="/subscribe" className="text-white underline">
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
              <div className="flex flex-row gap-3">
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="x"
                  url="http://www.twitter.com/fivefreedoms"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="facebook"
                  url="https://www.facebook.com/nefac.org/"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="linkedin"
                  url="https://www.linkedin.com/company/nefac/"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="youtube"
                  url="http://www.youtube.com/c/fivefreedoms"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="instagram"
                  url="https://www.instagram.com/nefirstamendmentcoalition/"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                  network="tiktok"
                  url="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2"
                />
                <a href="https://nefac.eventbrite.com/" target="_blank">
                  <img
                    src={"/icons/eventbrite-icon.svg"}
                    alt="eventbrite logo"
                    className="w-[30px] h-[30px]"
                  />
                </a>
                <SocialIcon
                  target="_blank"
                  style={{ height: 30, width: 30 }}
                  url="https://bsky.app/profile/nefac.bsky.social"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom links */}
      <div className="w-full flex flex-row gap-10 justify-center mt-16">
        <Link to="/donate" className="text-white pr-8">
          <span className="mr-1">© 2025</span>
          <span className="underline">
            New England First Amendment Coalition
          </span>
        </Link>
        <Link
          to="https://wordpress.org/"
          target="_blank"
          className="text-white pr-8 underline"
        >
          Powered by WordPress
        </Link>

        <Link to="/donate" className="text-white pr-8 underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
