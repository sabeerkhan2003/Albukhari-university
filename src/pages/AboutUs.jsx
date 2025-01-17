import React from 'react'
import Founder from '../Components/Home/Founder'
import Nav from '../Components/Home/Nav'
import Nav2 from '../Components/Home/Nav2'

function AboutUs() {
  return (
    <>
        <div className="sticky top-0 z-30 bg-white  shadow-md ">
        <Nav2 text_color={"text-[#1C315E]"}/>
      </div>
      <Nav />
      <div className='md:pt-32 h-[100vh]'>
        <Founder/>
        </div>
    </>
  )
}

export default AboutUs



