import React, { useRef } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProcessHeroSection from '../Sections/ProcessSection/ProcessHeroSection'
import ProcessWhoSection from '../Sections/ProcessSection/ProcessWhoSection'

const Process = () => {

  return (
    <>
      <Navbar />
      <ProcessHeroSection />
      <ProcessWhoSection />
      <Footer />
    </>
  )
}

export default Process
