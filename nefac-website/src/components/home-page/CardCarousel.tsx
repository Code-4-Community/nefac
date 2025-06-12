import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  carouselItemClass?: string;
  showControls?: boolean;
  slidesPerView?: number;
}

const CardCarousel = <T,>({ 
  items, 
  renderItem,
  carouselItemClass = "basis-full flex py-2 px-1/4 flex-shrink-0",
  showControls = true,
  slidesPerView = 2  // Default to 2 cards
}: CardCarouselProps<T>) => {
  return (
    <Carousel className="w-full py-4 mb-8">
      <CarouselContent className="flex">
        {items.map((item, i) => (
          <CarouselItem 
            key={i} 
            className={carouselItemClass}
            style={{flexBasis: `calc(100%/${slidesPerView})`}}
          >
            {renderItem(item)}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showControls && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default CardCarousel;