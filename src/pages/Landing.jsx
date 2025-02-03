import React from 'react';
import Nav from '../Components/Home/Nav';
import { Bg_Carousel } from '../Components/Home/Bg_Carousel';
import Hero from '../Components/Home/Hero';
import Nav2 from '../Components/Home/Nav2';
import Endline from '../Components/Home/Endline';
import Founder from '../Components/Home/Founder';
import Footer from '../Components/Home/Footer';
import Logos from '../Components/Home/Logos';
import EventsSlider from '../Components/Home/Eventslider';
import HomePopUp from '../Components/Home/HomePopUp';
import Button from '../Components/ui/Button';


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
      <Button name={"Online Admissions"} />
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
