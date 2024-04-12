"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between">
      <h1>Kelmith</h1>

      <div>
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
