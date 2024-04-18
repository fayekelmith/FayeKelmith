import ProjectCard from "./ProjectCard";
const ProjectCardsHolder = () => {
  return (
    <section className="min-w-full my-4">
      <div className="grid grid-cols-4 gap-x-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectCardsHolder;
