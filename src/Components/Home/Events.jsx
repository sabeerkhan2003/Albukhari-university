import React, { useState } from 'react';

function Events() {
  const [activeTab, setActiveTab] = useState('announcements');

  return (
    <div className="flex flex-col m-5 lg:ml-auto items-center border-2 lg:w-1/2">
      {/* Tab Navigation */}
      <div className="flex w-full justify-around bg-orange-100">
        <h1
          className={`cursor-pointer px-4 py-2 w-full text-center text-lg font-semibold ${
            activeTab === 'announcements' ? 'bg-orange-300 text-white' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('announcements')}
        >
          Announcements
        </h1>
        <h1
          className={`cursor-pointer px-4 py-2 text-lg w-full text-center font-semibold ${
            activeTab === 'events' ? 'bg-orange-300 text-white' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </h1>
      </div>

      {/* Tab Content */}
      <div className="h-[50vh] w-full overflow-hidden relative bg-gray-50">
        {activeTab === 'announcements' && (
          <div className="absolute animate-slideDown">
            <p className="text-blue-700 text-lg font-medium px-4 py-2">
              May 2024 IDE PG Examinations, November 2024 Regular UG Examinations - English & Tamil Examination Online Offer Letter
            </p>
            <p className="text-orange-500 text-sm px-4">posted on: 27/12/2024</p>
            <hr className="border-dotted border-gray-300 my-2 mx-4" />
            <p className="text-blue-700 text-lg font-medium px-4 py-2">
              Applications invited for Student Internship Position under the Scientific Social Responsibility Policy of the DST - Department of Genetics
            </p>
            <p className="text-orange-500 text-sm px-4">posted on: 19/12/2024</p>
          </div>
        )}
        {activeTab === 'events' && (
          <div className="absolute animate-slideDown">
            <p className="text-gray-800 text-lg font-medium px-4 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo porro libero deserunt reprehenderit cum illum officiis hic architecto ea.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
