
import AdvocacySection from "./components/home-page/AdvocacySection";
import CommentarySection from "./components/home-page/CommentarySection";
import CommunitySection from "./components/home-page/CommunitySection";
import HomePage from "./pages/home/page";
import WhatIsNefacSection from "./components/WhatIsNefacSection";

{
  /* this is the default home page*/
}

export default function Home() {
  return (
    <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
      <div className="z-0 pb-20">
        <HomePage />
        <WhatIsNefacSection />
        <CommentarySection />
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
