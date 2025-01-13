import React from 'react';
import Nav from '../Components/Home/Nav';
import { Bg_Carousel } from '../Components/Home/Bg_Carousel';
import Hero from '../Components/Home/Hero';
import Nav2 from '../Components/Home/Nav2';
import Endline from '../Components/Home/Endline';
import Banners from '../Components/Home/Logos';
import Founder from '../Components/Home/Founder';
import Events from '../Components/Home/Announcements';
import Footer from '../Components/Home/Footer';
import Logos from '../Components/Home/Logos';
import EventsSlider from '../Components/Home/Eventslider';
import Admission_button from '../Components/Home/Admission_button';
import HomePopUp from '../Components/Home/HomePopUp';


function Landing() {
  return (
    <div>
      {/* Popup Advertisement */}
      <HomePopUp/>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Nav2  text_color={"text-white"}/>
      </div>

      <Nav />
      <Bg_Carousel />
      <div className='flex justify-center py-14'>
      <Admission_button name={"Online Admissions"} />
      </div>
      <Founder />
      <Hero />
      <EventsSlider />
      <Logos />
      <Footer />
      <Endline />
    </div>
  );
}

export default Landing;
