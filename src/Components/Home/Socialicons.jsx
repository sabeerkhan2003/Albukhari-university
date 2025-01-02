import React from 'react'
import { Icon } from "@iconify/react";

function Socialicons() {
    return (
        <section className='flex justify-center gap-4 z-20 bg-[#07294D] items-center lg:h-fit h-12 relative bottom-0  w-full'>
            <Icon icon="ic:baseline-facebook" className='h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] text-white   rounded-full  ' />
            <Icon icon="entypo-social:youtube-with-circle" className='h-[28px] w-[28px]   lg:h-[23px] lg:w-[28px]  text-white  rounded-full ' />
            <Icon icon="entypo-social:linkedin-with-circle" className='h-[28px] w-[28px]  lg:h-[23px] lg:w-[28px] text-white   rounded-full ' />
            <Icon icon="entypo-social:instagram-with-circle" className='h-[28px] w-[28px] lg:h-[23px] lg:w-[28px] text-white  rounded-full ' />
        </section>

    )
}

export default Socialicons