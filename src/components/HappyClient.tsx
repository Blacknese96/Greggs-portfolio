import React from 'react'
import {Fade} from 'react-reveal'

const HappyClient = () => {
  return (
    <section className='w-full h-full font-poppins bg-gradient-to-r from-nightBlue to-purple-900 pb-12'>
            <div className='flex flex-col justify-center items-center pt-24 pb-12 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Happy Clients</h2>
                <p className='text-base max-w-[725px] text-center tracking-wider text-[#f4f4f4] mb-8'>Empowering people in new a digital journey with my super services
                </p>
            </Fade>
                
            </div>
            
        </section>
  )
}

export default HappyClient
