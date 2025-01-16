import { FaLaptopCode } from 'react-icons/fa'
import { FaExternalLinkAlt } from "react-icons/fa"
import { GiBookCover } from 'react-icons/gi'
import {Fade} from 'react-reveal'

const myExp = [
    {company:'Phasecurve Technologies',role:'Fullstack Developer/ DevOps Engineer',year:'2022 - 2024', experience:'As a Fullstack Developer at Phasecurve Technologies, my primary responsibilities revolve around enhancing the user experience and backend functionalities of the companys websites. This involves developing and redesigning web pages using technologies like React.js and json-server, ensuring that they are not only visually appealing but also intuitive and responsive. Also, my role as DevOps Engineer allowed me to gather hands-on experience in cloud architecture, CI/CD pipelines, and containerization while working on projects.', link:'https://phasecurve.com/'},
    {company:'Global Initiative Microfinance Bank',role:'Graphics Designer',year:'March 2020 - May 2020', experience:'As the graphics designer, I designed a custom social logo for their website based on the client brand design, and reviewed final layouts of the logo.'},
]

const education = [
  {year:'November 27, 2019', course:'Bsc, Information Technology and Business Information Systems',tutor:' Middlesex University '},
  {year:'February, 2014 - November 15, 2016', course:'Advanced Diploma, Software Engineering',tutor:' Aptech '},
]
const MyNewExp = () => {
  return (
    <section className='w-full h-full text-white font-poppins bg-gradient-to-r from-black to-purple-900 pb-12' id="experience">
       <div className='flex flex-col pt-20 pb-5 sm:py-20 md:py-24 px-[5%] max-w-[1400px] mx-auto' >
       <Fade duration="1500" left>
                <div className='flex gap-3 mb-6 sm:mb-12 text-lg sm:text-xl md:text-2xl items-center justify-center sm:justify-normal text-[#6C4CDF]'>
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
            
            <div className='flex ss:text-[18px] font-semibold gap-2 items-center'>
                    <span className='text-[#666]'>at</span>
                    <a href={item.link} target='_blank' className='text-secondary flex items-center gap-2'>
                    <p className='italic'>{item.company}</p>
                    <FaExternalLinkAlt color="#6C4CDF"/>
                    </a>
            </div>
            </div>
            
            <p className='text-secondary font-semibold text-base ss:text-[20px]'>{item.year}</p>
            <p className='text-sm sm:text-base sm:tracking-wider text-[#f4f4f4]'>{item.experience}</p>
            </div>
        </Fade>
        </div>
        ))}
        
        <div className='pt-16 sm:pt-20 md:pt-24'>
        <Fade duration="1500" left>
                <div className='flex gap-3 mb-6 sm:mb-12 items-center text-[#6C4CDF] text-lg justify-center sm:justify-normal sm:text-xl md:text-2xl '>
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
              <h3 className='font-semibold sm:text-[24px] text-primary'>{item.course}</h3>
              
              <p className='sm:text-base font-medium text-secondary'>{item.year}</p>
            </div>
            
            <p className='sm:text-base italic font-medium tracking-wider text-[#f4f4f4]'>
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
