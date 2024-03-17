import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  // Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink} from "react-router-dom";
import { NavLinks } from "../constant";
import { IoGlobe } from "react-icons/io5";

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  // const navigate = useNavigate()
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  
  const handleClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };
  const handleMobileClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
    setOpenNav(!openNav)
  };
  const handleContactClick = () => {
    setOpenNav(!openNav)
  };
  
  // const navList = (
  //   <ul className="text-white flex flex-col items-center gap-5 ">
  //     <Typography
  //             as="li"
  //           placeholder={undefined}   >
  //       <Link to="/" className="flex items-center font-semibold">
  //         Home
  //       </Link>
  //     </Typography>
  //     <Typography
  //             as="li"
  //             placeholder={undefined}   >
  //       <Link to="/about" className="flex items-center font-semibold">
  //         About Us
  //       </Link>
  //     </Typography>
  //     <Typography
  //             as="li"
  //             placeholder={undefined}   >
  //       <Link to="/services" className="flex items-center font-semibold">
  //         Services
  //       </Link>
  //     </Typography>
  //     <Typography
  //             as="li"
  //             placeholder={undefined}   >
  //       <Link to="/careers" className="flex items-center font-semibold">
  //         Careers
  //       </Link>
  //     </Typography>
  //   </ul>
  // );
 
  return (
    <div className=" w-full ">
      <Navbar className="sticky text-white shadow-none top-0 z-10 font-poppins max-w-full bg-gradient-to-r from-black to-purple-900 rounded-none border-0 w-full px-[5%] py-2 lg:py-4" placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="flex items-center justify-between w-full">
        <div>
          <NavLink to="/" className="text-xl flex items-center gap-2">
          <IoGlobe />
          <span className="text-sm font-medium">abiodun_segun10@yahoo.com</span>
          </NavLink>
        </div>
        
          
          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
          {NavLinks.map((item,index) => (
            <li className={`font-medium md:text-[16px] ${
              clickedIndex === index ? 'text-secondary' : ''
            } hover:opacity-70`} onClick={() => handleClick(index)} key={index}>
              <NavLink
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
            <div className="flex items-center">
            <Link to="/contact" className="hidden sm:flex items-center bg-secondary hover:opacity-80 justify-center font-semibold border-white md:text-[16px] text-purple-900 px-5 py-3 rounded-3xl">
            <button
              type="submit"
            >
              Get in touch
            </button>
          </Link>
    
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)} placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </ul>
          
          
        </div>
        
        
        {openNav && <MobileNav open={openNav} className="w-full overflow-hidden px-[5%] flex flex-col justify-center items-center py-8 bg-gray-900 z-10 min-h-[400px] absolute top-[100px] left-0">
         <ul className="text-white flex flex-col items-center gap-5">
         {NavLinks.map((item,index) => (
            <li className={`flex items-center font-semibold ${
              clickedIndex === index ? 'text-secondary' : ''
            } hover:opacity-70`} onClick={() => handleMobileClick(index)} key={index}>
              <NavLink
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
         </ul>
        
          <div className="flex items-center mt-5">
          <NavLink to="/contact">
          <button
              onClick={()=> handleContactClick()}
              type="submit"
              className="flex items-center bg-primary hover:opacity-80 justify-center font-semibold border-white text-white w-[150px] h-12"
            >
              Get Consulting
            </button>
          </NavLink>
            
          </div>
        </MobileNav>}
      </Navbar>
    </div>
  );
}