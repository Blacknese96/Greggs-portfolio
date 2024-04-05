import Carousel from "./Carousel"
import {Fade} from 'react-reveal'
const MySkill = () => {
    
  return (
    <section className='w-full h-full font-poppins bg-gradient-to-r from-black to-purple-900 pb-12'>
            <div className='flex flex-col justify-center items-center pt-20 sm:pt-24 pb-12 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-lg sm:text-xl md:text-2xl text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>My Skills</h2>
                <p className='text-sm sm:text-base max-w-[725px] text-center sm:tracking-wider text-[#f4f4f4] mb-5 sm:mb-8'>I take your ideas and turn them into exquisite web experiences through my expertise in frontend development.
                </p>
            </Fade>
                
            </div>
            <Carousel/>
        </section>
  )
}

export default MySkill
