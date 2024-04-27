import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Fade} from 'react-reveal'
import SpeechBubble from './SpeechBubble'
// import fortune from '../assets/myclient/fortune-crop.png'
import mark from '../assets/myclient/mark-crop.png'
import greg from '../assets/myclient/greg-crop.png'
import john from '../assets/myclient/john.png'
import josh from '../assets/myclient/josh.png'
import odun from '../assets/myclient/odun-removebg-preview.png'
import { Avatar } from '@material-tailwind/react'

const client = [
  {img:mark, name:'Mark Gray', role:'Director & Software Engr.', review:'What truly stands out about Abiodun is his incredible work ethic and relentless drive to go above and beyond to achieve project goals'},
  {img:odun, name:'Odunayo Oke', role:'UI/UX Designer', review:'He has great ability to collaborate with designers to ensure that the final product is not only visually appealing but also technically sound.'},
  
  {img:john, name:'John Chimezie', role:'Software Tester & Trainer', review:' I had the privilege of working alongside him, and I was continually impressed by his dedication to nurturing talent and sharing his expertise. '},
  {img:josh, name:'Olabode Joshua', role:'Software Tester', review:'He possess a keen eye for detail, ensuring that the designs also functioned seamlessly across various devices and screen sizes.'},
  {img:greg, name:'Greg Otokhina', role:'Devops Engr.', review:'I would highly recommend Abiodun Segun for any frontend development projects, his combination of exceptional technical skills set him apart'}
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
        breakpoint: 685,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className='w-full h-full text-white font-poppins bg-gradient-to-r from-nightBlue to-purple-900 pb-12'  id="reviews">
            <div className='flex flex-col justify-center items-center pt-20 md:pt-24 pb-12 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-lg sm:text-xl md:text-2xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>What My Client Says?</h2>
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
