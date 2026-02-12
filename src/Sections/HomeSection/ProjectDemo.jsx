import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectDemo = () => {
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  const projects = [
    {
      id: 1,
      number: "Project 01",
      title: "Halo MasterPiece",
      tags: ["PRODUCTION", "LONDON", "EDELMAN", "XBOX"],
      description:
        "A 6X3 metre renaissance-style oil painting to support the launch of Xbox’s flagship video game, Halo Infinite.",
      image:
        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6852b1f05b45794fec384c15_Halo-thumb.webp",

    },
    {
      id: 2,
      number: "Project 02",
      title: "Impossible to ignore",
      tags: ["PRODUCTION", "LONDON", "ADAM & EVE DDB", "CRISIS"],
      description:
        "A 2.5 ton, 4.3m high, hyper-realistic sculpture of a homeless man, installed at London Kings Cross and Birmingham’s Bullring.",
      image:
        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp",

    },
    {
      id: 3,
      number: "Project 03",
      title: "Silent Fall",
      tags: ["EVENT MANAGEMENT", "GUEST EXPERIENCE SERVICES", "ART CONSULTANCY", "SUPERBLUE- A.A MURAKAMI"],
      description:
        "A fully immersive exhibition by Superblue London and artist duo AA Murakami.",
      image:
        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c7ae87290f99fcacbb_dc48c758f2deddacf340441d11ac0c4a_Silent%20Fall.webp",

    },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(trackRef.current, {
        xPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * 2}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={pinRef}
      className="min-h-[101vh] bg-black w-screen overflow-hidden"
    >
      <div
        ref={trackRef}
        className="h-full w-full md:w-[300vw] flex items-center"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative text-white  h-[70vh] w-screen flex justify-around items-center`}
          >
            {/* LEFT CONTENT */}
            <div className="mix-blend-difference flex z-50 flex-col gap-5 font-[Light] h-[80%] w-[35%] px-8">
              <h1 className="text-2xl">{project.number}</h1>
              <h1 className="text-7xl w-[60%] ">
                {project.title}
              </h1>
            </div>

            {/* RIGHT CONTENT */}
            <div className="z-50 h-[80%] w-[20%] font-[Light] px-5 flex gap-5 flex-col justify-end">
              <div className="flex flex-col gap-2">
                {project.tags.map((tag, index) => (
                  <h1
                    key={index}
                    className="border-b-3 border-white w-fit"
                  >
                    {tag}
                  </h1>

                ))}
              </div>

              <p className="w-[95%]">
                {project.description}
              </p>
            </div>

            {/* CENTER IMAGE */}
            <div className="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[35%] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDemo;

