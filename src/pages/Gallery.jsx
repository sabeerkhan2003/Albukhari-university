import React from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Logos from '../Components/Home/Logos'
import Footer from '../Components/Home/Footer'

function Gallery() {
  return (
    <>
    <div className="sticky top-0 z-30 bg-white shadow-md ">
       <Nav2  text_color={"text-[#1C315E]"}/>
     </div>

     <Nav />
     <div className='md:pt-32 h-[100vh]'>
       {/* <Founder/> */}
       <p className='font-bold h-[50vh] flex justify-center items-center'>WELCOME TO GALLERY PAGE</p>
       <Logos/>
       <Footer/>
       </div>
   </>
  )
}

export default Gallery