import NefacFlipCard from "@/components/home-page/nefac-flip-card";

export default function WhatIsNefacSection() {
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
          <video className="w-full max-h-[300px] object-cover rounded-lg" playsInline autoPlay loop muted>
            <source src="/videos/what-is-nefac.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Flip Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between">
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
    </section>
  );
}
