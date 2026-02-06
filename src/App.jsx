import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import News from './Pages/News'
import Contact from './Pages/Contact'
import Process from './Pages/Process'
import ProjectList from './Pages/ProjectList'

import PageTransition from './Components/PageTransition'
import PageLayout from './Components/PageLayout'
import ScrollToTop from './Components/ScrollToTop'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    lenisRef.current = lenis

    const tick = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ScrollToTop lenis={lenisRef.current} />

      <PageTransition>
        {(displayLocation) => (
          <Routes location={displayLocation}>
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
    </>
  )
}

export default App
