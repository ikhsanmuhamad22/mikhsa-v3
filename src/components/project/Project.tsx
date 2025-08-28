import { useEffect, useState } from "react";
import { projects } from "../../utils/data";
import ProjectHeader from "./ProjectHeader";
import ProjectItem from "./ProjectItem";

const Project = () => {
  const [project, setProject] = useState("all");
  const [projectItem, setProjectItem] = useState(projects);

  const onChangeProject = (result: string) => {
    setProject(result);
  };

  const frontend = () => {
    return projects.filter((p) => p.role === "frontend");
  };
  const backend = () => {
    return projects.filter((p) => p.role === "backend");
  };
  const application = () => {
    return projects.filter((p) => p.role === "application");
  };

  useEffect(() => {
    switch (project) {
      case "frontend":
        setProjectItem(frontend);
        break;
      case "backend":
        setProjectItem(backend);
        break;
      case "application":
        setProjectItem(application);
        break;
      default:
        setProjectItem(projects);
        break;
    }
  }, [project]);

  return (
    <section id="Project" className="my-10">
      <h1 className="text-2xl font-bold mb-3">Projects</h1>
      <div className="px-2">
        <ProjectHeader changeProject={onChangeProject} project={project} />
        <ProjectItem projectItem={projectItem} />
      </div>
    </section>
  );
};

export default Project;
