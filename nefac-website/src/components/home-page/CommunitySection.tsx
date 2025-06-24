import ArticleCardCarousel from "./ArticleCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const communityArticles = [
  {
    thumbnailUrl: "/images/computer.png",
    title: "30 Minute Skills: Business Reporting 101",
    summary: "All journalists — whatever the beat — should think of themselves as business journalists. By viewing this class, you’ll learn (1) how to begin a business beat or start incorporating business journalism practices into your current beat (2) where to find stories and sources and (3) how to localize national and global business stories.",
    articleUrl: "#",
  },
  {
    thumbnailUrl: "/images/computer.png",
    title: "NEFAC Discusses Journalism, First Amendment to Lebanese and African Delegations",
    summary: "“Due to a combination of out-of-service kiosks and individuals using kiosks for an unreasonable amount of time, public access can frequently be denied. This is a major concern given that many court records, such as documents in criminal cases, cannot be thoroughly researched remotely but must instead be searched for through these kiosks.”",
    articleUrl: "#",
  },
  {
    thumbnailUrl: "/images/computer.png",
    title: "30 Minute Skills: Copyright Law 102",
    summary: "Copyright law can be a complex and nuanced area for journalists and non-journalists alike. Questions of ownership, fair use and other intellectual property concerns are especially relevant to newsgathering as more information is found through social media and other online sources. This is the second of two classes introducing copyright law and suggesting best practices. View the first class here. ",
    articleUrl: "#",
  }
];

export default function CommunitySection() {
  return (
    <div className="flex flex-col gap-4 pt-12 mb-24 h-100 bg-nefacblue ml-12 pr-16 relative rounded-l-3xl">
      <div className="flex items-center pl-12">
        <h2 className="text-white font-bold text-3xl">Community</h2>
      </div>

      <div className="pr-6 flex justify-end -mt-4 -mb-6 mr-4">
        <a 
          href="#"
          className="text-white hover:underline transition-colors duration-300"
        >
          More Community News
          <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </a>
      </div>

      <div className="pl-6">
        <ArticleCardCarousel 
            articles={communityArticles} 
            showControls={false}  // Hide navigation buttons
            slidesPerView={3}
        />
      </div>
    </div>
  );
}