import React, { useState } from 'react'
import logo from "../../assets/Navbar/logo.png";
import { Icon } from "@iconify/react";

function Nav2() {

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
    <div className='flex bg-transparent justify-center gap-[12%] items-center py-14 lg:py-12 md:px-10  lg:mt-0 h-3 lg:h-5  lg:flex lg:justify-center  md:w-full  lg:w-full md:gap-[8%] lg:gap-x-[10%] xl:gap-x-[18%] lg:items-center sticky z-40 md:top-[30%] top-12  lg:top-0 '>
                <img src={logo} alt="logo" className='w-[70%] md:w-[250px] lg:w-[300px]' />


                <span className='hidden md:flex md:flex-wrap lg:flex-wrap md:items-center lg:flex lg:text-[14px] lg:font-semibold text-blue-900 lg:mx-0 lg:justify-center  md:gap-y-2 md:gap-x-[4.5%]'>
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
                className={`sticky z-50 top-[160px]   left-0  w-full bg-[#07294D] text-white px-4 py-4 lg:py-0 transition-all duration-500 ease-in${isSidebarOpen ? 'transform translate-y-0  opacity-100' : 'transform -translate-y-full -top-[100%] h-0 opacity-0 '}`}
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
  )
}

export default Nav2