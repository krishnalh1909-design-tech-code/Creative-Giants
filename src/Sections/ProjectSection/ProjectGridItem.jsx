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
    <div className="min-h-screen w-full sm:w-1/2 lg:w-[33.3%] px-5 py-5 flex flex-col">
      {/* Image */}
      <div className="overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[70vh]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading */}
      <div className="overflow-hidden mt-3">
        <h1
          ref={headRef}
          className="text-sm sm:text-base"
        >
          {item.projectNo}
        </h1>
      </div>

      {/* Title */}
      <div className="overflow-hidden">
        <h1
          ref={textRef}
          className="text-2xl sm:text-4xl lg:text-5xl leading-tight"
        >
          {item.title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectGridItem;
