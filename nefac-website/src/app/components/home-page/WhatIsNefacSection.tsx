import NefacFlipCard from "@/app/components/home-page/nefac-flip-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useState, useEffect } from 'react';

interface Link {
  text: string;
  url: string;
}

const educationLinks : Link[] = [
  { text: "Amicus Briefs", url: "/" },
  { text: "Legal Referrals", url: "/" },
  { text: "Defense Fund", url: "/" }];

const advocacyLinks : Link[] = [
  { text: "Commentary & Coverage", url: "/" },
  { text: "Statements & Letters", url: "/" },
  { text: "New England First Amendment Awards", url: "/" },
];
const defenselinks : Link[] = [
  { text: "30-Minute Skills", url: "/" },
  { text: "First Amendment & Free Press", url: "/" },
  { text: "FOI Guide", url: "/" },
  { text: "NEFAC Mentors", url: "/" },
  { text: "Negri Institute", url: "/" },
];

function mapLinks(links: Link[]) {
  return (
    <ul className="list-none w-full pl-4 pr-4 text-sm">
    {links.map((link, idx) => (
      <li key={idx} className="mb-1">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-nefacgray transition-colors"
        >
          <span className="mr-2 text-xs sm:text-lg">{link.text}</span>
          <img
            src="/icons/white-arrow.svg"
            alt="arrow icon"
            className="w-[12px] h-[12px] ml-auto"
          />
        </a>
      </li>
    ))}
    </ul>)
}

export default function WhatIsNefacSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    console.log(isMobile);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="overflow-x-hidden mb-16 px-20">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center pb-6 gap-3">
          <h1 className="text-[32px] sm:text-[40px] text-nefacblue font-semibold whitespace-nowrap">
            What is NEFAC?
          </h1>
          <div className="h-2 sm:ml-4 sm:flex-1 bg-nefacblue rounded-full" />
        </div>

        {/* Video */}
        <div className="pb-6">
          <video className="w-full max-h-[300px] rounded-lg" controls>
            <source src="/videos/what-is-nefac.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Flip Cards or Accordion*/}
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full bg-nefacblue text-white rounded-lg">
          <AccordionItem value="item-1" className="ml-4 mr-4">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent>
            {educationLinks && educationLinks.length > 0 && (mapLinks(educationLinks))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="ml-4 mr-4">
            <AccordionTrigger>Advocacy</AccordionTrigger>
            <AccordionContent>
            {advocacyLinks && advocacyLinks.length > 0 && (mapLinks(advocacyLinks))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="ml-4 mr-4">
            <AccordionTrigger>Defense</AccordionTrigger>
            <AccordionContent>
            {defenselinks && defenselinks.length > 0 && (mapLinks(defenselinks))}            
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        ) : (
        <div className="flex flex-col sm:flex-row flex-wrap justify-between">
          <NefacFlipCard
            caption="Education"
            imageBlue="/icons/grad-cap.svg"
            imageWhite="/icons/grad-cap-white.svg"
            links= {educationLinks}
          />
          <NefacFlipCard
            caption="Advocacy"
            imageBlue="/icons/megaphone.svg"
            imageWhite="/icons/megaphone-white.svg"
            links={advocacyLinks}
          />
          <NefacFlipCard
            caption="Defense"
            imageBlue="/icons/gavel.svg"
            imageWhite="/icons/gavel-white.svg"
            links={defenselinks}
          />
        </div>
  )}
      </div>
    </section>
  );}
