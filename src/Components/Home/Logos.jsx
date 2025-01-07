import React from 'react';
import univ2 from "../../assets/Banners/univ2.png";
import school2 from "../../assets/Banners/school2.png";
import madrasuniv from "../../assets/Banners/madrasuniv.png";
import journal from "../../assets/Banners/journal.png";

function Logos() {
  return (
    <div className=' md:px-0 md:py-8 py-12 w-fit bg-[#EDF0F2]'>
      <div className='flex flex-wrap md:grid md:grid-cols-2  lg:grid-cols-4 px-3 gap-1 md:m-10  lg:gap-8  place-content-center place-items-center gap-y-14 md:gap-y-12   md:gap-x-16  h-[30vh] lg:h-[6vh] lg:w-fit'>
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full p-2 md:p-0' src={univ2} alt="univ2" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full p-2 md:p-0' src={school2} alt="school2" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full p-2 md:p-0' src={madrasuniv} alt="madrasuniv" />
        <img className='w-[49%] sm:w-full h-[70px] object-contain md:h-full p-2 md:p-0' src={journal} alt="journal" />
      </div>
    </div>
  );
}

export default Logos;