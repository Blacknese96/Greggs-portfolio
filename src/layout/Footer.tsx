// import { GoSquareFill } from 'react-icons/go';
import logo from '../assets/zeit-logo-black.svg';
import { Link } from 'react-router-dom';
import { MdCall, MdLocationOn, MdMail, MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import tcp from '../assets/tcp.pdf';

const Footer = () => {
  // const navigate = useNavigate();

  return (
    <footer className="bg-[#37393F] px-[5%] py-24 text-white font-poppins">
    <div className='max-w-[1400px] mx-auto flex flex-col  w-full h-full'>
    <div className='flex flex-col md:flex-row gap-5 md:items-center w-full justify-between pb-10 border-b-gray-600 border-b'>
    <div className='mb-5 md:mb-0'><Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          </div>
    
    <div className='flex flex-wrap md:flex-nowrap gap-8 justify-between md:justify-normal'> 
    <div className='flex items-center gap-4'>
    <div className='rounded-full p-4 bg-[#4C4D52]'><MdCall /></div>
    <div className='flex flex-col'>
    <p className='font-semibold text-base'><a href='tel:+1226-784-2778'>Call Us</a></p>
    <p className='font-inter max-w-[300px]'><a href='tel:+1226-784-2778'>+1226-784-2778</a></p>
    </div>
    </div>
    
    <div className='flex items-center gap-4'>
    <div className='rounded-full p-4 bg-[#4C4D52]'><MdMail /></div>
    <div className='flex flex-col'>
    <p className='font-semibold text-base'>Mail Us</p>
    <p className='font-inter max-w-[300px]'><a href='mailto:seun@zeitconsultinginc.com'>Info@zeitconsultinginc.com</a></p>
    </div>
    </div>
    
    <div className='flex items-center gap-4'>
    <div className='rounded-full p-4 bg-[#4C4D52]'><MdLocationOn /></div>
    <div className='flex flex-col'>
    <p className='font-semibold text-base'>Location</p>
    <p className='font-inter max-w-[300px]'>501 Krug Street, Unit 203, Kitchener, ON, Canada</p>
    </div>
    </div>
    </div>
    </div>
    
    <div className='flex flex-wrap gap-5 ss:items-center justify-between ss:justify-evenly w-full py-10  border-b-gray-600  border-b'>
    <div className='flex flex-col  gap-5'>
    <div className="flex gap-1 mb-1">
    {/* <GoSquareFill color="#0D475B"/> */}
    <p className="text-base font-semibold text-secondary font-inter">Quick Links</p>
    </div>
    
    <ul className=" font-inter flex flex-col ">
                <li className="mb-1">
                  <Link to="/about" className="hover:text-secondary">
                    About us
                  </Link>
                </li>
              
                <li className="mb-1">
                  <Link to="/services" className="hover:text-secondary">
                    Services{' '}
                  </Link>
                </li>
          
                <li className="mb-1">
                  <Link to="/contact" className="hover:text-secondary">
                    Contact
                  </Link>
                </li>
                
                <li className="mb-1">
                  <Link to="/careers" className="hover:text-secondary">
                    Careers{' '}
                  </Link>
                </li>
      </ul>
    </div>
    
    <div className='flex flex-col justify-normal    gap-2'>
      <div className="flex items-center gap-1 mb-1">
    {/* <GoSquareFill color="#0D475B"/> */}
    <p className="text-base font-semibold text-secondary font-inter">Utilities</p>
    </div>
    
    <ul className="font-inter flex flex-col ">
                <li className="mb-1">
                  <Link to="/about" className="hover:text-secondary">
                    Map
                  </Link>
                </li>
              
                <li className="mb-1">
                  <Link to={tcp} target='_blank' className="hover:text-secondary">
                    Privacy policy{' '}
                  </Link>
                </li>
          
                <li className="mb-1">
                  <Link to={tcp} target='_blank' className="hover:text-secondary">
                    Terms & conditions
                  </Link>
                </li>
      </ul>
    </div>
    
    <div className='flex flex-col   gap-2'>
    <div className="flex items-center gap-1 mb-1">
    {/* <GoSquareFill color="#0D475B"/> */}
    <p className="text-base text-secondary font-semibold font-inter">Socials</p>
    </div>
    
    <ul className=" font-inter flex flex-col ">
                <li className="mb-1">
                  <Link to="/about" className="hover:text-secondary">
                  <div className='flex items-center gap-1'><RiInstagramFill /><span>Instagram</span>
                  </div>
       
                  </Link>
                </li>
              
                <li className="mb-1">
                  <Link to="/services" className="hover:text-secondary">
                  <div className='flex items-center gap-1'><MdOutlineFacebook /><span>Facebook</span>
                  </div>
                  </Link>
                </li>
          
                <li className="mb-1">
                  <Link to="/contact" className="hover:text-secondary">
                  <div className='flex items-center gap-1'><RiLinkedinBoxFill /><span>Linkedin</span>
                  </div>
                  </Link>
                </li>
                
                <li className="mb-1">
                  <Link to="/careers" className="hover:text-secondary">
                  <div className='flex items-center gap-1'><RiTwitterFill /><span> Twitter</span>
                  </div>
                   
                  </Link>
                </li>
      </ul>
    </div>
    </div>
    
    <div className='flex w-full pt-10 items-center justify-center'>
    <small className="text-sm sm:text-[16px] font-medium">
          &copy; 2024 <span className='text-secondary'>Zeit Consulting Inc.</span>  All rights reserved.
        </small>
    </div>
    
    </div>
      
    </footer>
  );
};

export default Footer;
