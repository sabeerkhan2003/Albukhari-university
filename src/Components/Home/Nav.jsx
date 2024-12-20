import React, { useState } from 'react'
import { Icon } from "@iconify/react";

import Nav2 from './Nav2';
import Hero from './Hero';

function Nav() {
    return (
        <>
            <section className='flex justify-center gap-4 z-20 bg-[#07294D] items-center lg:h-12 h-12 lg:hidden fixed top-0  w-full'>
                <Icon icon="ic:baseline-facebook" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white   rounded-full  ' />
                <Icon icon="entypo-social:youtube-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px]  text-white  rounded-full ' />
                <Icon icon="entypo-social:linkedin-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white   rounded-full ' />
                <Icon icon="entypo-social:instagram-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white  rounded-full ' />
            </section>

            <div className='bg-[#07294D] text-white p-2 lg:flex lg:items-center lg:justify-around lg:h-28 xl:h-28 hidden md:flex  md:items-center z-50 md:w-full md:fixed md:top-10 lg:top-0 sticky lg:static '>
                <div className='lg:flex lg:justify-center md:flex md:items-center lg:gap-5'>
                    <div className='flex flex-col items-center p-4 gap-2 md:'>
                        <span className='flex items-center gap-2'>
                            <Icon icon="ic:baseline-phone" className='w-4 h-4' />
                            <p className='text-[12px] lg:text-[14px]'>+91-44-22751280 | 22751282</p>
                        </span>
                        <span className='flex items-center gap-2 '>
                            <Icon icon="ic:baseline-email" className='w-4 h-4' />
                            <p className='text-[12px] lg:text-[14px]'>office.kbacollege@gmail.com</p>
                        </span>
                    </div>

                    <div className='grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 m-3 gap-x-2 gap-y-1 text-center text-[12px]  md:items-center md:w-3/2 '>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1'>Parents</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Students</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Faculty</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 '>Apply Online</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 col-span-full  md:col-span-1'>Diploma in Islamic Studies</span>
                        <span className='border-2 rounded-lg border-yellow-600 px-4 py-1 col-span-full  md:col-span-1'>Al-Bukhari E-Journal</span>
                    </div>
                </div>

                <div className='text-[14px] flex gap-4 md:flex md:flex-col lg:flex-row gap-y-1'>
                    <button className='border-2 px-6 py-3 border-yellow-600'>Apply Now</button>
                    <button className='border-2 px-6 py-3 border-yellow-600'>Login</button>
                </div>
            </div>

            
          {/* <Hero/> */}
      
            

        </>
    );
}

export default Nav;
