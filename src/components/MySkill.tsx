import Carousel from "./Carousel"
import {Fade} from 'react-reveal'
const MySkill = () => {
    
  return (
    <section className='w-full h-full font-poppins bg-gradient-to-r from-black to-nightBlue pb-12'>
            <div className='flex flex-col justify-center items-center pt-24 pb-12 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>My Skills</h2>
                <p className='text-base max-w-[725px] text-center tracking-wider text-[#f4f4f4] mb-8'>I take your ideas and turn them into an exquisite web experiences through my expertise in frontend development.
                </p>
            </Fade>
                
            </div>
            <Carousel/>
        </section>
  )
}

export default MySkill
