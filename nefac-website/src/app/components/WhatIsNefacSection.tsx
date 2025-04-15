import NefacFlipCard from "./nefac-flip-card";

export default function WhatIsNefacSection() {
  return (
    <div>
      <div className="px-36 w-[1300 px]">
        <div className="flex flex-row items-center pb-4">
          <h1 className="text-[40px] text-nefacblue font-semibold whitespace-nowrap">
            What is NEFAC?
          </h1>
          <div className="h-2 ml-4 grow bg-nefacblue rounded-full" />
        </div>
      </div>
      <div className="px-36 pb-2">
        <video className="h-[300px] w-[1191px] rounded-lg" controls>
          <source src="/videos/what-is-nefac.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-36 flex flex-row gap-7 w-full">
        <NefacFlipCard
          caption="Education"
          imageBlue="/icons/grad-cap.svg"
          imageWhite="/icons/grad-cap-white.svg"
          links={[
            { text: "Amicus Briefs", url: "/" },
            { text: "Legal Referrals", url: "/" },
            { text: "Defense Fund", url: "/" },
          ]}
        />
        <NefacFlipCard
          caption="Advocacy"
          imageBlue="/icons/megaphone.svg"
          imageWhite="/icons/megaphone-white.svg"
          links={[
            { text: "Commentary & Coverage", url: "/" },
            { text: "Statements & Letters", url: "/" },
            { text: "New England First Amendment Awards", url: "/" },
          ]}
        />
        <NefacFlipCard
          caption="Defense"
          imageBlue="/icons/gavel.svg"
          imageWhite="/icons/gavel-white.svg"
          links={[
            { text: "30-Minute Skills", url: "/" },
            { text: "First Amendment & Free Press", url: "/" },
            { text: "FOI Guide", url: "/" },
            { text: "NEFAC Mentors", url: "/" },
            { text: "Negri Institute", url: "/" },
          ]}
        />
      </div>
    </div>
  );
}
