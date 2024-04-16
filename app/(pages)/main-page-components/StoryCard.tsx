import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface StoryCardProps {
  story: string;
  author: string;
  source: string;
}
const StoryCard = (props: StoryCardProps) => {
  return (
    <Card className="p-12">
      <CardContent className="text-2xl">
        <p className="">{props.story}</p>
        <div className="text-right text-xl">
          <p className="">{props.author}</p>
        </div>
      </CardContent>
      <CardFooter>
        {/* <Button>Paint</Button> */}
        <p>
          Source : <span>{props.story}</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
