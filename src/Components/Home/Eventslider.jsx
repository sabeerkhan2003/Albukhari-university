import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Announcements from './Announcements';

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
      name: "Alice Johnson",
      role: "Manager",
      description:
        "Our vision is to create a sustainable and inclusive education system that meets the challenges of the 21st century...",
    },
    {
      image: "https://via.placeholder.com/150",
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
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-20 mx-5 lg:mx-36 my-10 md:my-16 lg:my-20">
      {/* Slider Section */}
      <Slider {...settings} className="w-full md:w-96 mx-auto [&_.slick-dots]:mt-2 [&_.slick-dots>li]:-mx-1">
        {events.map((event, index) => (
          <div key={index} className="event-slide p-6 bg-white flex flex-col items-center">
            <img src={event.image} alt={event.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">{event.name}</h3>
            <h4 className="text-sm text-gray-500 mb-2">{event.role}</h4>
            <p className="text-sm text-gray-600 text-center">{event.description}</p>
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
