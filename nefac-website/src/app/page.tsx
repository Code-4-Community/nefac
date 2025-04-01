import CommentarySection from "../app/components/CommentarySection";
import Footer from "../app/components/footer"
export default function Home() {
  return (
    <div className="px-36 pt-12 flex flex-row flex-wrap gap-4">
      <div className="z-0 pb-20">
        <CommentarySection />
      </div>
      <Footer />
    </div>
  );
}

