import Hero from "@/components/ui/segments/Hero";
import Calendar from "@/components/ui/segments/Calendar";
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
import Link from "next/link";
export default function Home() {
  return (
    <main className="custom-main ">
      <Hero />
      <div className="mx-auto container w-full">
        <h2 className="w-fit">I am currently thinking about: </h2>
        <div className="my-8 grid gap-4 md::grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle className="my-3 text-center ">
              Talking To Someone in Pain
            </CardTitle>
            <CardContent>
              <Image
                src="/images/someone_in_pain.jpg"
                width={960}
                height={450}
                alt="Mental Health"
                className="object-cover h-40"
              />
              <CardDescription className="">
                In this Essay, I am attempting to walk through how I could
                optimally have fruitful conversation when they are troubled.
              </CardDescription>
            </CardContent>
            <CardFooter className="text-center">
              <Link
                href="https://monogr.ph/674ec46fec3468250e63e83f"
                target="_blank"
                className="w-full inline-block"
              >
                <Button variant="outline" size="lg">
                  Read <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mx-auto w-full text-center">
        <h1 className="mb-10">
          Let&apos;s{" "}
          <span className="text-transparent bg-gradient-to-r from-jade to-teal-600 bg-clip-text inline-block ">
            Talk
          </span>
        </h1>
        <Calendar />
      </div>
    </main>
  );
}
