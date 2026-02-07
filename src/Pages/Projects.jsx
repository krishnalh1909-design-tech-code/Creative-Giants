import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Mailing from "../Components/Mailing";
import { ProjectsGridData } from "../Sections/ProjectSection/ProjectsGridData";
import Navbar from "../Components/Navbar";
import ProjectHeading from "../Sections/ProjectSection/ProjectHeading";
import ProjectGridSection from "../Sections/ProjectSection/ProjectGridSection";

const Projects = () => {
  return (
    <>
      <Navbar menuBg="bg-white" menuText="text-black=" />
      <div className="min-h-screen w-full flex flex-col font-[Light] text-white bg-[#000000]">       
         <ProjectHeading />
         <ProjectGridSection />
      </div>
      <Mailing />
      <Footer />
    </>
  );
};

export default Projects;
