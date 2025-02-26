import React from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Form from "../Components/Contact/Form"
import Methods from '../Components/Contact/Methods'
import DirectContacts from '../Components/Contact/DirectContacts'
import Map from '../Components/Contact/Map'
import Footer from '../Components/Home/Footer'
import Logos from '../Components/Home/Logos'

function Contact() {
  return (
    <>
    <div className="sticky top-0 z-30 bg-white shadow-md ">
        <Nav2  text_color={"text-[#1C315E]"}/>
      </div>

      <Nav />
      <>
      <div className='py-10  md:pt-32 lg:pt-44 px-6 flex flex-col md:grid md:grid-cols-2 lg:space-x-0  flex-wrap  xl:px-40 justify-center gap-10 xl:gap-x-5    bg-gray-50'>
      <Form />
      <Methods/>
     <DirectContacts/>
     <Map/>
      </div>
      <Logos/>
      <Footer/>
      </>
    </>
  )
}

export default Contact