import AdvocacySection from "../components/home-page/AdvocacySection";
import CommentarySection from "../components/home-page/CommentarySection";
import CommunitySection from "../components/home-page/CommunitySection";
import { NewsSection } from "../components/home-page/NewsSection";
import EventsSection from "../components/home-page/EventsSection";
import HomePage from "./home";
import WhatIsNefacSection from "../components/home-page/WhatIsNefacSection";

{
  /* this is the default home page*/
}

export default function Home() {
  return (
    <div className="pt-24 flex flex-row flex-wrap gap-4 overflow-x-hidden">
      <div className="z-0 mb-32 w-full">
        <HomePage />
        <WhatIsNefacSection />
        <NewsSection />
        <CommentarySection />
        <EventsSection />
        <CommunitySection />
        <AdvocacySection />
      </div>
    </div>
  );
}
/*
    <div className="flex flex-col">
      <WhatIsNefacSection />
      <div className="px-36 pt-12 flex flex-col flex-wrap gap-4">
        <div className="z-0 pb-20">
          <CommentarySection />
        </div>
      </div>
    </div>
  );
}*/
