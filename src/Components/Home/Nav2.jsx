import React, { useState } from 'react'
import logo from "../../assets/Navbar/logo.png";
import { Icon } from "@iconify/react";


function Nav2() {

    const items = [
        { title: "Home" },
        { title: "About Us",subPages:["Management","Facilities"] },
        { title: "Academic",subPages:["Faculty,Academic Programme","Admission"] },
        { title: "Courses",Subpages:["Arabic Application","Translation Class"] },
        { title: "News & Even" },
        { title: "SAIS" },
        { title: "Online Class" },
        { title: "Contact Us" }
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null); 
    const handleMouseEnter = (index) => {
        setDropdownOpen(index);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(null);
      };
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    {/* <div className=' bg-blue-600 h-24 w-full opacity-20'></div> */}
    <div className='flex bg-white lg:bg-transparent justify-center gap-[12%] items-center py-14 lg:py-14 md:px-10  lg:mt-0 h-3 lg:h-5  lg:flex lg:justify-center  md:w-full  lg:w-full md:gap-[8%] lg:gap-x-[10%] xl:gap-x-[18%] lg:items-center sticky z-40 md:top-[30%] top-12  lg:top-0  '>
                <img src={logo} alt="logo" className='w-[70%] md:w-[250px] lg:w-[300px]' />
                <ul className='hidden md:flex md:flex-wrap lg:flex-wrap md:items-center lg:flex lg:text-[14px] lg:font-semibold text-blue-900 lg:mx-0 lg:justify-center  md:gap-y-2 md:gap-x-[4.5%]'>
                    {items.map((item,index)=><li key={item.title} 
                    className='nav-item relative text-[12px] lg:text-[14px] font-semibold'
                    onMouseEnter={() => item.subPages && handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}>
                    <a href='#' className='flex items-center'>
              {item.title}
              {item.subPages && <Icon icon="mingcute:down-line" width="20" height="24" />} {/* Dropdown Icon */}
            </a>
            {item.subPages && dropdownOpen === index && (
              <ul className='absolute top-full -left-8 bg-white shadow-lg p-2 z-30 '>
                {item.subPages.map((subItem) => (
                  <li key={subItem} className="hover:bg-slate-200 p-1 lg:w-[100px]">
                    <a href='#'>{subItem}</a>
                  </li>
                ))}
              </ul>
            )}
                        
                    </li>)}
                </ul>


                <Icon 
    icon="charm:menu-hamburger" 
    width="38" 
    height="40" 
    className="md:hidden border-2 p-1"
    onClick={handleSidebarToggle} 
/>
</div>
<div 
    className={`sticky z-50 top-40 left-0 w-full bg-[#07294D] text-white px-4 transition-all duration-1000 ease-in-out ${
        isSidebarOpen ? 'translate-y-0 opacity-100 max-h-screen py-4' : '-translate-y-full opacity-0 max-h-0'
    }`}
>
    <ul className={`space-y-4  transition-opacity duration-1000 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
        {items.map((item, index) => (
            <li key={index} className="hover:text-yellow-300">
                {item.title}
            </li>
        ))}
    </ul>
</div>

            </>
  )
}

export default Nav2