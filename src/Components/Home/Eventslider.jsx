import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Events from "./Events"

const EventSlider = () => {
  const events = [
    {
      image: "https://via.placeholder.com/150",
      name: "BSA ARIF BUHARY RAHMAN",
      role: "President",
      description:
        "The higher education landscape is changing in tandem with the economic situations, industry requirements, and technological development globally...",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      role: "CEO",
      description:
        "Education is a transformative process that empowers individuals to achieve their potential and contribute to society...",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Director",
      description:
        "The importance of accessibility in education cannot be overstated as we move towards a more connected world...",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "BSA ARIF BUHARY RAHMAN",
      role: "President",
      description:
        "The higher education landscape is changing in tandem with the economic situations, industry requirements, and technological development globally...",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      role: "CEO",
      description:
        "Education is a transformative process that empowers individuals to achieve their potential and contribute to society...",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Director",
      description:
        "The importance of accessibility in education cannot be overstated as we move towards a more connected world...",
    },
  ];

  const settings = {
    dots: true, // Enable dot navigation
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic slide
    autoplaySpeed: 2000, // Set the speed for auto sliding (in ms)
  };

  return (
  <div className='flex mx-5 lg:justify-center lg:mx-36 lg:my-20  flex-col md:flex-row md:items-center md:mx-10 lg:gap-5 xl:gap-20 md:mt-16'>
    <Slider {...settings} className='w-full md:w-1/3 lg:w-96 my-20'>
      {events.map((event, index) => (
        <div key={index} className="event-slide p-4  flex flex-col items-center justify-center focus:outline-none">
          <img src={event.image} alt={event.name} className="w-32 h-32 object-cover rounded-full mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.name}</h3>
          <h4 className="text-sm text-gray-500 mb-2">{event.role}</h4>
          <p className="text-xs text-gray-600">{event.description}</p>
        </div>
      ))}
    </Slider>
    <div>
      <Events/>
    </div>
    </div>
  );
};

export default EventSlider;
