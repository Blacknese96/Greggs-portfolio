import { FaLaptopCode } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import {Zoom} from 'react-reveal'

const myExp = [
    {year:'2022 - Present',company:'Phasecurve Technology', role:'Frontend Developer', address:'Oniru, VI. Lagos'},
    {year:'March 2022 - May 2022',company:'Identity Pass', role:'Front-End Developer (Internship)', address:'Remote'},
    {year:'May 2021 – Dec 2021', role:'Software Developer Fellow',company:'The Bulb Africa', address:'Jibowu, Lagos'}
]

const education = [
    {year:'November 27, 2023', course:'React Learning Program',tutor:' Andela '},
    {year:'February, 2020', course:'Business Management & Entrepreneurship',tutor:' National Open University Of Nig.'},
    {year:'July, 2012', course:'WAEC/NECO',tutor:' Igbobi College Yaba '},
]
const MyEdu = () => {
    
  return (
    <section className='w-full h-full text-white font-poppins bg-nightBlue'>
            <div className='flex gap-5 justify-between py-24 px-[5%] max-w-[1440px] mx-auto'>
            <div className='w-5/12'>
                <Zoom duration="1500">
                <div className='flex gap-3 mb-12 items-center text-[#6C4CDF] text-2xl'>
                <FaLaptopCode />
                
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Experience</h2>
                </div>
                </Zoom>
                
                <div className="flex flex-col gap-12">
                {myExp.map((item,index)=>(
                    <div className="rounded-2xl w-full bg-gradient-to-r from-blue-gray-900 to-purple-900 shadow-xl flex flex-col gap-2 p-5 " key={index}>
                    <div className="flex gap-2 justify-between">
                    <h3 className="text-primary font-semibold text-[20px]">{item.company}</h3>
                    <h3 className="text-secondary font-semibold text-[20px]">{item.year}</h3>
                    </div>
                    <h3 className=" font-semibold text-[24px]">{item.role}</h3>
                    <h3 className="text-base">{item.address}</h3>
                    </div>
                ))}
                </div>
                
            </div>
            
            <div className='w-5/12'>
            <Zoom duration="1500">
            <div className='flex gap-3 mb-12 items-center text-[#6C4CDF] text-2xl'>
                <GiBookCover />
                
                <h2 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Education</h2>
                </div>
            </Zoom>
                
                
                <div className="flex flex-col gap-12">
                {education.map((item,index)=>(
                    <div className="rounded-2xl w-full bg-gradient-to-r from-blue-gray-900 to-purple-900 shadow-xl flex flex-col gap-2 p-5 " key={index}>
                    
                    <h3 className="text-primary font-semibold text-[20px]">{item.year}</h3>
                   
                    <h3 className=" font-semibold text-[24px]">{item.course}</h3>
                    <h3 className="text-base">{item.tutor}</h3>
                    </div>
                ))}
                </div>
            </div>
            </div>
    </section>
  )
}

export default MyEdu
