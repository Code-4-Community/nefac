import CommentarySection from "./components/CommentarySection";
import WhatIsNefacSection from "./components/WhatIsNefacSection";

{
  /* this is the default home page*/
}

export default function Home() {
  console.log("is this page running");
  return (
    <div className="flex flex-col">
      <WhatIsNefacSection />
      <div className="px-36 pt-12 flex flex-col flex-wrap gap-4">
        <div className="z-0 pb-20">
          <CommentarySection />
        </div>
      </div>
    </div>
  );
}
