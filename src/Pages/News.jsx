import React from 'react'
import Navbar from '../Components/Navbar'
import NewsHeading from '../Sections/NewsSection/NewsHeading'
import NewsSpotlight from '../Sections/NewsSection/NewsSpotlight'
import Mailing from "../Components/Mailing"
import Footer from '../Components/Footer'

const News = () => {
  return (
    <>
    <Navbar/>
    <NewsHeading/>
    <NewsSpotlight/>
    <Mailing/>
    <Footer/>
    </>
  )
}

export default News
