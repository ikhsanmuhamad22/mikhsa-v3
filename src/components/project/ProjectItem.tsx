import { Link } from 'react-router-dom';

const ProjectItem = ({ projectItem }: ProjectItemProps) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-3 max-w-full ">
      {projectItem.map((project: ProjectItem) => (
        <Link
          to={project.view_code}
          key={project.id}
          className="bg-jet p-3 rounded-sm flex flex-col justify-between gap-2 hover:scale-105 transition-all hover:bg-dark "
        >
          <div>
            <img
              height={30}
              className="rounded-sm mb-2"
              src={`../../../public/project-img/${project.img}`}
              alt="kosong"
            />
            <div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-folder2-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                </svg>
                <p className="font-bold">{project.title}</p>
              </div>
              <p className="text-sm">{project.short_desc}</p>
            </div>
          </div>
          <div className="grid gap-2 text-center lg:grid-cols-3 grid-cols-2 mt-2">
            {project.stack.map((stack: string) => (
              <div className="bg-dark rounded-sm border border-white">
                <p className="text-sm font-semibold p-1">{stack}</p>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

interface ProjectItemProps {
  projectItem: ProjectItem[];
}

interface ProjectItem {
  id: number;
  title: string;
  img: string;
  stack: string[];
  short_desc: string;
  view_code: string;
  view_page: string | null | undefined;
  role: string;
}

export default ProjectItem;
