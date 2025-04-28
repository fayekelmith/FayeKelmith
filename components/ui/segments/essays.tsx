import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import TextGradient from "../wrappers/text-gradient";
import Link from "next/link";
import { essays } from "@/lib/essay-library";

const Essays = () => {
  return (
    <div className="mx-auto container w-full">
      <div className="flex justify-between">
        <h3 className="w-fit text-2xl md:text-4xl font-semibold">
          Epistles to <TextGradient text="Faye Kelmith" />{" "}
        </h3>
        <Button className="">
          <Link href="/essays" className="flex space-x-2 items-center">
            <span className="text-lg">See all</span>
            <MoveRight className="w-4 h-4 ml-4" />
          </Link>
        </Button>
      </div>
      <div className="my-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...essays].reverse().map((essay) => (
          <Card key={essay.id}>
            <CardTitle className="my-3 text-center">{essay.title}</CardTitle>
            <CardContent>
              {essay.image && (
                <Image
                  src={essay.image}
                  width={960}
                  height={450}
                  alt={essay.title}
                  className="object-cover h-40"
                />
              )}
              <CardDescription className="">
                {essay.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="text-center">
              <Link href={essay.url} className="w-full inline-block">
                <Button variant="outline" size="lg">
                  Read <MoveRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Essays;
