import Hero from "./(pages)/main-page-components/Hero";
import Updates from "./(pages)/main-page-components/Updates";
import Stories from "./(pages)/main-page-components/Stories";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <main className="custom-main ">
      <Hero />

      <h1 className="my-8">My most recent Endeavours</h1>
      <Updates />
      <Separator className="my-4" />
      <h1 className="py-4">Excerpts and Anecdotes</h1>
      <Stories />
    </main>
  );
}
