// SpeechBubble.js

const SpeechBubble = ({ children }) => {
  return (
    <div className="relative p-5 mx-5 sm:mx-2 max-w-[368px] bg-nightBlue rounded-lg shadow-md">
      <div className="absolute border-solid border-nightBlue border-2 h-8 w-8 rotate-45 bg-nightBlue top-0 left-6 -mt-4"></div>
      <div className="text-white ss:text-base ">
        {children}
      </div>
    </div>
  );
};

export default SpeechBubble;
