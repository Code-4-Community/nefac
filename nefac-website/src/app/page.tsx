import CommentarySection from "./components/CommentarySection";
import NefacFlipCard from "./components/nefac-flip-card";

{
  /* this is the default home page*/
}

export default function Home() {
  console.log("is this page running");
  return (
    <div className="flex flex-col">
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
      <div className="px-36 flex flex-row gap-4">
        <NefacFlipCard />
        <NefacFlipCard />
        <NefacFlipCard />
      </div>
      <div className="px-36 pt-12 flex flex-col flex-wrap gap-4">
        <div className="z-0 pb-20">
          <CommentarySection />
        </div>
      </div>
    </div>
  );
}
