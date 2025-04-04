import ArticleCardCarousel from "./ArticleCardCarousel";

const articles = [
  {
    thumbnailUrl: "/public/images/computer.png",
    title: "Roped-Off R.I. State House Rotunda Seen as Part of ‘Playbook’ for Muting Dissent",
    summary: "Over the years, government officials and politicians have established so-called “First Amendment areas” at political conventions and others events, NEFAC Executive Director Justin Silverman said. “Often they are a very restricted area with limited visibility,” he said...",
    articleUrl: "https://google.com",
  },
  {
    thumbnailUrl: "/public/images/computer.png",
    title: "Police Heavily Redact Records From Two Domestic Violence Calls...",
    summary: "Police cited privacy concerns as the primary reason for the redactions, but in this case, everyone involved is dead. “The privacy interest there just doesn’t exist,” NEFAC’s Justin Silverman recently told WMTW...",
    articleUrl: "https://google.com",
  },
  {
    thumbnailUrl: "/public/images/computer.png",
    title: "foobar",
    summary: "summary",
    articleUrl: "https://google.com",
  },
];

export default function CommentarySection() {
  return (
    <div className="flex flex-col gap-4 pt-4 h-100 bg-nefacblue p-6 relative">
      <div className="flex items-center">
        <h2 className="text-white font-bold text-3xl">Commentary</h2>
        <div className="flex-grow h-2 bg-white translate-x-6 rounded-l-full" />
      </div>

      <ArticleCardCarousel articles={articles} />

      <a
        href="#"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-nefacblue p-4 rounded-md border-[7px] font-semibold border-nefacblue hover:border-white hover:bg-nefacblue hover:text-white transition-colors duration-300"
      >
        Learn more about Commentary
      </a>
    </div>
  );
}
