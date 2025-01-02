import React from 'react'
import Nav from '../Components/Home/Nav'
// import Hero from '../Components/Home/Hero'
import { ImagesSliderDemo } from '../Components/Home/Bg_Carousel'
import Hero from '../Components/Home/Hero'
import Nav2 from '../Components/Home/Nav2'
import Endline from '../Components/Home/Endline'
import Banners from '../Components/Home/Banners'
import Founder from '../Components/Home/Founder'
import Events from '../Components/Home/Events'
import Footer from '../Components/Home/Footer'

function Landing() {
  return (
    <div>
    
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Nav2 />
      </div>
        <Nav/>
        {/* <Nav2/> */}
        <ImagesSliderDemo/>
        <Founder/>
        <Hero/>
        <Events/>
        {/* <Banners/> */}
        <Footer/>
        <Endline/>
    </div>
  )
}

export default Landing