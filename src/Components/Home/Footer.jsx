import React from 'react';
import Socialicons from './Socialicons';
import logo from '../../assets/Navbar/logo3.png'; // Adjust the import path as needed
import { Icon } from '@iconify/react'; // Ensure you have this import if using Iconify

const siteMap = [
    { name: 'Home', link: '/' }, { name: 'About Us', link: '/about' }, { name: 'Academic', link: '/academic' }, { name: 'Gallery', link: '/gallery' }, { name: 'E-Journal', link: '/journal' }, { name: 'Contact Us', link: '/contact' }, 
];

function Footer() {
    return (
        <div className='bg-[#07294C] font-Roboto md:px-3 lg:px-20 lg:grid lg:grid-cols-3 items-start lg:h-[14rem] 2xl:h-[16rem] xl:h-[rem] lg:pl-10 xl:pl-10 xl:px-0  2xl:px-0 2xl:pl-0  '>
            <div className=' lg:ml-10 xl:ml-32 2xl:ml-56 mx-8  flex flex-col gap-3 lg:gap-6 pt-5  md:flex '>
                <img src={logo} alt="logo" className='w-28 h-28 md:w-36 md:h-36 md:mx-auto xl:mx-0' />
                {/* <p className='font-opensans text-white lg:w-  text-[15px] md:text-[16px] leading-loose '>
                    KBA Arabic College is a 25-years old educational institution founded in 2000 by Alhaj Dr. B.S Abdur Rahman, a Visionary With a Missionary Zeal and run by the All India Islamic Foundation.
                </p> */}
                <div className='lg:relative  md:pr-0 lg:mr-36 bottom-2 md:ml-[40%] lg:ml-10  xl:ml-0 w-[150px]  '>
                    <Socialicons />
                </div>
            </div>
            <div className='text-white mx-5 lg:px-5 lg:mx-5 xl:px-0 lg:mr-16 xl:mr-52 2xl:mr-60 2xl:-mx-10  flex flex-col md:gap-2 lg:gap-5 xl:gap-5 '>
                <h2 className='text-[18px] md:text-2xl font-montserrat mb-8  lg:my-5 2xl:text-3xl '>Sitemap</h2>
                <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-2 mr-16 md:mr-0  lg:mt-0 text-[15px] md:text-[14px]'>
                    {siteMap.map((item, index) => (
                        <li className='flex h-8' key={index}>
                            <a href={item.link} className=' hover:text-[#125B9E] hover:scale-x-110 hover:pl-2 hover:transition-all duration-300 2xl:text-xl'>
                                {item.name}
                            </a>
                            <Icon icon="ic:outline-keyboard-arrow-right" width="20" height="20" className='mt-[1px]' style={{ color: '#125B9E' }} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className='text-white mx-5 flex flex-col gap-3 md:gap-6 xl:gap-5 xl:relative xl:right-20  2xl:mx-0 text-[15px] md:text-[16px] pb-12 lg:pb-0 lg:px-0 lg:mx-0 lg:gap-[12px]'>
                <h2 className='text-[18px] font-montserrat  mt-5 md:text-2xl 2xl:text-3xl'>Contact Us</h2>
                <div className='flex md:items-center lg:items-center gap-2 md:gap-3 hover:text-[#125B9E] hover:pl-2 hover:transition-all duration-300 lg:mt-5 xl:mt-2'>
                    <Icon icon="ic:twotone-location-on" width="26" height="26" style={{ color: '#125B9E' }} className='lg:relative lg:right-1 ' />
                    <a href='https://maps.app.goo.gl/NqfMLeiHFmS8kPdr8' className=' w-4/5 md:w-2/4 lg:w-full md:text-[14px] 2xl:text-xl'>KBA Arabic College, Crescent Campus, Vandalur, Chennai - 600 048</a>
                </div>
                <div className='flex items-center gap-2 md:gap-4 hover:text-[#125B9E] text-[14px] hover:pl-2 hover:transition-all duration-300'>
                    <Icon icon="ic:baseline-settings-phone" width="20" height="20" style={{ color: '#125B9E' }} />
                    <div className='flex flex-col md:flex-row md:gap-4 2xl:text-xl'>
                        <a href="tel:+914422751280">+91-44-22751280</a>
                        <a href="tel:+914422751282">+91-44-22751282</a>
                    </div>
                </div>
                <div className='flex items-center gap-3 md:gap-4 lg:gap-5 hover:text-[#125B9E] md:text-[14px] hover:pl-2 hover:transition-all duration-300 2xl:text-xl'>
                    <Icon icon="ic:baseline-mail-outline" width="20" height="20" style={{ color: '#125B9E' }} />
                    <a href="mailto:office.kbacollege@gmail.com ">office.kbacollege@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;