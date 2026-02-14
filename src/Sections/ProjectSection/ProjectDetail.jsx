import { useParams } from "react-router-dom";
import { ProjectDetailsData } from "./ProjectDetailsData";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = ProjectDetailsData.find(
    (item) => item.id.toString() === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className={`${project.bg} h-[35vh] font-[Light] flex items-end text-8xl py-8 px-8 w-full overflow-hidden`}>
        <h1 className={`${project.text}`}>
          {project.title} 
        </h1>
      </div>
    </div>
  );
};

export default ProjectDetail;