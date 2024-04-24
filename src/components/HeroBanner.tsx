import { motion } from 'framer-motion';
import myImg from '../assets/shegz01.png'
import { rightBox, leftBox, topRightBox, bottomRightBox } from '../assets/svgs/home';
import { IoMdDownload } from "react-icons/io";
import { FaTwitter,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Fade,Zoom} from 'react-reveal'
import CountUpExp from './CountUp';
  
  const socials = [
    {link:'https://github.com/realshegz-github',
     icon:<FaGithub />},
    {link:'https://www.linkedin.com/in/segun-abiodun-3987381b7/',
     icon:<FaLinkedinIn />},
     {link:'https://twitter.com/RealshegzA',
     icon:<FaTwitter />}
  ]
  const HeroBanner = () => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    };
    const handleMouseLeave = () => {
      setHover(false);
    };
    return (
      <section className="w-full relative h-full min-h-screen text-white font-poppins backdrop-blur-lg bg-gradient-to-r from-black to-purple-900 flex flex-col justify-center items-center">
        <div className=" max-w-[1440px] w-full md:mx-auto px-[5%] pt-12 sm:pt-16 md:pt-20 pb-10">
          <div className='flex flex-col sm:flex-row gap-16 sm:gap-5 justify-between items-center mb-16 w-full'>
          <Fade left duration="1500">
          <div className='flex flex-col max-w-[625px]'>
          <h3 className=' sm:text-[18px] font-semibold md:text-lg flex items-center'>Hi <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }} className='w-20 text-xl' role="img" aria-label="wave">👋,</motion.div> I am Abiodun Segun</h3>
          <h2 className='text-lg sm:text-xl md:text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] whitespace-nowrap to-secondary'>Frontend Developer + <br/> Technical Trainer</h2>
          <p className='text-sm md:text-base md:tracking-wider text-[#f4f4f4] mb-8'>I build intuitive and user-friendly experiences by seamlessly implementing design with functionality. Through this, I aim to improve global digital interactions for all users.</p>
          
          <div className='flex gap-2 ss:gap-3 z-10 items-center'>
          <Link to="/contact" className="flex gap-2  items-center bg-secondary hover:opacity-80 text-sm justify-center font-semibold border-white md:text-[18px] text-purple-900 px-3 sm:px-5 py-3 mr-5 rounded-lg">
            <button
              type="submit"
            >
              Download CV
            </button>
            <IoMdDownload />
          </Link>
          
          {socials.map((item,index)=>(
             <a href={item.link} target='_blank' className='hover:bg-purple-900 hover:text-white text-[#6C4CDF] text-[18px] rounded-full border border-[#6C4CDF] w-9 h-9 flex items-center justify-center ' key={index}>
             {item.icon}
             </a>
          ))}
         
          </div>
          </div>
          </Fade>
          
          <motion.div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ rotate: -1, transition: { duration: 0.5 } }}
            animate={{ rotate: hover ? -3 : 3 }}
            className= {`rotate-0 sm:rotate-3 sm:scale-100 transition-transform ease-in-out duration-300 relative z-10 border-2 hover:border-[#6C4CDF] border-purple-900 bg-nightBlue w-full md:w-[40%] rounded-3xl`}>
              <Zoom duration="2000">
          <img
            src={myImg}
            className="w-full object-cover max-h-[450px] rounded-3xl"
            alt="profile-img"
          />
          </Zoom>
          </motion.div>
          </div>
          
          <CountUpExp/>
        </div>
        <div className="hidden md:block">
          <div className=" absolute top-0 right-0">{rightBox}</div>
          <div className="absolute bottom-20 left-[50%]">{leftBox}</div>
          <div className="absolute top-[25%] right-[25%]">{topRightBox}</div>
          <div className="absolute bottom-0 left-32">{bottomRightBox}</div>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;
  