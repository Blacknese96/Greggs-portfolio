"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';

const CountUpExp = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
  });
  
  useEffect(() => {
    if (inView) {
      setCounterOn(true);
    } else {
      setCounterOn(false);
    }
  }, [inView]);

  return (
    // <ScrollTrigger
    //   onEnter={() => setCounterOn(true)}
    //   onExit={() => setCounterOn(false)}
    // >
      <section className="w-full h-full font-poppins">
    <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }} // Initial opacity set to 0 and y position to 30 (moved down)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Fade in opacity and move up when inView is true
            transition={{ duration: 0.5 }}
          >
        <div className="w-full ">
          <div className="grid grid-cols-2 sm:flex gap-5 sm:gap-3 text-secondary sm:justify-between">
            <div className="flex items-center justify-center gap-3 ">
              <h2 className="text-lg sm:text-xl md:text-2xl">
                {counterOn && (
                  <CountUp start={0} end={2} duration={2} delay={0} />
                )}
              </h2>
              <p className="font-medium max-w-[150px] text-sm sm:text-[18px]">
                Years of Experience
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 ">
              <h2 className="text-lg sm:text-xl md:text-2xl">
                {counterOn && (
                  <CountUp start={0} end={10} duration={2} delay={0} />
                )}
                +
              </h2>
              <p className="font-medium max-w-[150px] text-sm sm:text-[18px]">
                Project Completed
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-lg sm:text-xl md:text-2xl">
                {counterOn && (
                  <CountUp start={0} end={50} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="font-medium max-w-[120px] text-sm sm:text-[18px]">
                Happy Reviews
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 ">
            <h2 className="text-lg sm:text-xl md:text-2xl">
                {counterOn && (
                  <CountUp start={0} end={500} duration={3} delay={0} />
                )}
                +
              </h2>
              <p className="font-medium text-sm sm:text-[18px]">
                Socials
              </p>
            </div>
          </div>
        </div>
          </motion.div>
      </section>
      
    // </ScrollTrigger>
  );
};

export default CountUpExp;
