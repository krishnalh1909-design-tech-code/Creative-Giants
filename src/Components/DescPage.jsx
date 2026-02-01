import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const DescPage = () => {
  const textRef = useRef(null);

  const splitTextIntoLines = (element) => {
    const words = element.textContent.trim().split(" ");
    element.innerHTML = "";

    const lines = [];
    const containerWidth = element.clientWidth;

    let lineMask = document.createElement("span");
    let lineText = document.createElement("span");

    lineMask.style.display = "block";
    lineMask.style.overflow = "hidden";

    lineText.style.paddingBottom = "0.25em";
    lineText.style.display = "inline-block";
    lineText.style.whiteSpace = "nowrap";

    lineMask.appendChild(lineText);
    element.appendChild(lineMask);

    words.forEach((word) => {
      const prevText = lineText.textContent;
      lineText.textContent = prevText ? `${prevText} ${word}` : word;

      // REAL line break detection
      if (lineText.scrollWidth > containerWidth) {
        lineText.textContent = prevText;
        lines.push(lineText);

        // create new line
        lineMask = document.createElement("span");
        lineText = document.createElement("span");

        lineMask.style.display = "block";
        lineMask.style.overflow = "hidden";

        lineText.style.paddingBottom = "0.25em";
        lineText.style.display = "inline-block";
        lineText.style.whiteSpace = "nowrap";
        lineText.textContent = word;

        lineMask.appendChild(lineText);
        element.appendChild(lineMask);
      }
    });

    lines.push(lineText);
    return lines;
  };

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el || el.dataset.split) return;
    el.dataset.split = "true";

    // wait for fonts to load
    document.fonts.ready.then(() => {
      const lines = splitTextIntoLines(el);

      gsap.from(lines, {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
      });
    });
  }, []);

  return (
    <div className="min-h-[110vh] flex flex-col gap-10 w-full bg-[#FFFEF7] px-10 py-20 overflow-hidden">
      <div className="w-full">
        <div className="overflow-hidden">
          <h1 className="text-xl font-[Regular]">WHAT WE DO</h1>
        </div>

        <div className="overflow-hidden w-full">
          <p
            ref={textRef}
            className="font-[Light] w-full text-xl md:text-3xl lg:text-6xl md:w-[90%] lg:w-[65%] mt-6 "
          >
            We are artists, designers, producers, creatives, clients and
            technicians. We work together to create immersive experiences and
            bring ideas to life in real-world spaces.
          </p>
        </div>
      </div>

      {/* <div className="w-full min-h-[30vh] bg-yellow-500"></div> */}
    </div>
  );
};

export default DescPage;
