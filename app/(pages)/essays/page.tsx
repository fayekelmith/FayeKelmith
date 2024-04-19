import EssayCard from "./EssayCard";
const data = {
  title: "Nihil Admirari",
  description:
    "Nihil admirari is a philosophical concept that suggests the importance of remaining indifferent to external events and not being easily impressed or surprised. This essay explores the implications of embracing a mindset of detachment and the potential benefits it can bring to one's life.",
  imgurl: "/images/kelmith.png",
};

const Essays = () => {
  return (
    <main className="">
      <h1 className="text-center mb-8">Essays</h1>
      <section className="flex flex-col space-y-8 mx-8">
        <EssayCard
          title={data.title}
          description={data.description}
          imgurl={data.imgurl}
        />
        <EssayCard
          title={data.title}
          description={data.description}
          imgurl={data.imgurl}
        />
        <EssayCard
          title={data.title}
          description={data.description}
          imgurl={data.imgurl}
        />
      </section>
    </main>
  );
};

export default Essays;
