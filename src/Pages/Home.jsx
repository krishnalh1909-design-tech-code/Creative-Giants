import React from 'react'
import BgVid from '../Sections/HomeSection/BgVid'
import Title from '../Sections/HomeSection/Title'
import DescPage from '../Sections/HomeSection/DescPage'
import ProjectDemo from '../Sections/HomeSection/ProjectDemo'
import GetStarted from '../Sections/HomeSection/GetStarted'
import Testimonials from '../Sections/HomeSection/Testimonials'
import News from '../Sections/HomeSection/News'
import Mailing from '../Components/Mailing'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen w-full'>
        <Navbar/>
        <BgVid />
        <Title />
        <DescPage />
        {/* <ProjectDemo /> */}
        {/* <GetStarted /> */}
        <Testimonials />
        {/* <News /> */}
        {/* <Mailing /> */}
        <Footer />
      </div>
    </>
  )
}

export default Home
