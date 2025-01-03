import React from 'react';
import univ2 from "../../assets/Banners/univ2.png";
import school2 from "../../assets/Banners/school2.png";
import madrasuniv from "../../assets/Banners/madrasuniv.png";
import journal from "../../assets/Banners/journal.png";

function Logos() {
  return (
    <div className=' md:px-0 md:py-8 py-1 w-fit'>
      <div className='flex flex-wrap md:grid md:grid-cols-2  lg:grid-cols-4 px-3 gap-1 md:m-10  lg:gap-16  place-content-center place-items-center md:gap-y-10 md:gap-x-16  h-[30vh] lg:h-[48vh] lg:w-fit'>
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full' src={univ2} alt="univ2" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full' src={school2} alt="school2" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full' src={madrasuniv} alt="madrasuniv" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full' src={journal} alt="journal" />
      </div>
    </div>
  );
}

export default Logos;