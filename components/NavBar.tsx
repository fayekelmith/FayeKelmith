"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between px-8">
      <h1>
        <Link href="/">Kelmith</Link>
      </h1>

      <div className="hidden sm:block">
        <Link href="/projects" className="">
          <Button variant="outline">Projects</Button>
        </Link>
        <Link href="/essays" className="px-8">
          <Button variant="outline">Essays</Button>
        </Link>

        {theme === "dark" ? (
          <Button onClick={() => setTheme("light")}>Light Mode</Button>
        ) : (
          <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
