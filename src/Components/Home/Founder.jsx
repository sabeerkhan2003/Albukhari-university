import React, { useState } from 'react'
import founder from "../../assets/hero/main.jpeg"
import { Link } from 'react-router-dom';
import Admission_button from './Admission_button';


function Founder() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the scale after 200ms
  };

  return (<><div className='text-center mt-8'>
   
    <h3 className='text-[24px] font-semibold m-5 lg:my-5'>
      WELCOME TO <span className='text-uppercase text-red-500'>Kilakarai Bukhari Aalim Arabic College</span>
    </h3>
    </div>
    <div className='flex justify-center flex-col gap-8 lg:justify-center mt-8 md:gap-16 lg:gap-32  md:flex-row items-center mx-4 lg:mx-24'>

      <div className=' rounded-3xl   '>

      <img 
  src={founder} 
  alt="principal" 
  className='w-[180px] lg:w-[230px] lg:h-[230px] rounded-sm' 
  style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }} 
/>
<p className='text-center font-semibold py-3 md:text-md text-gray-800'>B.S Abdul Rahman</p>

        </div>
      <div className='flex flex-col gap-2 md:w-3/4'>

        <h1 className='text-[30px] font-sans text-[#252525] font-bold'>Founder's Message</h1>
        <p className='text-[#6B6B6B] text-[15px] font-medium   '>
          Since its humble beginning in 1978 as a college of Islamic studies and Orphanage, Jamia Markaz (The Markaz Academia) has gradually grown to become the flagship of Islamic and modern education for the Muslims in India, which later took a decisive role in shaping an ideal culture for them by creatively blending education, charity and national consciousness. People from all walks of life, the elite, the poor, the educated and the common man, joined Markaz in its progressive journey of social change.</p><br />
        <h2 className='text-[24px] font-semibold'>H.E. Sheikh Abubakr Ahmad</h2>
        <h4 className='text-[15px] text-[#6B6B6B] font-bold'>Founder of Markazu Saquafathi Sunniyya</h4>
        <div></div>
        <Admission_button name={"About"} />
      </div>
    </div>
  </>
  )
}

export default Founder