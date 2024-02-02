import ProjectHeader from './ProjectHeader';
import ProjectItem from './ProjectItem';

const Project = () => {
  return (
    <section id="Project" className="my-10">
      <h1 className="text-2xl font-bold mb-3">Projects</h1>
      <div className="px-2">
        <ProjectHeader />
        <ProjectItem />
      </div>
    </section>
  );
};

export default Project;
