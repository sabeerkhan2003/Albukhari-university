import React, { useState } from 'react';

function Admission_button() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the scale after 200ms
  };

  return (
    <button
      className={`py-3 px-8 bg-[#07294D] text-white font-semibold font-serif transform transition-transform duration-200 ${
        isClicked ? 'scale-110' : ''
      }`}
      onClick={handleClick}
    >
      Online Admissions
    </button>
  );
}

export default Admission_button;