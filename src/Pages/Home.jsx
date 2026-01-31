import React from 'react'
import BgVid from '../Components/BgVid'
import Title from '../Components/Title'
import DescPage from '../Components/DescPage'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-500'>
      <BgVid />
      <Title />
      <DescPage />
    </div>
  )
}

export default Home
