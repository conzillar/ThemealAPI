import React from 'react'

export default function Gallery() {
  return (
    <section className=' px-[30px] pt-[50px] md:px-[50px] md:pt-[100px]'>
        <div className='py-[20px] font-[600] md:text-left md:text-[25px] md:font-[700] text-[#967f7f] md:mb-[2rem]'>
            <h1>Our Gallery</h1>
        </div>
        <div className=' md:grid md:grid-cols-4 md:gap-[2rem]'>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal2.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal3.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal4.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal5.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal6.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal7.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal8.avif" alt="" className='w-[100%] h-[200px]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
            <div className='mb-[2rem] md:mb-[0rem]'>
                <img src="gal3.avif" alt="" className='w-[100%]' />
                <div>
                    <p>Our best galsi arrange</p>
                </div>
            </div>
        </div>
    </section>
  )
}
