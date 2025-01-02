import React from 'react';
import univ2 from "../../assets/Banners/univ2.png";
import school2 from "../../assets/Banners/school2.png";
import madrasuniv from "../../assets/Banners/madrasuniv.png";
import journal from "../../assets/Banners/journal.png";

function Banners() {
  return (
    <div className=' md:px-0 md:py-8 py-3 w-fit'>
      <div className='flex flex-wrap md:grid md:grid-cols-2  lg:grid-cols-2 px-4 place-content-center place-items-center md:gap-y-10 md:gap-x-1 h-[30vh] lg:h-[48vh] lg:w-fit'>
        <img className='w-[50%] sm:w-full h-[70px] object-contain' src={univ2} alt="univ2" />
        <img className='w-[50%] sm:w-full h-[70px] object-contain' src={school2} alt="school2" />
        <img className='w-[50%] sm:w-full h-[70px] object-contain' src={madrasuniv} alt="madrasuniv" />
        <img className='w-[50%] sm:w-full h-[70px] object-contain' src={journal} alt="journal" />
      </div>
    </div>
  );
}

export default Banners;