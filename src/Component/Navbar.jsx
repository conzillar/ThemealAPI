import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


export default function Navbar({ setSearchTerm }) {

  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className='flex px-[20px] py-[6px] md:px-[50px] md:py-[20px] justify-between fixed bg-[#23180D] w-full shadow-lg black-shadow'>
      <img src="logo-small.png" className=' w-[100px] md:w-[170px]' alt="" />
      <ul className='hidden md:flex md:gap-[30px]'>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/">Home</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/menu">Menu</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/gallery">Gallery</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Reservation</a></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Location</a></li>
      </ul>

      {
        openNav &&
        <ul className='md:hidden flex flex-col fixed text-center gap-[10px] bg-[#220505]  left-[40%] bg-opacity-0 backdrop-blur-lg top-[10%] translate-x-[-40%] translate-y-[-10%] p-[30px] w-[80%]'>
          <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]' onClick={() => setOpenNav(false)}><Link to="/">Home</Link></li>
          <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]' onClick={() => setOpenNav(false)}><Link to="/menu">Menu</Link></li>
          <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]' onClick={() => setOpenNav(false)}><Link to="/gallery">Gallery</Link></li>
          <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Reservation</a></li>
          <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Location</a></li>
        </ul>
      }
      <div className=' hidden md:flex gap-[18px] '>
        <a target='_blank' href="https://web.facebook.com/profile.php?id=100075918300382">
          <FaFacebookF className='text-[#fff] hover:text-[orange] text-[20px] ' />
        </a>
        <a target='_blank' href="https://x.com/victor_chu17024">
          <FaTwitter className='text-[#fff] hover:text-[orange] text-[20px]' />
        </a>
      </div>
      {
        openNav ?
        <IoMdClose onClick={() => setOpenNav(false)}  className=' text-gray-200 text-[30px] md:hidden'  /> 
        :
        <RiMenuLine onClick={() => setOpenNav(true)}  className=' text-gray-200 text-[30px] md:hidden' />
      }
    </nav>
  )
}
