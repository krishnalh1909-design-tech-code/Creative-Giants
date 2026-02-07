import React, { useState } from 'react'
import Footer from '../Components/Footer';
import Mailing from '../Components/Mailing';
import Navbar from '../Components/Navbar';

import ProjectListSection from '../Sections/ProjectSection/ProjectListSection';

const ProjectList = () => {
  return (
    <>
      <Navbar menuBg="bg-white" menuText="text-black=" />
      <ProjectListSection />
      <Mailing />
      <Footer />
    </>
  )
}

export default ProjectList
