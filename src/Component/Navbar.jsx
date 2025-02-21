import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Navbar() {


  async function handleSearch() {
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    console.log(response)
    const data = await response.json()
    setMeal(data.meals || [])
    console.log(data);
  }

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
      <div className='flex items-center'>
        <input type="text" name="" id="" elementValue={searchTerm} onChange={(e) => setSearchTerm} placeholder='Search...' className='text-white border-1 py-[3px] px-[5px] rounded-[5px]' />
        <button className='w-[10%] py-[8px] bg-[Orange] text-white font-[500]' onClick={() => handleSearch}><IoSearch /></button>
      </div>
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
