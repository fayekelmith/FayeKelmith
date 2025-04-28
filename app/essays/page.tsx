import React from "react";
import { essays } from "@/lib/essay-library";
import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Essays | Faye Kelmith",
  description: "Collection of essays by Faye Kelmith",
};

const EssaysPage = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Essays</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my thoughts on various topics, from personal
          experiences to philosophical musings.
        </p>
      </div>

      <div className="grid gap-8">
        {essays.map((essay) => (
          <Card key={essay.id} className="overflow-hidden">
            <div className="md:grid md:grid-cols-3 md:gap-4">
              {essay.image && (
                <div className="md:col-span-1">
                  <Image
                    src={essay.image}
                    width={400}
                    height={250}
                    alt={essay.title}
                    className="w-full h-full object-cover aspect-[16/10]"
                  />
                </div>
              )}
              <div
                className={`p-6 ${
                  essay.image ? "md:col-span-2" : "md:col-span-3"
                }`}
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">
                    {essay.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(essay.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardHeader>

                <CardContent className="p-0 mb-6">
                  <p className="text-base text-muted-foreground">
                    {essay.description}
                  </p>
                </CardContent>

                <CardFooter className="p-0">
                  <Link
                    href={essay.url}
                    target={essay.url.startsWith("http") ? "_blank" : "_self"}
                  >
                    <Button variant="default" size="lg">
                      Read Essay <MoveRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EssaysPage;
