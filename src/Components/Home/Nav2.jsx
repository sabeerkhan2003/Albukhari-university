import React, { useState, useEffect } from "react";
import logo3 from "../../assets/Navbar/logo3.png";
import logo from "../../assets/Navbar/logo.png";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

function Nav2({text_color}) {
  // const Navigate=useNavigate()
  const items = [
    { title: <Link to="/">Home</Link> },
    { title: <Link to="/about">About Us</Link> },
    { title: <Link to="/academic">Academic</Link>, subPages: ["programs","Faculty", "Admission"] },
    { title: "Gallery" },
    { title: "E-Journal" },
    { title: <Link to="/contact">Contact Us</Link> },
   
    
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
         <div className="md:relative font-Robot">
      <div
  className={`md:absolute top-0  z-50 flex justify-center gap-[8%] md:gap-[15%] md:px-10  lg:gap-[15%] xl:gap-56 lg:h-20 w-full md:py-2 items-center py-4 transition-all duration-500 ${
    isScrolled ? "bg-white shadow-md md:h-16" : "bg-white md:bg-transparent top-10"
  }`}
>
  {/* Logo for medium and larger screens */}
  <img
    src={isScrolled ? logo : logo3}
    alt="logo"
    className={`w-[70%] md:w-[100px] md:h-[90px] lg:top-20 lg:w-[150px] lg:h-[120px] object-contain transition-all duration-500 ${
      isScrolled
        ? "lg:w-[220px] lg:h-[200px] md:w-[130px] md:h-[60px] object-contain"
        : "lg:mt-[3%]"
    } hidden md:block`}
  />
  {/* Logo for small screens */}
  <img
    src={logo}
    alt="logo"
    className="w-[70%] md:hidden object-contain transition-all duration-500"
  />
  <ul
    className={`hidden md:flex md:items-center gap-8 md:gap-8  lg:gap-16  md:text-[11px] md:w-fit lg:text-[12px] ${
      isScrolled ? `text-[#1C315E] lg:mt-0` : `${text_color} lg:mt-[20px]`
    } lg:text-sm font-semibold `}
  >
    {items.map((item, index) => (
      <li
        key={item.title}
        className="relative"
        onMouseEnter={() => item.subPages && handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#" className="flex items-center md">
          {item.title}
          {item.subPages && (
            <Icon icon="mingcute:down-line" width="20" height="24" className="md:w-5 md:h-5" />
          )}
        </a>
        {item.subPages && dropdownOpen === index && (
          <ul className="absolute top-full left-0  bg-white text-[#1C315E]  shadow-lg p-2 z-30">
            {item.subPages.map((subItem) => (
              <li key={subItem} className="hover:bg-slate-200 p-1">
                <a href="#">{subItem}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>

  <Icon
    icon="charm:menu-hamburger"
    width="38"
    height="40"
    className="md:hidden border-2 p-1"
    onClick={handleSidebarToggle}
  />
</div>
      {isSidebarOpen && (
        <div className="absolute top-245 left-0 w-full bg-[#07294D] text-white px-4 py-4 z-40">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="hover:text-yellow-300">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </>
  );
}

export default Nav2;
