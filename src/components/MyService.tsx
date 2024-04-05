import { motion } from 'framer-motion';
import { useState } from 'react';
import { GrLinkNext } from 'react-icons/gr';
import {Fade} from 'react-reveal'

const MyService = () => {
    const [hoverIndex, setHoverIndex] = useState(-1); // Initialize hover index state
    const [initialIndex,setInitialIndex] = useState(0)

    const handleMouseEnter = (index) => {
        setHoverIndex(index); // Set the hover index to the index of the item being hovered over
        setInitialIndex(index)
    };

    const handleMouseLeave = () => {
        setHoverIndex(-1); // Reset hover index when mouse leaves
    };

    const myService = [
        {
            id: '01',
            title: 'SEO',
            desc: 'I setup project to use basic SEO principles which pushes your websites to the first page on search engines.',
        },
        {
            id: '02',
            title: 'Web Development',
            desc: 'Performance and precision come together in this well written code, which is optimised for maximum dependability and reusability.',
        },
        {
            id: '03',
            title: 'Website Maintenance',
            desc: 'From fixing bugs to optimizing user experience, I ensure your website stays fresh, functional, and engaging.',
        },
    ];

    return (
        <section className='w-full h-full font-poppins bg-nightBlue'>
            <div className='flex flex-col justify-center items-center py-20 md:py-24 px-[5%] max-w-[1440px] mx-auto'>
            <Fade up duration="1500">
            <h2 className='text-lg sm:text-xl md:text-2xl text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>My Offered Services</h2>
                <p className='text-sm sm:text-base max-w-[725px] text-center sm:tracking-wider text-[#f4f4f4] mb-12 sm:mb-8'>Global outreach can be accomplished most quickly through a website. With my following services, I help to grow startups and businesses.</p>
            </Fade>
                

                <div className="w-full">
                    {myService.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.01 }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`service-list border-b border-blue-gray-900 w-full py-5 sm:py-10 px-5 sm:px-[30px] gap-5  sm:flex items-center justify-between ${hoverIndex === index ? 'bg-gradient-to-r from-transparent to-purple-900' : index === 0 && initialIndex === 0 ? 'bg-gradient-to-r from-blue-gray-900 to-purple-900' : ''}`}
                        >
                            <div className='flex items-center justify-between sm:justify-normal font-semibold gap-3 w-full sm:w-[35%] text-[20px] sm:text-[24px]md:text-lg mb-5 sm:mb-0'>
                            <div className='flex items-center gap-3'>
                            <h4 className=' text-primary'>{service.id}</h4>
                                <h4 className='text-white'>{service.title}</h4>
                            </div>
                                
                                
                                <div className={`flex flex-col items-end sm:hidden ${hoverIndex === index ? '-rotate-45 scale-100' : 'rotate-45 scale-100'} transition-transform ease-in-out duration-300`}>
                                <GrLinkNext color="#fff" fontSize="24px" />
                            </div>

                            </div>

                            <div className='sm:w-1/2'>
                                <p className="text-sm sm:text-[16px] md:text-base sm:tracking-wider text-[#f4f4f4] ">
                                    {service.desc}
                                </p>
                            </div>

                            <div className={`hidden sm:flex ${hoverIndex === index ? '-rotate-45 scale-100' : 'rotate-45 scale-100'} transition-transform ease-in-out duration-300`}>
                                <GrLinkNext color="#fff" fontSize="24px" />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyService;
