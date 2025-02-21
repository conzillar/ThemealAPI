import React from 'react'

export default function Menucard() {
    return (
        <div className='w-full rounded-[10px] '>
            <img src={data.image} alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
            <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='text-[#8f4f35] text-[17px] font-[600]'>{data.title}</h1>
                    <span className='text-[black] text-[17px] font-[700]'> {data.span} </span>
                </div>
                <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
                <div className='flex gap-[15px]'>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
                </div>
            </div>
        </div>
    )
}
