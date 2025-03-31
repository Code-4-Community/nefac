import ArticleCard from './ArticleCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Article {
  thumbnailUrl: string;
  title: string;
  summary: string;
  articleUrl: string;
}

interface ArticleCardCarouselProps {
  articles: Article[];
}

const ArticleCardCarousel = ({ articles }: ArticleCardCarouselProps) => {
  return (
    <Carousel className="w-full py-4 mb-8">
      <CarouselContent className="flex">
        {articles.map((article, i) => (
          <CarouselItem 
            key={i}
            className="basis-full md:basis-1/2 flex p-2"
          >
            <div className="w-full flex flex-col h-full">
              <ArticleCard
                thumbnailUrl={article.thumbnailUrl}
                title={article.title}
                summary={article.summary}
                articleUrl={article.articleUrl}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default ArticleCardCarousel;
