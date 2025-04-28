import Hero from "@/components/ui/segments/hero-section";
import Calendar from "@/components/ui/segments/contact-calendar";
import Essays from "@/components/ui/segments/essays";
import FavouriteQuotes from "@/components/ui/segments/favourite-quotes";
export default function Home() {
  return (
    <div className="container mx-auto flex flex-col">
      <Hero />
      <FavouriteQuotes />
      <Essays />
      <section className="mx-auto w-full text-center">
        <h1 className="mb-10">
          Let&apos;s{" "}
          <span className="text-transparent bg-gradient-to-r from-coral to-coralplus bg-clip-text inline-block ">
            Talk
          </span>
        </h1>
        <Calendar />
      </section>
    </div>
  );
}
