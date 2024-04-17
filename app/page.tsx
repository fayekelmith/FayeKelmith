import Hero from "./(pages)/main-page-components/Hero";
import Updates from "./(pages)/main-page-components/Updates";
import Stories from "./(pages)/main-page-components/Stories";
import { Separator } from "@/components/ui/separator";
import ContactCard from "./(pages)/main-page-components/ContactCard";
export default function Home() {
  return (
    <main className="custom-main ">
      <Hero />

      <h1 className="my-8">My most recent Endeavours</h1>
      <Updates />
      <Separator className="my-4" />
      <h1 className="py-4">Excerpts and Anecdotes</h1>
      <Stories />
      <Separator className="my-4" />
      <h1 className="py-4">
        <span>Ideas ? </span> <span>Issues ? </span> <span>Coffee ? </span>{" "}
      </h1>
      <div className="grid grid-cols-2 gap-x-8 items-center bg-slate-100 rounded-md my-4 shadow-md dark:bg-slate-900">
        <div className=" bg-slate-300 h-full flex flex-col justify-center px-16 rounded-l-md dark:bg-slate-800">
          <h2 className="">Let's Talk</h2>

          <p className="py-4 text-xl">
            If you have any questions, ideas, opportunities or just want to say
            hi, feel free to drop me a message.
          </p>
        </div>
        <ContactCard />
      </div>
    </main>
  );
}
