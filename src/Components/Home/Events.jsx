import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

function Events() {
  const [dragging, setDragging] = useState(false);
  const [scrolling, setScrolling] = useState(true);
  const scrollContainerRef = useRef(null);

  const events = [
    {
      title: "May 2024 IDE PG Examinations, November 2024 Regular UG Examinations - English & Tamil Examination Online Offer Letter",
      postedOn: "27/12/2024",
    },
    {
      title: "Applications invited for Student Internship Position under the Scientific Social Responsibility Policy of the DST - Department of Genetics",
      postedOn: "19/12/2024",
    },
    {
      title: "May 2024 IDE PG Examinations, November 2024 Regular UG Examinations - English & Tamil Examination Online Offer Letter",
      postedOn: "27/12/2024",
    },
    {
      title: "2025 invited for Student Internship Position under the Scientific Social Responsibility Policy of the DST - Department of Genetics",
      postedOn: "19/12/2024",
    },
    // Add more events as needed
  ];

  const handleStop = () => {
    setDragging(false);
    setScrolling(true); // Resume scrolling after dragging stops
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollInterval;

    if (scrolling && container) {
      scrollInterval = setInterval(() => {
        if (!dragging) {
          container.scrollBy({ top: 1, behavior: 'smooth' });
          if (container.scrollTop >= container.scrollHeight / 2) {
            container.scrollTop = 0; // Reset scroll position for seamless loop
          }
        }
      }, 10); // Adjust the interval speed as needed
    }

    return () => clearInterval(scrollInterval);
  }, [scrolling, dragging]);

  return (
    <div className="flex flex-col m-5 lg:ml-auto items-center border-2 sm:w-3/4 md:w-[450px]">
      {/* Tab Navigation */}
      <div className="flex w-full justify-around bg-[#07294D]">
        <h1 className="cursor-pointer px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold text-white">
          Announcements
        </h1>
      </div>

      {/* Tab Content */}
      <div
        ref={scrollContainerRef}
        className="h-[50vh] md:h-[65vh] lg:h-[60vh] w-full overflow-hidden relative bg-gray-50"
      >
        <Draggable
          axis="y"
          onStart={() => {
            setDragging(true);
            setScrolling(false); // Stop scrolling when dragging starts
          }}
          onStop={handleStop}
        >
          <div className="cursor-grab">
            <div className="flex flex-col">
              {/* Render the events twice to create a seamless scroll */}
              {events.concat(events).map((event, index) => (
                <div key={index}>
                  <p className="text-blue-900 text-sm font-medium px-4 py-2">
                    {event.title}
                  </p>
                  <p className="text-orange-500 text-xs px-4">
                    posted on: {event.postedOn}
                  </p>
                  <hr className="border-dotted border-gray-300 my-2 mx-4" />
                </div>
              ))}
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Events;
