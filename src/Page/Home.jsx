import React from 'react'


export default function () {
  return (
    <div className='book text-center items-center align-center'>
      <h1 className='pt-[17rem] text-[orange] text-[25px] link tracking-[5px]'>Welcome</h1>
      <p className='text-[45px] font-[600] text-white'>RESTAURANT</p>
      <p className='text-[45px] font-[600] text-white'>WORDPRESS THEMES</p>
      <div className="flex items-center justify-center gap-[10px] mb-[1rem]">
        <div className="border-t-1 border-white w-[50px] "></div>
        <span className='text-white touch'>NEW FLAVOURS</span>
        <div className=" border-t-1 border-white w-[50px]"></div>
      </div>
      <button className='px-[10px] py-[3px] bg-[orange] text-black-400 font-[500] rounded-[5px] cursor-pointer'>Book A Table</button>
    </div>
  )
}