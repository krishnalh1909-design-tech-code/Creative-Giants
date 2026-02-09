import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {splitTextIntoLines} from "../Utils/splitTextsIntoLines"

gsap.registerPlugin(ScrollTrigger);

export function useSplitTextAnimation({
  heading: {
    ref: headingRef,
    delay: headingDelay = 0,
  } = {},

  text: {
    ref: textRef,
    delay: textDelay = 0,
    paddingBottom: textPaddingBottom = 12,
  } = {},

  para: {
    ref: paraRef,
    delay: paraDelay = 0,
    paddingBottom: paraPaddingBottom = 12,
  } = {},
}) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        // ---------------- HEADING ----------------
        if (headingRef?.current) {
          gsap.from(headingRef.current, {
            yPercent: 120,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: headingDelay,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              once: true,
            },
          });
        }

        // ---------------- TEXT ----------------
        if (textRef?.current) {
          animateSplitText(
            textRef.current,
            textPaddingBottom,
            textDelay
          );
        }

        // ---------------- PARA ----------------
        if (paraRef?.current) {
          animateSplitText(
            paraRef.current,
            paraPaddingBottom,
            paraDelay
          );
        }

        ScrollTrigger.refresh();
      });
    });

    return () => ctx.revert();
  }, []);
}

// 🔹 shared split + animation
function animateSplitText(element, paddingBottom, delay) {
  element.innerHTML = element.textContent;
  delete element.dataset.split;

  const lines = splitTextIntoLines(element, paddingBottom);

  gsap.from(lines, {
    yPercent: 100,
    duration: 1.1,
    ease: "power4.out",
    stagger: 0.08,
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      once: true,
    },
  });
}