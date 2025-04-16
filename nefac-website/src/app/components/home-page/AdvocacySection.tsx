import ArticleCardCarousel from "./ArticleCardCarousel";

const articles = [
  {
    thumbnailUrl: "/images/filler.jpeg",
    title: "NEFAC, Vermont Press Association Defend Right to Record in Milton",
    summary: "The Milton Library Board of Trustees had planned to discuss a possible policy that would prohibit attendees of its meetings from recording. NEFAC and the Vermont Press Association sent a letter to Board Chair Alan Fletcher on Nov. 14 and explained that “recording is not just legally protected but it’s encouraged under the law.",
    articleUrl: "#",
  },
  {
    thumbnailUrl: "/images/filler.jpeg",
    title: "NEFAC: Access to Massachusetts Courts Limited By Inoperable, Overused Public Terminals",
    summary: "“Due to a combination of out-of-service kiosks and individuals using kiosks for an unreasonable amount of time, public access can frequently be denied. This is a major concern given that many court records, such as documents in criminal cases, cannot be thoroughly researched remotely but must instead be searched for through these kiosks.”",
    articleUrl: "#",
  },
  {
    thumbnailUrl: "/images/filler.jpeg",
    title: "NEFAC: Access to Massachusetts Courts Limited By Inoperable, Overused Public Terminals",
    summary: "“Due to a combination of out-of-service kiosks and individuals using kiosks for an unreasonable amount of time, public access can frequently be denied. This is a major concern given that many court records, such as documents in criminal cases, cannot be thoroughly researched remotely but must instead be searched for through these kiosks.”",
    articleUrl: "#",
  },
];

export default function AdvocacySection() {
  return (
    <div className="flex flex-col gap-4 pt-12 h-100 bg-nefacblue relative">
      <div className="flex items-center overflow-hidden">
        <h2 className="text-white font-bold text-3xl pl-24">Advocacy</h2>
        <div className="grow h-2 bg-white translate-x-12 rounded-l-full" />
      </div>

      <div className="px-12">
        <div className="pb-8">
          <ArticleCardCarousel articles={articles} slidesPerView={3} showControls={false} />
        </div>    
        <a
          href="#"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-nefacblue p-4 rounded-md border-[4px] font-semibold border-nefacblue hover:border-white hover:bg-nefacblue hover:text-white transition-colors duration-300"
        >
          Learn more about Advocacy
        </a>
      </div>
      
    </div>
  );
}
