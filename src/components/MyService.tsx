import { motion } from 'framer-motion';
import { useState } from 'react';
import { GrLinkNext } from 'react-icons/gr';

const MyService = () => {
    const [hoverIndex, setHoverIndex] = useState(-1); // Initialize hover index state

    const handleMouseEnter = (index) => {
        setHoverIndex(index); // Set the hover index to the index of the item being hovered over
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

    return (<section className='w-full h-full font-poppins bg-nightBlue'>
            <div className='flex flex-col justify-center items-center py-24 px-[5%] max-w-[1440px] max-auto'>
                <h2 className='text-2xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CDF] to-secondary'>Offered Services</h2>
                <p className='text-base max-w-[695px] text-center tracking-wider text-[#f4f4f4] mb-8'>Having a website is the fastest way to achieve global outreach. I work to grow startups and companies with my following services</p>

                <div className="w-full">
                    {myService.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.01 }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`border-b border-blue-gray-900 w-full py-10 px-[30px] gap-5  flex items-center justify-between ${hoverIndex === index ? 'bg-gradient-to-r from-blue-gray-900 to-purple-900' : ''}`}
                        >
                            <div className='flex items-center gap-3 w-[35%]'>
                                <h4 className='text-lg text-primary'>{service.id}</h4>
                                <h4 className='text-lg text-white'>{service.title}</h4>
                            </div>

                            <div className='w-1/2'>
                                <p className="text-base tracking-wider text-[#f4f4f4] ">
                                    {service.desc}
                                </p>
                            </div>

                           <div className={`${hoverIndex === index? '-rotate-45 scale-100':'rotate-45 scale-100'} transition-transform ease-in-out duration-300`}>
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
