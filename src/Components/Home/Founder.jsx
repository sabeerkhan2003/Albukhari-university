import React from 'react'
import founder from "../../assets/hero/main.jpeg"

function Founder() {
  return (
    <div className='flex justify-center flex-col gap-8 lg:justify-center lg:gap-32  md:flex-row items-center mx-4'>
      <div className='border-8 border-[#07294D]'>
        <img src={founder} alt="principal"  className=' md:w-[300px] lg:w-[420px] lg:border-8 border-[#07294D] lg:p-10 '/></div>
        <div className='flex flex-col gap-2 lg:w-2/4'>
            <h1 className='text-[30px] font-sans text-[#252525] font-bold'>Founder's Message</h1>
            <p className='text-[#6B6B6B] text-[15px]     '>
            Since its humble beginning in 1978 as a college of Islamic studies and Orphanage, Jamia Markaz (The Markaz Academia) has gradually grown to become the flagship of Islamic and modern education for the Muslims in India, which later took a decisive role in shaping an ideal culture for them by creatively blending education, charity and national consciousness. People from all walks of life, the elite, the poor, the educated and the common man, joined Markaz in its progressive journey of social change.</p><br />
            <h2 className='text-[24px] font-semibold'>H.E. Sheikh Abubakr Ahmad</h2>
            <h4 className='text-[15px] text-[#6B6B6B] font-bold'>Founder of Markazu Saquafathi Sunniyya</h4>
            <button className='bg-[#0C629E] hover:bg-[#58baff] border-2 w-fit px-5 py-3 md:px-3 md:py-2 lg:px-8 lg:py-3 text-white font-semibold '>About</button> 
        </div>
    </div>
  )
}

export default Founder