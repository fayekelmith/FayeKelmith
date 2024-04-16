import StoryCard from "./StoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Excerpt = {
  story: string;
  author: string;
  source: string;
};

import * as data from "@/public/ui/utils/stores.json";
// TODO: Annimate the stories to slide
const Stories = () => {
  return (
    <section className="my-8 bg-slate-50">
      <h1 className="py-4">Excerpts and Anecdotes</h1>
      <Carousel>
        <CarouselContent>
          {data.excerpts.map((excerpt: Excerpt, index: number) => (
            <CarouselItem key={index}>
              <StoryCard
                story={excerpt.story}
                author={excerpt.author}
                source={excerpt.source}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Stories;
