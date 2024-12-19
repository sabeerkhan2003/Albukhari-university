import React from 'react'
import main from "../../assets/hero/main.jpeg"

function Hero() {
    return (
        <>
            <div className='mt-44 lg:mt-60'>
                <img src={main} alt="B.S Abdul Rahman" className='w-64 mx-auto' />

                <p className='mx-5 mt-10'>Kilakarai Bukhari Aalim Arabic College was established in 2000 fulfilling the dream of its founder Alhaj Dr. B.S.Abdur Rahman who wished to start an Arabic college where Islamic religious studies and modern curriculum are taught together.</p>
                <p className='mx-5 mt-5'>The college has designed a 5 year integrated academic programme which enables its students to acquire twin degree, one in Islamic studies and the other in business management. It has become a unique institution which promotes exemplary Muslim scholars (Ulamas) who excel both in revealed knowledge and modern sciences.</p>
                <h2 className='font-semibold ml-5 mt-10 text-lg'>Our Vision</h2>
            </div>
        </>
    )
}

export default Hero