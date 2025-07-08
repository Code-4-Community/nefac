import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBullhorn, faGavel, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import NefacFlipCard from "./NefacFlipCard";

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

export function mapLinks(links: Link[]) {
  return (
    <ul className="list-none w-full pl-4 pr-4 text-sm">
    {links.map((link, idx) => (
      <li key={idx} className="mb-1">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:underline transition-colors"
        >
          <span className="mr-2 text-lg sm:text-4xl md:text-lg">{link.text}</span>
          <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[12px] ml-auto"
            />
        </a>
      </li>
    ))}
    </ul>)
}

// Main Section Component
export default function WhatIsNefacSection() {
  return (
    <section className="overflow-hidden mb-16 px-6 md:px-20">
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
          <video className="w-full max-h-[300px] object-cover rounded-lg" playsInline autoPlay loop muted>
            <source src="/videos/what-is-nefac.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Flip Cards or Accordion*/}
        <div className="block sm:hidden">
          <Accordion type="single" collapsible className="w-full border-2 bg-nefacblue text-white rounded-lg">
          <AccordionItem value="item-1" className="ml-4 mr-4">
            <AccordionTrigger>
              <div className="flex justify-start gap-2">
                <FontAwesomeIcon 
                  icon={faGraduationCap}
                  className="w-[25px] h-[25px] text-white"
                />
              <span className="text-xl">Education</span>
              </div>
              </AccordionTrigger>
            <AccordionContent>
            {educationLinks && educationLinks.length > 0 && (mapLinks(educationLinks))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="ml-4 mr-4">
            <AccordionTrigger>
              <div className="flex justify-start gap-2">
                <FontAwesomeIcon 
                  icon={faBullhorn}
                  className="w-[25px] h-[25px] text-white"
                />
              <span className="text-xl">Advocacy</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            {advocacyLinks && advocacyLinks.length > 0 && (mapLinks(advocacyLinks))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="ml-4 mr-4 border-b-0">
            <AccordionTrigger>
              <div className="flex justify-start gap-2">
                <FontAwesomeIcon 
                  icon={faGavel}
                  className="w-[25px] h-[25px] text-white"
                />
              <span className="text-xl">Defense</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            {defenselinks && defenselinks.length > 0 && (mapLinks(defenselinks))}            
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>

      <div className="hidden sm:flex">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between w-full">
          <NefacFlipCard
            caption="Education"
            imageBlue={<FontAwesomeIcon className="text-[70px]" icon={faGraduationCap}/>}
            imageWhite={<FontAwesomeIcon className="text-[30px] text-white" icon={faGraduationCap}/>}
            links={educationLinks}
          />
          <NefacFlipCard
            caption="Advocacy"
            imageBlue={<FontAwesomeIcon className="text-[70px]" icon={faBullhorn}/>}
            imageWhite={<FontAwesomeIcon className="text-[30px] text-white" icon={faBullhorn}/>}
            links={advocacyLinks}
          />
          <NefacFlipCard
            caption="Defense"
            imageBlue={<FontAwesomeIcon className="text-[70px]" icon={faGavel} style={{fontSize:"60px"}}/>}
            imageWhite={<FontAwesomeIcon className="text-[30px] text-white" icon={faGavel}/>}
            links={defenselinks}
          />
        </div>
      </div>
      </div>
    </section>
  );
}