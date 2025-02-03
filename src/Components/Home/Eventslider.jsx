import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Announcements from './Announcements';
import img from "../../assets/Events/Event2.png";

const EventSlider = () => {
  const events = [
    {
      image: img,
      name: "BSA ARIF BUHARY RAHMAN",
      role: "President",
      description:
        "The higher education landscape is changing in tandem with the economic situations, industry requirements, and technological development globally...",
    },
    {
      image: img,
      name: "John Doe",
      role: "CEO",
      description:
        "Education is a transformative process that empowers individuals to achieve their potential and contribute to society...",
    },
    {
      image: img,
      name: "Jane Smith",
      role: "Director",
      description:
        "The importance of accessibility in education cannot be overstated as we move towards a more connected world...",
    },
    {
      image: img,
      name: "Alice Johnson",
      role: "Manager",
      description:
        "Our vision is to create a sustainable and inclusive education system that meets the challenges of the 21st century...",
    },
    {
      image: img,
      name: "Michael Smith",
      role: "Advisor",
      description:
        "In a rapidly changing world, education should be future-ready, providing learners with tools to thrive...",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Enable dot navigation
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic slide
    autoplaySpeed: 3000, // Set the speed for auto sliding (in ms)
    arrows: false, // Disable navigation arrows
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-20 mx-5 lg:mx-36 my-10 md:my-16 lg:my-20 text-center md:text-start">
      {/* Slider Section */}
      <Slider {...settings} className="w-full md:w-96 mx-auto [&_.slick-dots]:mt-2 [&_.slick-dots>li]:-mx-1">
        {events.map((event, index) => (
          <div key={index} className="event-slide  flex flex-col items-center border ">
            <img src={event.image} alt={event.name} className="h-64 object-cover mx-auto md:mx-0 rounded-t-xl  mb-4 relative" />
            <div className='absolute top-20 ml-2 '>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{event.name}</h3>
            <h4 className="text-sm text-gray-500 mb-2">{event.role}</h4>
            <p className="text-sm text-gray-600 text-center w-[320px]">{event.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Events Section */}
      <div className="flex-1">
        <Announcements />
      </div>
    </div>
  );
};

export default EventSlider;
