import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface StoryCardProps {
  story: string;
  author: string;
  source: string;
}
const StoryCard = (props: StoryCardProps) => {
  return (
    <Card className="p-12 bg-slate-100 my-4 shadow-md">
      <CardContent className="">
        <p className="text-2xl">{props.story}</p>
        <div className="text-right text-xl">
          <p className="">{props.author}</p>
        </div>
        <p>
          Source : <span>{props.story}</span>
        </p>
        <p>
          <Button variant="outline">Generate</Button> an Image with{" "}
          <code>DALL-E</code>
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StoryCard;
