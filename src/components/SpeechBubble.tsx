// SpeechBubble.js
import React from 'react';

const SpeechBubble = ({ children }) => {
  return (
    <div className="relative p-5 px-7 sm:mr-5 max-w-[368px] bg-nightBlue rounded-lg shadow-md">
      <div className="absolute border-solid border-nightBlue border-2 h-8 w-8 rotate-45 bg-nightBlue top-0 left-6 -mt-4"></div>
      <div className="text-white text-base ">
        {children}
      </div>
    </div>
  );
};

export default SpeechBubble;
