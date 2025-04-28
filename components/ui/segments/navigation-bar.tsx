"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "../button";
import { useState, useEffect } from "react";
import { unbounded } from "@/lib/utils";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex justify-between px-8">
      <h1 className={` ${unbounded.className}`}>
        <Link href="/">
          Kel<span className="text-coral">mith</span>
        </Link>
      </h1>

      <div className="hidden sm:block">
        <Link href="/essays" className="mr-4">
          Essays
        </Link>
        {mounted &&
          (theme === "dark" ? (
            <Button onClick={() => setTheme("light")}>Light Mode</Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
