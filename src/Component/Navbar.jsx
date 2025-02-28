import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Navbar({setSearchTerm}) {


  

  return (
    <nav className='flex px-[50px] py-[20px] justify-between fixed bg-[#23180D] w-full shadow-lg black-shadow'>
      <img src="logo-small.png" className='w-[170px]' alt="" />
      <ul className='flex gap-[30px]'>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/">Home</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/menu">Menu</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><Link to="/gallery">Gallery</Link></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Reservation</a></li>
        <li className='font-[500] text-[18px] text-[#fff] hover:text-[orange]'><a href="">Location</a></li>
      </ul>
     
      <div className='flex gap-[18px] '>
        <a target='_blank' href="https://web.facebook.com/profile.php?id=100075918300382">
          <FaFacebookF className='text-[#fff] hover:text-[orange] text-[20px] ' />
        </a>
        <a target='_blank' href="https://x.com/victor_chu17024">
          <FaTwitter className='text-[#fff] hover:text-[orange] text-[20px]' />
        </a>
      </div>

    </nav>
  )
}
