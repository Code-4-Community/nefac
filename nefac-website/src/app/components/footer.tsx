import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/x";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";
import "react-social-icons/youtube";
import "react-social-icons/instagram";
import "react-social-icons/tiktok";
import EmailForm from "./email-form";

export interface FooterProps {
  nefacLogo?: string;
}

const Footer = ({ nefacLogo }: FooterProps) => {
  return (
    <div className="box-border w-full h-[378px] bg-[#1C1E35]">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row gap-6 pt-4 pl-4">
          <img
            src={nefacLogo ?? "/icons/nefac-logo.svg"}
            alt="NEFAC LOGO"
            className="w-[113px] h-[113px] flex-shrink-0"
          />
          {/* connect section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Connect with NEFAC</h1>
            <nav className="flex flex-wrap justify-left pt-4">
              <Link to="/contact" className="text-white underline pr-6 pb-2">
                Contact
              </Link>
              <Link to="/join" className="text-white underline">
                Join
              </Link>
              <div className="basis-full" />
              <Link to="/donate" className="text-white underline pr-8">
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
          <div className="pl-4">
            {/* social media section */}
            <h1 className="text-white text-bold pb-4">Follow Us</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-row gap-3">
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="x"
                  url="http://www.twitter.com/fivefreedoms"
                />
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="facebook"
                  url="https://www.facebook.com/nefac.org/"
                />
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="linkedin"
                  url="https://www.linkedin.com/company/nefac/"
                />
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="youtube"
                  url="http://www.youtube.com/c/fivefreedoms"
                />
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="instagram"
                  url="https://www.instagram.com/nefirstamendmentcoalition/"
                />
                <SocialIcon
                  style={{ height: 20, width: 20 }}
                  target="_blank"
                  network="tiktok"
                  url="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2"
                />
                <a href="https://nefac.eventbrite.com/" target="_blank">
                  <img
                    src={"/icons/eventbrite-icon.svg"}
                    alt="eventbrite logo"
                    className="w-[20px] h-[20px]"
                  />
                </a>
                <SocialIcon
                  target="_blank"
                  style={{ height: 20, width: 0 }}
                  url="https://bsky.app/profile/nefac.bsky.social"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom links */}
      <div className="w-full flex flex-row gap-10 justify-center pt-10">
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
