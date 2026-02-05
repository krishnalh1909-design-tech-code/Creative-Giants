import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const overlayRef = useRef(null);
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    if (isAnimating) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayLocation(location); // 🔥 route swap happens HERE
        setIsAnimating(false);
      },
    });

    tl.to(overlayRef.current, {
      y: "0%",
      duration: 0.5,
      ease: "power4.inOut",
    });

  }, [location]);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { y: "0%" },
      {
        y: "-100%",
        duration: 1.5,
        delay:0.5,
        ease: "power4.inOut",
      }
    );
  }, [displayLocation]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-999 translate-y-full"
      />

      {/* Rendered routes */}
      {children(displayLocation)}
    </>
  );
};

export default PageTransition;
