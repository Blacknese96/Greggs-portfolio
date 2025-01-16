import { useState } from 'react'; 
import { GrFormNextLink } from "react-icons/gr";
import {Fade} from 'react-reveal';
import gingerex from '../assets/gingerex-img.jpg'
import zeit from '../assets/zeit-icon.png'
import tiddix from '../assets/Tiddix-img.jpg'
import phasecurve from '../assets/phasecurve-img.jpg'

const workContent = [
  
  {
    id: "01",
    title: "Phasecurve",
    desc: " Users' experience, data security, and performance are given top priority, and the website serves as a strong platform to enable corporate training sign-ups..",
    bgImg: phasecurve,
    path: "https://phasecurve.com/",
  },{
    id: "02",
    title: "Gingerex",
    desc: "I developed a dynamic platform that successfully highlights services and encourages job applications by achieving a balance between visual appeal and functional performance.",
    bgImg: gingerex,
    path: "https://www.gingerexconsultancy.com/",
  },
  {
    id: "03",
    title: "Zeit Consulting",
    desc: "My ability to conceptualise, design, and develop a website that highlights the importance of business consultation as demonstrated in this project. ",
    bgImg: zeit,
    path: "https://www.zeitconsultinginc.com/",
  },
  {
    id: "04",
    title: "Tiddix",
    desc: "Tiddix is an ongoing web app, where I developed more skills in advanced state management & authentication, focused on delivering a seamless experience within the dashboard.",
    bgImg: tiddix,
    path: "https://tiddix.co.uk/",
  },
];

const Works = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null); // Specify type explicitly

  return (
    <div className='w-full bg-nightBlue pt-16'>
    <Fade up duration="1500">
         <h2 className='text-lg sm:text-xl md:text-2xl text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Top Project</h2>
               
            </Fade>
    <section
      className='w-full h-full text-white grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 min-h-[85vh]'
      id='works'
      style={{
        backgroundImage: hoverIndex !== null ? `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)), url(${workContent[hoverIndex].bgImg})` : `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)), url(${workContent[0].bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {workContent.map((item, index) => (
        <div
          className='w-full px-5 pt-8 pb-12 flex flex-col gap-10 justify-between border-b-2 border-b-[#666] md:border-b-0 ss:border-r-2 border-r-[#666]'
          key={index}
          onMouseEnter={() => setHoverIndex(() => index)} 
          onMouseLeave={() => setHoverIndex(() => null)} 
        >
          <div className={`w-16 h-16 ${
                hoverIndex === index ? 'text-primary' : 'text-white'
              } border border-dimWhite flex self-end items-center justify-center rounded-full text-[24px] font-bold`}>{item.id}</div>

          <div className='w-full flex flex-col items-center'>
          
          <Fade duration={2000}>
          <a href={item.path} target='_blank'>
          <button type='button' className={`text-white flex items-center justify-center mb-5 self-center shadow-lg rounded-md ${
                hoverIndex === index ? 'bg-primary' : 'bg-transparent'
              } border border-white p-3 font-bold`}>{item.title}</button>
          </a>
            
          
            <p className='text-center text-sm font-medium mb-8'>
              {item.desc}
            </p>

            <div className={`self-end w-fit px-3 py-2 text-[24px] font-bold rounded-md ${
                hoverIndex === index ? 'bg-primary' : 'bg-transparent'
              }`}>
              <a href={item.path} target='_blank'>
                <GrFormNextLink color="#ccc" />
              </a>
            </div>
            </Fade>
          </div>
        </div>
      ))}
    </section>
   </div>
  );
};

export default Works;
