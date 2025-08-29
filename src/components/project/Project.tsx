import { useEffect, useState } from "react";
import { projects } from "../../utils/data";
import ProjectHeader from "./ProjectHeader";
import ProjectItem from "./ProjectItem";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [project, setProject] = useState("all");
  const [projectItem, setProjectItem] = useState(projects);
  const reverseItem = [...projectItem].reverse();
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? reverseItem : reverseItem.slice(0, 2);

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
        <div>
          <AnimatePresence>
            <motion.div
              key={displayedItems.length}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <ProjectItem projectItem={displayedItems} />
            </motion.div>
          </AnimatePresence>
          {projectItem.length > 2 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-jet text-light rounded-md hover:bg-jet/80"
              >
                {showAll ? "Show Less" : "Show All"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
