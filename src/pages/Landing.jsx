import React from 'react'
import Nav from '../Components/Home/Nav'
// import Hero from '../Components/Home/Hero'
import { ImagesSliderDemo } from '../Components/Home/Bg_Carousel'
import Hero from '../Components/Home/Hero'
import Nav2 from '../Components/Home/Nav2'

function Landing() {
  return (
    <div>
        <Nav/>
        <Nav2/>
        {/* <ImagesSliderDemo/> */}
        <Hero/>
        
    </div>
  )
}

export default Landing