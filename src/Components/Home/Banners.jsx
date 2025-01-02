import React from 'react'
import univ2 from "../../assets/Banners/univ2.png"
import school2 from "../../assets/Banners/school2.png"
import madrasuniv from "../../assets/Banners/madrasuniv.png"
import journal from "../../assets/Banners/journal.png"

function Banners() {
  return (
    <div className='bg-[#EDF0F2] px-3 py-10 '>
      <div className='grid grid-cols-2 lg:grid-cols-4 px-4 place-content-center place-items-center gap-3  h-[25vh]  '>
      <img className='w-[300px] object-cover' src={univ2} alt="univ2" />
      <img className='w-[300px] object-cover' src={school2} alt="school2" />
      <img className='w-[300px] object-cover' src={madrasuniv} alt="madrasuniv" />
      <img className='w-[300px] object-cover' src={journal} alt="" />
      </div>
    </div>
  )
}

export default Banners