import React from 'react';
import Logos from '../Components/Home/Logos';
import Footer from '../Components/Home/Footer';
import Nav2 from '../Components/Home/Nav2';
import Nav from '../Components/Home/Nav';

// Import faculty images
import img1 from "../assets/Faculties/syed_masood_jamali.png";
import img2 from "../assets/Faculties/abdul_hai_nadwi.png";
import img3 from "../assets/Faculties/yoosuf_jamali.png";
import img4 from "../assets/Faculties/usman.png";
import img5 from "../assets/Faculties/Mr. Abdul kareem.png";
import img6 from "../assets/Faculties/ahamedullah.png";
import img7 from "../assets/Faculties/M.png";
import img8 from "../assets/Faculties/Dr. MOHAMMAD FAISAL 2.png";



function Faculties() {
    const facultyMembers = [
        { name: "Dr. Syed Masood Jamali", role: "Principal", image: img1 },
        { name: "Dr. Abdul Hai Hasani Nadwi", role: "Academic Dean", image: img2 },
        { name: "Dr. Yoosuf Jamali", role: "Professor", image: img3 },
        { name: "Dr. Abdus Samad Nadwi", role: "Asst. Professor", image: img4 },
        { name: "Member 5", role: "Role 5", image: img5 },
        { name: "Member 6", role: "Role 6", image: img6 },
        { name: "Member 7", role: "Role 7", image: img7 },
        { name: "Member 8", role: "Role 8", image: img8 },
    ];

    return (
        <>
            <div className="sticky top-0 z-30 bg-white shadow-md">
                <Nav2 text_color={"text-[#1C315E]"} />
            </div>
            <Nav />
            <div className='bg-[#EDF0F2] lg:px-20'>
                <div className='md:pt-32 lg:pt-44 px-6 py-20 '>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Featured Faculties</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>Meet Our Faculties</h2>
                </div>

                <div className="container mx-auto px-4 pb-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-16">
                        {facultyMembers.map((member, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-full h-52 md:h-72 lg:h-64 xl:h-[80%]  object-cover" />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Logos />
            <Footer />
        </>
    );
}

export default Faculties;
