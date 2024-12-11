import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import NavBar from "@/components/ui/segments/navigation-bar";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Kelmith",
  description: "Faye Kelmith's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Toaster position="bottom-right" reverseOrder={false} />
          <main className="min-h-screen flex flex-row">{children}</main>
          <footer className="text-center py-4 self-end">
            <p>The next time you show up, it will look better 🤞 </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
