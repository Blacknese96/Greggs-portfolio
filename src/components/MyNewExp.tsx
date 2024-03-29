import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import {Zoom} from 'react-reveal'

const MyNewExp = () => {
  return (
    <section className='w-full h-full text-white font-poppins bg-nightBlue'>
       <div className='flex flex-col py-24 px-[5%] max-w-[1400px] mx-auto'>
       <Zoom duration="1500">
                <div className='flex gap-3 mb-12 items-center text-[#6C4CDF] text-2xl'>
                <FaLaptopCode />
                
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Experience</h2>
                </div>
        </Zoom>
        <div className='max-w-5xl flex flex-col py-5 border-y border-purple-900 justify-end'>
        <div className='flex items-center'></div>
        
        <p className=''></p>
        <p className=''></p>
        </div>
       </div>
    </section>
  )
}

export default MyNewExp
