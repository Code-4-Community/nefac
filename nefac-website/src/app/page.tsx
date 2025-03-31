import Bubble from "../components/Bubble";
import Header from "../components/header";
import CommentarySection from "@/components/CommentarySection";

export default function Home() {
  return (
    <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
      <div className="z-0">
        <Bubble
          title="NEFAC, Mass. Open Government Groups: Governor’s Proposal Will Close the Open Meeting Law"
          text="Massachusetts Governor Maura Healey filed today the Municipal Empowerment Act. A coalition 
        of democracy, disability access, and open government advocates — including the New England First 
        Amendment Coalition — expressed strong concerns about the bill’s consequences for access to local 
        government meetings. The proposal would make the format of local open meetings completely 
        discretionary instead […]"
          image="/images/computer.png"
          style="w-full h-[400px] text-lg font-bold"
          imageStyle="w-full h-full"
        />
        <div className="flex flex-row gap-4 pt-4">
          <Bubble
            title="We are democracy defenders."
            style="bg-nefacblue text-white text-[50px] w-1/3 h-1/3 leading-[50px] p-8"
          />
          <Bubble
            text="“Congress shall make no law respecting an establishment of religion, 
          or prohibiting the free exercise thereof; or abridging the freedom of speech,
        or of the press; or the right of the people peaceably to assemble, and to
        petition the Government for a redress of grievances.”"
            link="https://constitution.congress.gov/browse/amendment-1/"
            linkText="First Amendment of U.S. Constitution"
            style="w-[478px] border-nefacblue border-[6px] text-nefacblue p-4"
          />
          <Bubble
            title="Support Democracy and Donate"
            style="bg-nefacblue text-white text-4xl text-bold w-1/4 h-1/3 leading-[50px] p-6"
          />
        </div>
        <CommentarySection />
      </div>
    </div>
  );
}

