import React, { useState } from 'react';
import { Icon } from "@iconify/react";

function Socialicons() {
  // States to track hovering for each icon
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isYouTubeHovered, setIsYouTubeHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);

  return (
    <section className="flex justify-center gap-4 z-20 bg-[#07294D] items-center lg:h-fit h-12 relative bottom-0 w-full">
      {/* Facebook Icon with Hover Effect */}
      <div
        onMouseEnter={() => setIsFacebookHovered(true)}
        onMouseLeave={() => setIsFacebookHovered(false)}
      >
        {isFacebookHovered ? (
          <Icon icon="logos:facebook" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px]" />
        ) : (
          <Icon
            icon="ic:baseline-facebook"
            className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px] text-white rounded-full"
          />
        )}
      </div>

      {/* YouTube Icon with Hover Effect */}
      <div
        onMouseEnter={() => setIsYouTubeHovered(true)}
        onMouseLeave={() => setIsYouTubeHovered(false)}
      >
        {isYouTubeHovered ? (
          <Icon icon="logos:youtube-icon" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px]" />
        ) : (
          <Icon
            icon="entypo-social:youtube-with-circle"
            className="h-[28px] w-[28px] lg:h-[23px] lg:w-[28px] text-white rounded-full"
          />
        )}
      </div>

      {/* LinkedIn Icon with Hover Effect */}
      <div
        onMouseEnter={() => setIsLinkedInHovered(true)}
        onMouseLeave={() => setIsLinkedInHovered(false)}
      >
        {isLinkedInHovered ? (
          <Icon icon="skill-icons:linkedin" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px]" />
        ) : (
          <Icon
            icon="entypo-social:linkedin-with-circle"
            className="h-[28px] w-[28px] lg:h-[23px] lg:w-[28px] text-white rounded-full"
          />
        )}
      </div>

      {/* Instagram Icon with Hover Effect */}
      <div
        onMouseEnter={() => setIsInstagramHovered(true)}
        onMouseLeave={() => setIsInstagramHovered(false)}
      >
        {isInstagramHovered ? (
          <Icon icon="skill-icons:instagram" className="h-[28px] w-[28px] lg:h-[25px] lg:w-[25px]" />
        ) : (
          <Icon
            icon="entypo-social:instagram-with-circle"
            className="h-[28px] w-[28px] lg:h-[23px] lg:w-[28px] text-white rounded-full"
          />
        )}
      </div>
    </section>
  );
}

export default Socialicons;
