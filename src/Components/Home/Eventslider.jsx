import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Announcements from './Announcements';

import img1 from "../../assets/Events/Event1.png";
import img2 from "../../assets/Events/Event2.png";
import img3 from "../../assets/Events/Event3.png";
import img4 from "../../assets/Events/Event4.png";
import { Icon } from '@iconify/react/dist/iconify.js';

const EventSlider = () => {
  const events = [
    {
      image: img1,
      name: "BSA ARIF BUHARY RAHMAN",
      role: "President",
      description:
        "The higher education landscape is changing in tandem with the economic situations, industry requirements, and technological development globally...",
    },
    {
      image: img2,
      name: "John Doe",
      role: "CEO",
      description:
        "Education is a transformative process that empowers individuals to achieve their potential and contribute to society...",
    },
    {
      image: img3,
      name: "Jane Smith",
      role: "Director",
      description:
        "The importance of accessibility in education cannot be overstated as we move towards a more connected world...",
    },
    {
      image: img4,
      name: "Alice Johnson",
      role: "Manager",
      description:
        "Our vision is to create a sustainable and inclusive education system that meets the challenges of the 21st century...",
    },
    {
      image: img2,
      name: "Michael Smith",
      role: "Advisor",
      description:
        "In a rapidly changing world, education should be future-ready, providing learners with tools to thrive...",
    },
  ];

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button 
      className="absolute -left-5 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all"
      onClick={onClick}
    >
    <Icon icon="icon-park-solid:left-one" className="text-2xl text-gray-700" /> 
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button 
      className="absolute -right-5 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all"
      onClick={onClick}
    >
      <Icon icon="icon-park-solid:right-one" className="text-2xl text-gray-700" /> 
    </button>
  );

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-20 md:gap-5 lg:gap-16 xl:gap-20 mx-5 lg:mx-28 my-10 md:my-16 lg:my-20'>
      {/* Slider Section */}
      <div className="w-full md:w-1/2 md:mt-5 lg:mt-0 flex flex-col items-center text-center md:text-start relative">
        <h1 className="cursor-pointer text-xl font-opensans text-blue-950 px-2 py-1 sm:px-4 sm:py-2 sm:text-lg font-bold">
          Events
        </h1>
        <Slider {...settings} className="w-full xl:w-3/4  xl:h- mx-auto  [&_.slick-dots]:mt-2 [&_.slick-dots>li]:-mx-1">
          {events.map((event, index) => (
            <div key={index} className="event-slide rounded-t-xl bg-gray-100 rounded-xl flex flex-col items-center justify-center">
              <img src={event.image} alt={event.name} className="h-60 xl:h-64 w-[100%] object-fill flex justify-center rounded-t-xl mb-4" />
              <div className="p-6 rounded-xl rounded-t-none">
                <h3 className="text-lg text-center font-bold text-gray-800 mb-2">{event.name}</h3>
                <h4 className="text-sm text-center text-gray-500 mb-2">{event.role}</h4>
                <p className="text-sm text-gray-600 text-center">{event.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Announcements Section */}
      <div className="w-full md:w-1/2">
        <Announcements />
      </div>
    </div>
  );
};

export default EventSlider;
