import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Unbounded } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-unbounded",
});
