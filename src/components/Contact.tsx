import { GoSquareFill } from "react-icons/go"
import MyForm from "./Form"
import { MdCall, MdLocationPin, MdOutgoingMail } from "react-icons/md"
import { GrGithub } from "react-icons/gr"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section className='w-full font-poppins text-white h-full py-20 bg-nightBlue'>
      <div className="max-w-[1440px] mx-auto sm:flex gap-5 sm:gap-12 justify-between w-full px-[5%]">
      <div className="flex flex-col items-center sm:items-start sm:w-[50%] mb-20 sm:mb-0 h-full">
      <div className="flex items-center gap-1 mb-3">
    <GoSquareFill color="#6C4CDF"/>
    <p className="text-[16px] text-secondary font-medium font-inter">Reach Me Here </p>
    </div>
    <h2 className="text-lg sm:text-xl text-center sm:text-start max-w-[426px] leading-[49px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary">Let’s work together!</h2>
    
    <p className="text-base sm:max-w-[522px] text-center sm:text-left mb-20">I design and code beautifully simple things and i love what i do. Just simple like that! 
    </p>
    
    
    <div className="flex flex-col gap-5">
    
    
    <a href="mailto:abiodun_segun10@yahoo.com" target="_blank" className='flex items-center gap-3 hover:underline'>
    <MdOutgoingMail color="#6C4CDF" fontSize="20px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='font-medium'>abiodun_segun10@yahoo.com</p>
    </div>
    </a>
    
    <div className='flex items-center gap-3'>
    <MdCall color="#6C4CDF" fontSize="20px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='font-medium'>+234 706 154 1186</p>
    </div>
    </div>
   
    
    <a href="https://github.com/realshegz-github" target="_blank" className='flex items-center gap-3 hover:underline'>
    <GrGithub  color="#6C4CDF" fontSize="20px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='font-medium'>realshegz-github</p>
    </div>
    </a>

    <a href="https://www.linkedin.com/in/segun-abiodun-3987381b7/" target="_blank" className='flex items-center gap-3 hover:underline'>
    <FaLinkedin color="#6C4CDF" fontSize="20px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='font-medium'>Segun Abiodun</p>
    </div>
    </a>

    <div className='flex items-center gap-3'>
    <MdLocationPin color="#6C4CDF" fontSize="20px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='font-medium'>Gbagada, Lagos Nig.</p>
    </div>
    </div>
    </div>
    
    </div>
      
      <div className="flex flex-col items-center sm:items-start sm:w-[50%] h-full">
      <div className="flex items-center gap-1 mb-3">
    <GoSquareFill color="#6C4CDF"/>
    <p className="text-[16px] text-secondary font-medium font-inter">Book Now</p>
    </div>
    <h2 className="text-lg text-center sm:text-left sm:text-xl sm:max-w-[361px] md:leading-[49px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary">Get Free Business Appointment</h2>
    
    <MyForm/>
      </div>
      </div>
    </section>
  )
}

export default Contact
