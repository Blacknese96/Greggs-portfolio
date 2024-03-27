import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import htmlLogo from "../assets/html-logo.png"
import cssLogo from "../assets/css-logo.png"
import jsLogo from "../assets/js-logo.png"
import react from "../assets/react-logo.png"
// import tailwind from "../assets/tailwind-logo.png"
import chakra from "../assets/chakra-ui-logo.png"
import next from "../assets/next-logo.png"
import github from "../assets/github-logo.png"
import trello from "../assets/trello-logo.png"
import { motion } from 'framer-motion';


const skillsData = [
    { title: 'HTML', img: htmlLogo, rate:'95%' },
    { title: 'CSS', img: cssLogo, rate:'95%' },
    { title: 'JavaScript', img: jsLogo, rate:'80%' },
    { title: 'React', img: react, rate:'80%' },
    // { title: 'Tailwind CSS', img: tailwind, rate:'90%' },
    { title: 'Chakra UI', img: chakra, rate:'85%' },
    { title: 'NEXT.js', img: next, rate:'75%' },
    { title: 'GitHub', img: github, rate:'80%' },
    { title: 'Trello', img: trello, rate:'85%' },
   
  ];
const Carousel = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 411,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="w-full font-sans overflow-hidden">
       <Slider {...settings}>
        {skillsData.map((item, index) => (
            <div key={index} className='max-w-[200px] py-5'>
          <motion.div
             whileHover={{ scale: 1.03, opacity: 0.6}}  className='py-7 max-w-[200px] border border-primary bg-gradient-to-r from-secondary  to-purple-900 mb-5 rounded-3xl'>
            <div className="flex flex-col gap-4 items-center justify-center h-full">
            <img src={item.img} alt={item.title} className='object-cover w-24 h-24'/>
              <p className="font-semibold text-center text-nightBlue text-[20px]">{item.rate}</p>
            </div>
          </motion.div>
          
          <p className="font-semibold text-center text-secondary text-[20px]">{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
