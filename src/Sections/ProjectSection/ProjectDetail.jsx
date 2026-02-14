import { useParams } from "react-router-dom";
import { ProjectDetailsData } from "./ProjectDetailsData";
import Footer from "../../Components/Footer";

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

  const gallery = project.imgGallery || [];
  const [img1, img2, img3, img4, img5,img6,img7,img8] = gallery;


  return (
    <div className="min-h-screen w-full">

      {/* Header */}
      <div
        className={`
          ${project.bg}
          min-h-[25vh] md:min-h-[30vh] lg:min-h-[35vh]
          flex items-end
          px-4 md:px-8
          py-6 md:py-8
          overflow-hidden
        `}
      >
        <h1
          className={`
            ${project.text}
            font-[Light]
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
          `}
        >
          {project.title}
        </h1>
      </div>

      {/* Light Section */}
      <div
        className={`${project.bgLight} h-[15vh] md:h-[20vh] w-full`}
      ></div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={project.image}
          alt=""
        />
      </div>

      {/* Gallery Section */}
      <div className="py-16 md:py-24 w-full flex flex-col items-center gap-10 md:gap-16 px-4">

        <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={img6}
            alt=""
          />
        </div>

        <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={img7}
            alt=""
          />
        </div>

        <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={img8}
            alt=""
          />
        </div>
      </div>

      <div className="px-8 w-full min-h-[90vh] pb-10 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-[repeat(6,1fr)] gap-4 min-h-[85vh]">

          {/* LEFT LARGE IMAGE */}
          <div className="col-span-12 md:col-span-6 row-span-6 overflow-hidden">
            <img
              src={img1}
              alt="Large"
              className="w-full h-full object-cover "
            />
          </div>

          {/* TOP CENTER WIDE IMAGE */}
          <div className="col-span-12 md:col-span-4 row-span-3">
            <img
              src={img2}
              alt="Wide"
              className="w-full h-full object-cover "
            />
          </div>

          {/* TOP RIGHT SMALL IMAGE */}
          <div className="col-span-6 md:col-span-2 row-span-3">
            <img
              src={img3}
              alt="Small"
              className="w-full h-full object-cover "
            />
          </div>

          {/* BOTTOM CENTER SMALL IMAGE */}
          <div className="col-span-6 md:col-span-3 row-span-3">
            <img
              src={img4}
              alt="Bottom Small"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM CENTER WIDE IMAGE */}
          <div className="col-span-12 md:col-span-3 row-span-3">
            <img
              src={img5}
              alt="Bottom Wide"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;