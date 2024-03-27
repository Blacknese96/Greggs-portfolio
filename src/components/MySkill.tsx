import Carousel from "./Carousel"

const MySkill = () => {
    
  return (
    <section className='w-full h-full font-poppins backdrop-blur-lg bg-gradient-to-r from-black to-nightBlue'>
            <div className='flex flex-col justify-center items-center pt-24 pb-12 px-[5%] max-w-[1440px] max-auto'>
                <h2 className='text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>My Skills</h2>
                <p className='text-base max-w-[695px] text-center tracking-wider text-[#f4f4f4] mb-8'>I take your ideas and turn them into an exquisite web experiences through my expertise in frontend development.
                </p>
            </div>
            <Carousel/>
        </section>
  )
}

export default MySkill
