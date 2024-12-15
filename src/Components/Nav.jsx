import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import logo from "../assets/Navbar/logo.png";

function Nav() {
    const sidebar = [
        { title: "Home" },
        { title: "About Us" },
        { title: "Academic" },
        { title: "Courses" },
        { title: "News & Even" },
        { title: "SAIS" },
        { title: "Online Class" },
        { title: "Contact Us" }
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <section className='flex justify-center gap-4 z-20 bg-[#07294D] items-center lg:h-12 h-12 lg:hidden fixed w-full'>
                <Icon icon="ic:baseline-facebook" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white   rounded-full  ' />
                <Icon icon="entypo-social:youtube-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px]  text-white  rounded-full ' />
                <Icon icon="entypo-social:linkedin-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white   rounded-full ' />
                <Icon icon="entypo-social:instagram-with-circle" className='h-[28px] w-[28px] lg:h-[35px] lg:w-[35px] text-white  rounded-full ' />
            </section>

            <div className='bg-[#07294D] text-white p-2 lg:flex lg:items-center lg:justify-around lg:h-28 xl:h-28 hidden md:flex  md:items-center z-[100] md:w-full fixed'>
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

            <div className='flex bg-white justify-center gap-[12%] items-center pt-0 h-[70px] lg:flex lg:justify-center md:mx-10 lg:mx-0  lg:w-full md:gap-[5%] lg:gap-x-[8%] xl:gap-[18%] lg:items-center lg:mt- fixed z-40 md:top-44 top-14  lg:top-36 '>
                <img src={logo} alt="logo" className='w-[70%] md:w-[350px] lg:w-[300px]' />


                <span className='hidden md:flex md:flex-wrap lg:flex-wrap md:items-center lg:flex lg:text-[14px] lg:font-semibold text-blue-900 lg:mx-0 lg:justify-center   md:gap-y-2 md:gap-x-[4.5%]'>
                    <p className='text-center'>Al-Bukhari</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Academic</p>
                    <p>Courses</p>
                    <p>News & Events</p>
                    <p>SAIS</p><br className='lg:hidden' />
                    <p>Online Classes</p>
                    <p>Contact Us</p>
                </span>

                <Icon 
                    icon="charm:menu-hamburger" 
                    width="38" 
                    height="40" 
                    className='md:hidden border-2 p-1'
                    onClick={handleSidebarToggle} 
                />
            </div>

          
            <div 
                className={`absolute top-[23%] left-0 -z-10 w-full bg-[#07294D] text-white px-4 py-4 transition-all duration-500 ease-in opacity-0${isSidebarOpen ? 'transform translate-y-0  opacity-100' : 'transform -translate-y-full -top-[100%] h-0 opacity-0 '}`}
            >
                {isSidebarOpen && (
                    <ul className='space-y-4'>
                        {sidebar.map((item, index) => (
                            <li key={index} className='hover:text-yellow-300'>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Nav;
