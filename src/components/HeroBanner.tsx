import { motion } from 'framer-motion';
import myImg from '../assets/shegz01.png'
import { rightBox, leftBox, topRightBox, bottomRightBox } from '../assets/svgs/home';
import { IoMdDownload } from "react-icons/io";
import { FaTwitter,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
  
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
      <div className="w-full relative min-h-screen text-white font-poppins backdrop-blur-lg bg-gradient-to-r from-black to-purple-900 flex flex-col justify-center items-center">
        <div className=" max-w-[1440px] w-full md:mx-auto px-[5%] py-24">
          <div className='flex gap-5 justify-around items-center w-full'>
          <div className='flex flex-col max-w-[625px]'>
          <h3 className='text-lg flex items-center'>Hi <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }} className='w-20 text-xl' role="img" aria-label="wave">👋,</motion.div> I am Abiodun Segun</h3>
          <h2 className='text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF]  to-secondary'>Frontend Developer +  Creative Director</h2>
          <p className='text-base tracking-wider text-[#f4f4f4] mb-8'>I build intuitive and user-friendly experiences by seamlessly implementing design with functionality. Through this, I aim to improve global digital interactions for all users.</p>
          
          <div className='flex gap-3 z-10 items-center'>
          <Link to="/contact" className="flex gap-2  items-center bg-secondary hover:opacity-80 justify-center font-semibold border-white md:text-[18px] text-purple-900 px-5 py-3 mr-5 rounded-3xl">
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
          
          <motion.div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ rotate: -1, transition: { duration: 0.5 } }}
            animate={{ rotate: hover ? -3 : 3 }}
            className= {`rotate-3 scale-100 transition-transform ease-in-out duration-300 relative z-10 border-2 hover:border-[#6C4CDF] border-purple-900 bg-nightBlue w-[40%] rounded-3xl`}>
          <img
            src={myImg}
            className="w-full object-cover max-h-[425px] rounded-3xl"
            alt="profile-img"
          />
          </motion.div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className=" absolute top-0 right-0">{rightBox}</div>
          <div className="absolute bottom-0 left-0">{leftBox}</div>
          <div className="absolute top-[25%] right-[25%]">{topRightBox}</div>
          <div className="absolute bottom-0 right-32">{bottomRightBox}</div>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  