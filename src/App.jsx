import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Process from "./Pages/Process";
import ProjectList from "./Pages/ProjectList";

import PageTransition from "./Components/PageTransition";
import PageLayout from "./Components/PageLayout";
import ProjectDetail from "./Sections/ProjectDetail/ProjectDetail";
import NewsDetail from "./Sections/NewsSection/NewsDetail";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 2,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <PageTransition lenisRef={lenisRef}>
      {(displayLocation) => (
        <Routes
          location={displayLocation}
          key={displayLocation.pathname}   // 🔥 THIS FIXES YOUR ISSUE
        >
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path="list" element={<ProjectList />} />
              <Route path=":id" element={<ProjectDetail />} />
            </Route>

            <Route path="news">
              <Route index element={<News />} />
              <Route path=":id" element={<NewsDetail />} />
            </Route>


            <Route path="process" element={<Process />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </PageTransition>
  );
};

export default App;