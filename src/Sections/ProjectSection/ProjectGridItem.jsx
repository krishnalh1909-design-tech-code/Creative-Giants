import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";

const ProjectGridItem = ({ item }) => {
  const headRef = useRef(null);
  const textRef = useRef(null);

  useSplitTextAnimation({
    heading: {
      ref: headRef,
      delay: 0,
    },
    text: {
      ref: textRef,
      delay: 0.1,
      paddingBottom: 14,
    },
  });

  return (
    <Link
      to={`/projects/${item.id}`}   // 🔥 dynamic navigation
      className="min-h-[72vh] gap-2 w-full sm:w-1/2 lg:w-[33.3%] px-8 py-2 flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[70vh]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading */}
      <div className="overflow-hidden mt-5">
        <h1 ref={headRef} className="text-xl sm:text-base">
          {item.projectNo}
        </h1>
      </div>

      {/* Title */}
      <div className="overflow-hidden">
        <h1
          ref={textRef}
          className="text-2xl sm:text-4xl lg:text-4xl leading-tight"
        >
          {item.title}
        </h1>
      </div>
    </Link>
  );
};

export default ProjectGridItem;