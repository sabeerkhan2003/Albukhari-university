import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Banners from './Banners';

function Events() {
  const [activeTab, setActiveTab] = useState('announcements');
  const [dragging, setDragging] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  const handleStop = () => {
    setDragging(false);
    setScrolling(true);
  };

  useEffect(() => {
    let scrollInterval;
    if (scrolling) {
      scrollInterval = setInterval(() => {
        const container = document.getElementById('scroll-container');
        if (container) {
          container.scrollBy({ top: 1, behavior: 'smooth' });
        }
      }, 50);
    }
    return () => clearInterval(scrollInterval);
  }, [scrolling]);

  return (
    <div className='flex items-center flex-col md:flex-row'>
    <div><Banners/></div>
    <div className="flex flex-col m-5  items-center border-2 md:w-1/2">
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
      <div id="scroll-container" className="h-[50vh] w-full overflow-hidden relative bg-gray-50">
        {activeTab === 'announcements' && (
          <Draggable
            axis="y"
            onStart={() => {
              setDragging(true);
              setScrolling(false);
            }}
            onStop={handleStop}
          >
            <div className="cursor-grab">
              <div className="animate-slideDown">
                <p className="text-blue-700 text-lg font-medium px-4 py-2">
                  May 2024 IDE PG Examinations, November 2024 Regular UG Examinations - English & Tamil Examination Online Offer Letter
                </p>
                <p className="text-orange-500 text-sm px-4">posted on: 27/12/2024</p>
                <hr className="border-dotted border-gray-300 my-2 mx-4" />
                <p className="text-blue-700 text-lg font-medium px-4 py-2">
                  Applications invited for Student Internship Position under the Scientific Social Responsibility Policy of the DST - Department of Genetics
                </p>
                <p className="text-orange-500 text-sm px-4">posted on: 19/12/2024</p>
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
            </div>
          </Draggable>
        )}
        {activeTab === 'events' && (
          <Draggable
            axis="y"
            onStart={() => {
              setDragging(true);
              setScrolling(false);
            }}
            onStop={handleStop}
          >
            <div className="cursor-grab">
              <div className="animate-slideDown">
                <p className="text-blue-700 text-lg font-medium px-4 py-2">
                  May 2024 IDE PG Examinations, November 2024 Regular UG Examinations - English & Tamil Examination Online Offer Letter
                </p>
                <p className="text-orange-500 text-sm px-4">posted on: 27/12/2024</p>
                <hr className="border-dotted border-gray-300 my-2 mx-4" />
                <p className="text-blue-700 text-lg font-medium px-4 py-2">
                  Applications invited for Student Internship Position under the Scientific Social Responsibility Policy of the DST - Department of Genetics
                </p>
                <p className="text-orange-500 text-sm px-4">posted on: 19/12/2024</p>
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
            </div>
          </Draggable>
        )}
      </div>
    </div>
    </div>
  );
}

export default Events;
