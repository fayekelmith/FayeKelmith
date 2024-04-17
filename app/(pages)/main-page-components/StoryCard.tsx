import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface StoryCardProps {
  story: string;
  author: string;
  source: string;
  createdAt: string;
}
const StoryCard = (props: StoryCardProps) => {
  return (
    <Card className="p-12 dark:bg-slate-900 bg-slate-100 my-4 shadow-md">
      <CardContent className="">
        <p className="text-2xl py-8">{props.story}</p>
        <div className="text-right text-xl my-4">
          <p className="">~ {props.author}</p>
        </div>
        <p>
          Source : <span>{props.source}</span>
        </p>
      </CardContent>
      <CardFooter>
        <p>
          <Button variant="outline">Generate</Button> an Image with{" "}
          <code>DALL-E</code>
        </p>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
