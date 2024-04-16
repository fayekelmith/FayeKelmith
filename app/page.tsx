import Hero from "./(pages)/main-page-components/Hero";
import Updates from "./(pages)/main-page-components/Updates";
import Stories from "./(pages)/main-page-components/Stories";
export default function Home() {
  return (
    <main className="custom-main ">
      <Hero />
      <Updates />
      <Stories />
    </main>
  );
}
