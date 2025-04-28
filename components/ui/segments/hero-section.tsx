"use client";
import { useEffect, useMemo, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Unbounded } from "next/font/google";
import { motion } from "framer-motion";

import { Pickaxe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-unbounded",
});
const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Write Code 💻",
      "Write Essays ✏ ",
      "Build Businesses",
      "am a Friend 🤞",
      "love eating 🍔",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* <div>
            <Button variant="secondary" size="sm" className="gap-4">
               <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
          <div className="flex gap-4 flex-col">
            <h1
              className={`text-5xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular ${unbounded.className}`}
            >
              <span className="text-spektr-cyan-50">Hi 👋, Kelmith. I</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              <h2 className="text-2xl">
                Stuff about me that you probably don&pos;t need to know, but
                now, you do! 😇
              </h2>
              <div className="py-6 ml-4 text-left text-xl">
                <h3 className="my-4">
                  I am on a mission to become absolutely{" "}
                  <span className="text-red-500 font-bold">Unhireable</span> by
                  Dec 2025!
                </h3>
                <h3 className=" my-4">
                  My friend and I are on a mission to build a business every 3
                  months. We are on our second one now. It&apos;s called{" "}
                  <span className="text-purple-300">Vybedrop</span> Launching
                  soon.
                </h3>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center w-full mb-4">
              Some of my *significant work
            </h2>
            <div className="flex flex-row gap-3 justify-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-4 bg-purple-400 font-semibold text-md"
                  >
                    Vybedrop
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Vybedrop</h3>
                    <p className="text-sm text-muted-foreground">
                      Vybedrop is a media sharing platform. It allows you to
                      seamlessly share media with your friends and family. Media
                      sharing doesn&apos;t have to suck! We fix that.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href="https://testify.cool"
                    target="_blank"
                    className=""
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-4 bg-yellow-500 text-md font-semibold"
                    >
                      Testify
                    </Button>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Vybedrop</h3>
                    <p className="text-sm text-muted-foreground">
                      Testify is a testimonial collection, management and
                      distribution platform. it allows you to seamlessly convert
                      your customers&apos; stories into marketing assets.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
