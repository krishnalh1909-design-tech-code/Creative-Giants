import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Projects from './Pages/Projects';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Process from './Pages/Process';
import PageTransition from './Components/PageTransition';
import CustomCursor from './Components/CustomCursor';
import PageLayout from './Components/PageLayout';
import ProjectsList from './Components/ProjectsList';
import ProjectList from './Pages/ProjectList';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);
  return (
    <PageTransition>
      {(displayLocation) => (
        <Routes location={displayLocation}>
          {/* Routes WITH cursor */}
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path="list" element={<ProjectList />} />
            </Route>

            <Route path="news" element={<News />} />
            <Route path="process" element={<Process />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </PageTransition>
  )
}

export default App
