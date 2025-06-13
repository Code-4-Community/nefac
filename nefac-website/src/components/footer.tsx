import Link from "next/link";
import { Instagram, Facebook, X, YouTube, LinkedIn } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
const TikTok = () => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};
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
            <h1 className="text-white font-bold mb-2">Get Email Updates</h1>
            <EmailForm />
          </div>
          {/* social media section */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold pb-4">Follow Us</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-row gap-3">
                <a href="https://www.twitter.com/fivefreedoms" target="_blank">
                  <X
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://www.facebook.com/nefac.org/" target="_blank">
                  <Facebook
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://www.linkedin.com/company/nefac/" target="_blank">
                  <LinkedIn
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://www.youtube.com/c/fivefreedoms" target="_blank">
                  <YouTube
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://www.instagram.com/nefirstamendmentcoalition/" target="_blank">
                  <Instagram
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2" target="_blank">
                  <SvgIcon
                    component={TikTok}
                    sx={{ fontSize: 20 }}
                    className="text-white hover:text-nefacgray transition-colors"
                  />
                </a>
                <a href="https://nefac.eventbrite.com/" target="_blank">
                  <img
                    src={"/icons/eventbrite.svg"}
                    alt="Eventbrite logo"
                    className="w-[30px] h-[30px]"
                  />
                </a>
                <a href="https://bsky.app/profile/nefac.bsky.social" target="_blank">
                  <img
                    src={"/icons/bsky.svg"}
                    alt="Bluesky logo"
                    className="w-[30px] h-[30px]"
                  />
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
