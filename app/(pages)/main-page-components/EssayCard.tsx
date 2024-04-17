"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EssayCardProps {
  title: string;
  description: string;
  imgurl: string;
}
import Image from "next/image";
const EssayCard = (props: EssayCardProps) => {
  return (
    <Card className="p-8 bg-slate-100 shadow-sm hover:shadow-lg duration-700">
      <div className="flex gap-x-8 items-center">
        <CardContent>
          <Image
            src={props.imgurl}
            alt="Essay Image"
            width={150}
            height={150}
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            <h2>{props.title}</h2>
            <p>
              {props.description.length > 100
                ? props.description.slice(0, 100) + "..."
                : props.description}
            </p>
            <Button className="items-end">Read More</Button>
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default EssayCard;
