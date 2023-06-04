import React,{useState} from 'react'
import Logo from "../assets/FK.png"
import {FaBars,FaTimes,FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa"

import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from 'react-scroll'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#7f8c8d] text-gray-300'>
        <div>
        <img src={Logo} alt=""  style={{width:"50px"}}/>
        </div>
        {/* Header */}
 
            <ul className='hidden md:flex'>
                <li>
                <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
                </li>
                <li>  <Link  to="About"  smooth={true}  duration={500} >
          About
        </Link></li>
                <li>  <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
                
         
       
                <li>  <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
            </ul>
        
  {/* kebap */}
  <div   onClick={handleClick} className='md:hidden z-10'>
      {!nav ?  <FaBars/> : <FaTimes/>}

  </div>
  {/* Mobile menu*/}
<ul className={!nav ? "hidden" : ' absolute top-0 left-0 w-full h-screen bg-[#2c3e50] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> <Link  onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick} to="About"  smooth={true}  duration={500} >
          About
        </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick}  to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick}  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
</ul>
   {/* Social Media*/}
   {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
       <ul>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
               <a   className='flex justify-between  items-center w-full text-gray-300 '
                href="https://www.linkedin.com/in/ebrarmeadev/" target="blank">
                   Linkedin <FaLinkedin size={30} />
               </a>
           </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111111]'>
               <a className='flex justify-between  items-center w-full text-gray-300 '
                href="https://github.com/ebrardev" target="blank">
                   Github <FaGithub size={30} />
               </a>
           </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9b59b6]'>
               <a className='flex justify-between  items-center w-full text-gray-300 '
                href="https://instagram.com/ebrardev" target="blank">
                   Instagram <FaInstagram size={30} />
               </a>
           </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1abc9c]'>
               <a className='flex justify-between  items-center w-full text-gray-300 '
                href="https://drive.google.com/file/d/1o4MTUm-kX-q9DuXuVG6U0AYAy4YsaD7q/view?usp=sharing" target="blank">
                   Resume <BsFillPersonLinesFill size={30} />
               </a>
           </li>
           
           
         
           
       </ul>
   </div> */}
    </div>
    
  )
}

export default Navbar