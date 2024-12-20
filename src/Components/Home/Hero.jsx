import React from 'react'
import main from "../../assets/hero/main.jpeg"
import banner from "../../assets/hero/Banner.jpg"
function Hero() {
    return (
        <>
            <div className='flex mx-5 lg:mx-14 mt-10 md:mt-80 lg:gap-10  lg:mt-[0%] pt-10'>
                <div className=''>
                    <img
                        src={main}
                        alt="B.S Abdul Rahman"
                        className='w-56 lg:w-72 lg:h-66 mx-auto lg:float-left lg:mr-8 lg:mb-2 '
                    />

                    <p className='mt-10 md:mt-0 lg:leading-relaxed'>
                        Kilakarai Bukhari Aalim Arabic College was established in 2000 fulfilling the dream of its founder Alhaj Dr. B.S.Abdur Rahman who wished to start an Arabic college where Islamic religious studies and modern curriculum are taught together.
                    </p>
                    <p className='mt-10 lg:leading-relaxed'>
                        The college has designed a 5-year integrated academic programme which enables its students to acquire twin degrees, one in Islamic studies and the other in business management. It has become a unique institution that promotes exemplary Muslim scholars (Ulamas) who excel both in revealed knowledge and modern sciences.
                    </p>
                    <h2 className='font-semibold mt-10 text-lg'>Our Vision</h2>
                    <p className='mt-2 lg:leading-relaxed '>The college looks forward to be a pioneer in the field of Islamic Studies to promote Islamic Scholars, capable of bringing about positive change for the betterment of self, family, society and humanity on the basis of moderate ideology derived from the Holy Quran and Sunnah.</p>
                    <h2 className='font-semibold mt-10 text-lg'>Our Mission</h2>
                    <p className='mt-2'>The college is committed:</p>
                    <ul className='list-disc ml-5 lg:leading-relaxed'><li>To provide revealed and scientific knowledge in UG., PG. and Research programmes.</li>
                        <li>To develop various necessary skills through training, workshops, Seminars and fieldworks.</li>
                        <li>To develop analytical and critical thinking in students by adopting modern scientific teaching methodology.</li></ul>

                </div>

                <div className='hidden lg:block'>
                    <img src={banner} className=' float-right' alt="" />
                </div>

            </div>




            <div className='lg:mx-14 mx-5'>
            <h2 className='font-semibold mt-10 text-lg'>Infrastructure and Facilities</h2>
            <p className='mt-2 '>The college provides all facilities in excellent standard: Hostel building with all facilities and amenities required to ensure a comfortable and pleasant stay for the students. Well-equipped library having around 15,000 volumes of books in Arabic, English, Tamil and Urdu. Well-furnished Auditorium. Computer lab with high-speed Internet facilities. Playground facilities for all games.</p>
            <h2 className='font-semibold mt-10 text-lg'>Admission</h2>
            <p className='mt-2 lg:leading-relaxed'>Application forms are issued during the month of April every year. After scrutinizing the filled-in applications, students are called for an Entrance examination. Results of the Entrance test, Quran recitation test and 10th standard marks are taken into consideration for selection. Admission will be given only on the basis of merit.</p>
            <h2 className='font-semibold mt-10 text-lg'>Qualification for Admission :</h2>
            <ul className='list-disc ml-5 mt-2 flex flex-col gap-2 pb-5'>
                <li>A pass certificate in S.S.L.C / Matriculation or any other equivalent examination.</li>
                <li>Ability to recite the Holy Quran.</li>
                <li>Upper age limit is 17 years.</li></ul>
        </div>
        </>
    )
}

export default Hero