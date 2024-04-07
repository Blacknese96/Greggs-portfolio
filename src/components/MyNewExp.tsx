import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { FaExternalLinkAlt } from "react-icons/fa"
import { GiBookCover } from 'react-icons/gi'
import {Fade} from 'react-reveal'

const myExp = [
    {company:'Phasecurve Technology',role:'Frontend Developer',year:'2022 - Present', experience:'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.', link:'https://phasecurve.com/'},
    {company:'Identitypass',role:'Frontend Developer (Internship)',year:'March 2022 - May 2022', experience:'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.', link:'https://www.myidentitypass.com/'},
    {company:'The Bulb Africa',role:'Software Developer Fellow',year: 'May 2021 – Dec 2021', experience:'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.', link:'https://www.thebulb.africa/'}
]

const education = [
  {year:'November 27, 2023', course:'React Learning Program',tutor:' Andela '},
  {year:'February, 2020', course:'B.sc in Entrepreneurship & Business Mgt',tutor:' National Open University Of Nig.'},
]
const MyNewExp = () => {
  return (
    <section className='w-full h-full text-white font-poppins bg-nightBlue'>
       <div className='flex flex-col py-20 md:py-24 px-[5%] max-w-[1400px] mx-auto'>
       <Fade duration="1500" left>
                <div className='flex gap-3 mb-12 text-lg sm:text-xl md:text-2xl items-center text-[#6C4CDF]'>
                <FaLaptopCode />
                
                <h2 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Experience</h2>
                </div>
        </Fade>
        {myExp.map((item,index)=>(
        <div className='flex justify-end'>
        <Fade up duration="1500">
        <div className='max-w-[926px] flex gap-5 flex-col py-7 border-b border-purple-900' key={index}>
            <div className='flex gap-5 flex-wrap justify-between items-center'>
            <h3 className='font-semibold text-[20px] sm:text-[24px] text-primary'>{item.role}</h3>
            
            <div className='flex text-[18px] font-semibold gap-2 items-center'>
                    <span className='text-[#666]'>at</span>
                    <a href={item.link} target='_blank' className='text-secondary flex items-center gap-2'>
                    <p className='italic'>{item.company}</p>
                    <FaExternalLinkAlt color="#6C4CDF"/>
                    </a>
            </div>
            </div>
            
            <p className='text-secondary font-semibold text-[20px]'>{item.year}</p>
            <p className='text-sm sm:text-base sm:tracking-wider text-[#f4f4f4]'>{item.experience}</p>
            </div>
        </Fade>
        </div>
        ))}
        
        <div className='pt-24'>
        <Fade duration="1500" left>
                <div className='flex gap-3 mb-12 items-center text-[#6C4CDF] text-lg sm:text-xl md:text-2xl '>
                <GiBookCover />
                
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Education</h2>
                </div>
        </Fade>
        {education.map((item,index)=>(
        <div className='flex justify-end'>
        <Fade up duration="1500">
        <div className='max-w-[926px] w-full flex gap-5 flex-col py-7 border-b border-purple-900' key={index}>
            <div className='flex flex-wrap items-center gap-5 justify-between'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-semibold text-[24px] text-primary'>{item.course}</h3>
              
              <p className='text-base font-medium text-secondary'>{item.year}</p>
            </div>
            
            <p className='text-base italic font-medium tracking-wider text-[#f4f4f4]'>
            {item.tutor}
            </p>
            </div>
            
            </div>
        </Fade>
            
                
        </div>
        ))}
        </div>
       </div>
    </section>
  )
}

export default MyNewExp
