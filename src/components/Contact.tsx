import { GoSquareFill } from "react-icons/go"
import { IoIosCheckmarkCircle } from "react-icons/io"
import MyForm from "./Form"

const Contact = () => {
  return (
    <section className='w-full font-poppins text-white h-full py-20 bg-nightBlue'>
      <div className="max-w-[1440px] mx-auto sm:flex gap-5 sm:gap-12 justify-between w-full px-[5%]">
      <div className="flex flex-col items-center sm:items-start sm:w-[50%] mb-20 sm:mb-0 h-full">
      <div className="flex items-center gap-1 mb-3">
    <GoSquareFill color="#3BB3C3"/>
    <p className="text-[16px] text-secondary font-medium font-inter">Reach Me Here </p>
    </div>
    <h2 className="text-lg sm:text-xl text-center sm:text-start max-w-[426px] leading-[49px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary">Let’s work together!</h2>
    
    <p className="text-base sm:max-w-[522px] text-center sm:text-left mb-10">I design and code beautifully simple things and i love what i do. Just simple like that! 
    </p>
    
    
    <div className="flex flex-col gap-5">
    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Needs Assessment</p>
    <hr/>
    </div>
    </div>
    
    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Customized Solutions</p>
    <hr/>
    </div>
    </div>
    
    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Execution</p>
    <hr/>
    </div>
    </div>
   
    
    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Monitoring and Reporting</p>
    <hr/>
    </div>
    </div>

    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Quality Assurance</p>
    <hr/>
    </div>
    </div>

    <div className='flex gap-3'>
    <IoIosCheckmarkCircle color="#3BB3C3" fontSize="24px"/>
    <div className="flex flex-col  max-w-[471px]">
    <p className='text-[20px] font-semibold'>Client Collaboration</p>
    <hr/>
    </div>
    </div>
    </div>
    
    </div>
      
      <div className="flex flex-col items-center sm:items-start sm:w-[50%] h-full">
      <div className="flex items-center gap-1 mb-3">
    <GoSquareFill color="#3BB3C3"/>
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
