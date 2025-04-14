import AdvocacySection from "./components/home-page/AdvocacySection";
import CommentarySection from "./components/home-page/CommentarySection";
import CommunitySection from "./components/home-page/CommunitySection";
import HomePage from "./pages/home/page";

export default function Home() {
  return (
    <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
      <div className="z-0 pb-20">
        <HomePage />
        <CommentarySection />
        <CommunitySection />
        <AdvocacySection />
      </div>
    </div>
  );
}