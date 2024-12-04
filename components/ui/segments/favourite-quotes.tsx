import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "../carousel";
import { v4 as uuidv4 } from "uuid";
import TextGradient from "../wrappers/text-gradient";
import { Card, CardContent, CardDescription, CardFooter } from "../card";

interface Quote {
  id: string;
  quote: string;
  author: string | "Anonymous";
  date: Date;
}

const quotes: Quote[] = [
  {
    id: uuidv4(),
    quote: "If you see me in a fight with a bear, pray for the bear.",
    author: "The Black Mamba (Kobe Bryant)",
    date: new Date("2024-12-03"),
  },
  {
    id: uuidv4(),
    quote:
      "The major reason for setting a goal is for what it makes of you to accomplish it. What it makes of you will always be the far greater value than what you get.",
    author: "Jim Rohn",
    date: new Date("2024-12-04"),
  },
];

const FavouriteQuotes = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl mb-4">
        Some Quotes I find <TextGradient text="Inspiring" /> and{" "}
        <TextGradient text="Intriguing" />
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {quotes.map((quote, key) => (
            <CarouselItem
              key={key}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 mx-4"
            >
              <Card className="w-96">
                <CardContent className="flex aspect-square items-center justify-center p-6 text-xl">
                  {quote.quote}
                </CardContent>
                <CardDescription className="text-center text-lg mb-4">
                  {quote.author}
                </CardDescription>
                <CardFooter className="text-sm flex justify-end w-full text-slate-500">
                  {quote.date.toDateString()}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FavouriteQuotes;
