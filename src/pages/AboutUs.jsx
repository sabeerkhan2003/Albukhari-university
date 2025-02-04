import React from 'react'
import Founder from '../Components/Home/Founder'
import Nav from '../Components/Home/Nav'
import Nav2 from '../Components/Home/Nav2'
import Hero from '../Components/Home/Hero'
import Logos from '../Components/Home/Logos'
import Footer from '../Components/Home/Footer'
import Button from '../Components/ui/Button'

function AboutUs() {
  return (
    <>
        <div className="sticky top-0 z-30 bg-white  shadow-md ">
        <Nav2 text_color={"text-[#1C315E]"}/>
      </div>
      <Nav />
      <div className='md:pt-32 h-[100vh]'>
        {/* <Founder/> */}
        <Hero/>
        <div className='m-6 md:mx-auto w-fit'>
        <Button name={"view more"}/>
        </div>
        
        <Logos/>
        <Footer/>
        </div>
      
    </>
  )
}

export default AboutUs



