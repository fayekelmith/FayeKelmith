import Hero from "@/components/ui/segments/hero-section";
import Calendar from "@/components/ui/segments/contact-calendar";
import Essays from "@/components/ui/segments/essays";
import FavouriteQuotes from "@/components/ui/segments/favourite-quotes";
export default function Home() {
  return (
    <main className="custom-main ">
      <Hero />
      <FavouriteQuotes />
      <Essays />
      <div className="mx-auto w-full text-center">
        <h1 className="mb-10">
          Let&apos;s{" "}
          <span className="text-transparent bg-gradient-to-r from-jade to-teal-600 bg-clip-text inline-block ">
            Talk
          </span>
        </h1>
        <Calendar />
      </div>
    </main>
  );
}
