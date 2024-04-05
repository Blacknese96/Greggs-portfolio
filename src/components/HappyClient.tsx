import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Fade} from 'react-reveal'
import SpeechBubble from './SpeechBubble'
import shegz from '../assets/shegz01.png'
import { Avatar } from '@material-tailwind/react'

const client = [
  {img:shegz, name:'Abiodun Segun', role:'Frontend Engr', review:'He possess a keen eye for detail, ensuring that the designs not only looked visually stunning but also functioned seamlessly across various devices and screen sizes.'},
  {img:shegz, name:'Abiodun Segun', role:'Frontend Engr', review:'He possess a keen eye for detail, ensuring that the designs not only looked visually stunning but also functioned seamlessly across various devices and screen sizes.'},
  {img:shegz, name:'Abiodun Segun', role:'Frontend Engr', review:'He possess a keen eye for detail, ensuring that the designs not only looked visually stunning but also functioned seamlessly across various devices and screen sizes.'},
  {img:shegz, name:'Abiodun Segun', role:'Frontend Engr', review:'He possess a keen eye for detail, ensuring that the designs not only looked visually stunning but also functioned seamlessly across various devices and screen sizes.'},
  {img:shegz, name:'Abiodun Segun', role:'Frontend Engr', review:'He possess a keen eye for detail, ensuring that the designs not only looked visually stunning but also functioned seamlessly across various devices and screen sizes.'}
]
const HappyClient = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 511,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className='w-full h-full text-white font-poppins bg-gradient-to-r from-nightBlue to-purple-900 pb-12'>
            <div className='flex flex-col justify-center items-center pt-24 pb-12 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-2xl text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>What My Client Says?</h2>
                {/* <p className='text-base max-w-[725px] text-center tracking-wider text-[#f4f4f4] mb-8'>Empowering people in new a digital journey with my super services
                </p> */}
            </Fade>
                
                <div className='w-full '>
                <Slider {...settings}>
                {client.map((item,index)=>(
                   <div className="flex flex-col " key={index}>
                   <div className='flex gap-6 mb-3 items-center'>
                   <Avatar src={item.img} alt="avatar" size="xl" className='bg-[#6C4CDF]' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                   
                   <div>
                   <p className='font-semibold text-base text-dimWhite'>{item.name}</p>
                   <p className='italic text-sm text-primary'>{item.role}</p>
                   </div>
                   </div>
                   
                     <SpeechBubble>
                     {item.review}
                     </SpeechBubble>
                   </div>
                ))}
               </Slider>
                </div>
            </div>
            
        </section>
  )
}

export default HappyClient
