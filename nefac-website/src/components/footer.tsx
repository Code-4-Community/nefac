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

// Style constants to reduce duplication
const styles = {
  // Social media icons
  socialIcon: "text-[25px] hover:opacity-75 transition-opacity",
  socialIconContainer: "w-[25px] h-[25px] hover:opacity-75 transition-opacity",
  
  // Section headers
  sectionHeader: "text-white font-bold",
  
  // Navigation links
  navLink: "text-white underline",
  
  // Bottom links
  bottomLink: "text-white pr-8",
  bottomLinkUnderlined: "text-white pr-8 underline",
  
  // Icon containers
  iconContainer: "bg-gray-100 rounded-md w-[23px] h-[23px] flex items-center justify-center hover:opacity-75 transition-opacity",
  smallIcon: "w-[15px] h-[15px]",
  
  // Layout
  sectionContainer: "flex flex-col",
} as const;

// Helper component for social media icons
const SocialIcon = ({ 
  icon, 
  href, 
  className = styles.socialIcon 
}: { 
  icon: any; 
  href: string; 
  className?: string; 
}) => (
  <a href={href} target="_blank">
    <FontAwesomeIcon icon={icon} className={className} />
  </a>
);

// Helper component for icon containers (TikTok, Eventbrite)
const IconContainer = ({ 
  children, 
  href 
}: { 
  children: React.ReactNode; 
  href: string; 
}) => (
  <a href={href} target="_blank">
    <div className={styles.iconContainer}>
      {children}
    </div>
  </a>
);

// Helper component for section headers
const SectionHeader = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <h1 className={`${styles.sectionHeader} ${className}`}>
    {children}
  </h1>
);

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
          <div className={styles.sectionContainer}>
            <SectionHeader className="mb-4">Connect with NEFAC</SectionHeader>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
              <Link href="/join" className={styles.navLink}>
                Join
              </Link>
              <Link href="/donate" className={styles.navLink}>
                Donate
              </Link>
              <Link href="/subscribe" className={styles.navLink}>
                Subscribe
              </Link>
            </nav>
          </div>
          
          {/* email section */}
          <div className={styles.sectionContainer}>
            <SectionHeader className="mb-2">Get Email Updates</SectionHeader>
            <EmailForm />
          </div>
          
          {/* social media section */}
          <div className={styles.sectionContainer}>
            <SectionHeader className="pb-4">Follow Us</SectionHeader>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-row gap-3 items-start text-gray-100">
                <SquareXIcon className={styles.socialIconContainer} />
                
                <SocialIcon 
                  icon={faFacebookSquare} 
                  href="https://www.facebook.com/nefac.org/" 
                />
                <SocialIcon 
                  icon={faLinkedin} 
                  href="https://www.linkedin.com/company/nefac/" 
                />
                <SocialIcon 
                  icon={faYoutubeSquare} 
                  href="https://www.youtube.com/c/fivefreedoms" 
                />
                <SocialIcon 
                  icon={faInstagramSquare} 
                  href="https://www.instagram.com/nefirstamendmentcoalition/" 
                />
                
                <a href="https://bsky.app/profile/nefac.bsky.social" target="_blank">
                  <SquareBlueskyIcon className={styles.socialIconContainer} />
                </a>
                
                {/* TikTok icon */}
                <IconContainer href="https://www.tiktok.com/@fivefreedoms?lang=en&is_copy_url=1&is_from_webapp=v2">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className={`${styles.smallIcon} text-[#1C1E35]`}
                  />
                </IconContainer>
                
                {/* Eventbrite icon */}
                <IconContainer href="https://nefac.eventbrite.com/">
                  <EventbriteIcon className={`${styles.smallIcon} fill-[#1C1E35]`} />
                </IconContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* bottom links */}
      <div className="w-full flex flex-row gap-10 justify-center mt-16">
        <Link href="/donate" className={styles.bottomLink}>
          <span className="mr-1">© 2025</span>
          <span className="underline">
            New England First Amendment Coalition
          </span>
        </Link>
        <Link
          href="https://wordpress.org/"
          target="_blank"
          className={styles.bottomLinkUnderlined}
        >
          Powered by WordPress
        </Link>
        <Link href="/donate" className={styles.bottomLinkUnderlined}>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
