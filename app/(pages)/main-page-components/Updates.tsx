import ProjectCard from "./ProjectCard";
const Updates = () => {
  return (
    <section className="min-w-full my-8">
      <h1 className="my-8">My most recent Endeavours</h1>
      <div className="grid grid-cols-4 gap-x-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Updates;
