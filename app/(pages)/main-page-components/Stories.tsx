"use client";
import { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Excerpt = {
  id: string;
  story: string;
  author: string;
  source: string;
  createdAt: string;
};

// TODO: Annimate the stories to slide
const Stories = () => {
  const [excerpts, setExcerpts] = useState<Excerpt[]>([]);
  useEffect(() => {
    getStories().then((data) => {
      if (data.stories) {
        setExcerpts(data.stories);
      }
    });
  }, []);
  return (
    <section className="p-8 bg-slate-50 dark:bg-slate-800">
      <Carousel>
        <CarouselContent>
          {excerpts.map((excerpt: Excerpt) => (
            <CarouselItem key={excerpt.id}>
              <StoryCard
                story={excerpt.story}
                author={excerpt.author}
                source={excerpt.source}
                createdAt={excerpt.createdAt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-slate-300 shadow-md dark:bg-slate-400" />
        <CarouselNext className="hover:bg-slate-300 shadow-md dark:bg-slate-400" />
      </Carousel>
    </section>
  );
};

export default Stories;

//FIXME: ship this out to a hook and handle loading and error states
const getStories = async () => {
  try {
    const res = await axios.get("/api/stories");
    return res.data;
  } catch (error) {
    console.log("Error fetching stories: ", error);
    return { error: "Error fetching stories" };
  }
};
