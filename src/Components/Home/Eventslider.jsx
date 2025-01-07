import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Events from "./Events";
import "../../../src/App";

const EventsSlider = () => {
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
  ];

  return (<div className="flex mx-5 lg:mx-36 flex-col md:flex-row md:items-center lg:gap-10 md:mt-16">
    <div className="max-w-4xl mx-auto w-full md:w-[450px] lg:w-2/5 py-10 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // 5 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        loop={true}
        className="swiper-container"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-white  md:mb-[8%] mb-12 rounded-lg p-6">
              {/* Image Section */}
              <div className="w-24 h-24 md:w-64 md:h-32 lg:w-60 lg:h-20 lg:rounded-3xl rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full  object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-2">{event.description}</p>
                <h3 className="font-bold text-lg">{event.name}</h3>
                <p className="text-blue-500 text-sm">{event.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Events/>
    </div>
  );
};

export default EventsSlider;
