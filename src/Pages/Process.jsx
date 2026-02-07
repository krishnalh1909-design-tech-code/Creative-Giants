import React, { useRef } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProcessHeroSection from '../Sections/ProcessSection/ProcessHeroSection'
import ProcessWhoSection from '../Sections/ProcessSection/ProcessWhoSection'
import Services from '../Sections/ProcessSection/Services'

const Process = () => {

  return (
    <>
      <Navbar />
      <ProcessHeroSection />
      <ProcessWhoSection />
      <Services/>
      <Footer />
    </>
  )
}

export default Process
