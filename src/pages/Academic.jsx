import React from 'react';
import Nav from '../Components/Home/Nav';
import Nav2 from '../Components/Home/Nav2';
import Footer from "../Components/Home/Footer"
import Logos from "../Components/Home/Logos"
import book1 from "../assets/Academic/book1.jpg";
import book2 from "../assets/Academic/book2.jpg";
import book3 from "../assets/Academic/book3.png";

const programs = [
  {
    image: book1,
    title: "5-years Integrated program for boys",
    duration: "5 Years",
  },
  {
    image: book2,
    title: "B.A. Islamic Studies for Girls",
    duration: "3 Years",
  },
  {
    image: book3,
    title: "M.A. Islamic Studies for All",
    duration: "2 Years",
  },
];

function Academic() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Nav2 text_color={"text-[#1C315E]"} />
      </div>
      <Nav />
      <div className='bg-[#EDF0F2] lg:px-20'>
        <div className='md:pt-32 lg:pt-44 px-6 py-20 '>
          <h5 className='text-[#07294D] text-[18px]  font-bold font-montserrat'>Academic</h5>
          <hr className='border-[#FFC600] border-2 my-2 w-10' />
          <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>Programs</h2>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
          {programs.map((program, index) => (
            <div key={index} className='bg-white my-6 before:bg-[#454E5F96] transition duration-300 ease-in-out'>
              <div className=''>
              <img src={program.image} alt={program.title} className='' /></div>
              <h4 className='p-8 py-12 text-[20px] md:text-[24px] font-semibold hover:text-[#FFC600] transition duration-300 ease-in-out font-montserrat'>{program.title}</h4>
              <hr className='mx-10' />
              <p className='text-[#505050] font-Roboto p-8'>Duration: {program.duration}</p>
            </div>
          ))}</div>
        </div>
      </div>
      <Logos/>
      <Footer />
    </>
  );
}

export default Academic;