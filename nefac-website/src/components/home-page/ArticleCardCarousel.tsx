import ArticleCard from './ArticleCard';
import CardCarousel from './CardCarousel';
interface Article {
  thumbnailUrl: string;
  title: string;
  summary: string;
  articleUrl: string;
}

interface ArticleCardCarouselProps {
  articles: Article[];
  showControls?: boolean;
  slidesPerView?: number;
}

const ArticleCardCarousel = ({ articles, showControls, slidesPerView }: ArticleCardCarouselProps) => {
  return (
    <CardCarousel
      items={articles}
      renderItem={(article) => (
        <div className="w-full flex flex-col h-full">
          <ArticleCard {...article} />
        </div>
      )}
      showControls={showControls}
      slidesPerView={slidesPerView}
    />
  )
};

export default ArticleCardCarousel;