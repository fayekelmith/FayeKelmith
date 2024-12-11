import { IncompleteWarningComponent } from "@/components/mdx/static-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="container max-w-7xl mx-auto py-8">
      <article className="leading-7 mx-20">{children}</article>
      <div className="flex w-full mt-4 items-center ml-20">
        <Button size="lg">
          <Link href="/essays" className="flex space-x-2 text-lg items-center">
            <span>More Essays</span>
            <MoveRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
