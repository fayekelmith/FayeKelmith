"use client";
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
type EssayContent = {
  id: string;
  title: string;
  description: string;
  imgurl: string;
};
const EssayCard = (props: EssayContent) => {
  return (
    <Card className="flex flex-col justify-between hover:shadow-xl hover:scale-95 duration-700">
      <CardContent className="p-4">
        <Image
          src={props.imgurl}
          alt="Picture of the author"
          width={300}
          height={200}
        />
        <CardDescription className="mt-4">{props.description} </CardDescription>
      </CardContent>
      <CardFooter className="mb-0 py-0 h-16 bg-black text-slate-50 rounded-b-md hover:bg-slate-800 dark:bg-slate-500 dark:hover:bg-slate-900 font-bold">
        <Link
          className="text-center text-xl  w-full mx-0"
          href={`/api/essays/${props.id}`}
        >
          {props.title}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EssayCard;
