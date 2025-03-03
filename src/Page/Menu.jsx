import React, { useEffect, useState, } from 'react'
import { IoSearch } from "react-icons/io5";
export default function Menu() {

  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  async function getMeals() {
    const response = await fetch("https://themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    console.log(response)
    const data = await response.json()
    setMeals(data.meals)
    console.log(data)
  }


  useEffect(() => {
    getMeals()
  }, []);



  return (
    <>
      <section className='md:px-[50px] py-[20px]  pt-[5rem] '>
        <div className='px-[30px] mb-[1rem] md:flex items-center md:justify-between md:px-[50px]'>
          <div className=' text-[30px] md:text-[40px] md:mb-[2rem] flex text-center justify-between'>
            <h1 className='text-[#967f7f]'>Our Menu</h1>
          </div>
          <div className='flex items-center'>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} name="" id="" placeholder='Search...' className='w-[80%] outline-none border-1 px-[4px] md:px-[5px] md:py-[2px] rounded-[5px]' />
            <div className='px-[10px] py-[7px] md:py-[8px] md:px-[10px] bg-[orange] rounded-[5px] text-white'>
              <IoSearch className='' />
            </div>
          </div>
        </div>
        <div className='px-[30px] md:grid md:grid-cols-4 gap-[20px]'>
          {
            meals.filter(meal=>{
              if(searchTerm==="") return meal
              else if(meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())) return meal
            })
            .map((meal, index) => (

              <div className='mb-[2rem] md:w-full rounded-[10px] '>
                <img src={meal.strMealThumb} alt="" className='md:w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
                <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
                  <div className='flex justify-between'>
                    <h1 className='text-[#8f4f35] text-[17px] font-[600]'>{meal.strMeal}</h1>
                    <span className='text-[black] text-[17px] font-[700]'>{meal.idMeal}</span>
                  </div>
                  <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
                  <div className='flex gap-[15px]'>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
                    <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div className='w-full rounded-[10px] '>
          <img src="bittersoup.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
              </div>
              </div>
              </div>
              <div className='w-full rounded-[10px] '>
          <img src="soup.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
          <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
        </div>
        <div className='w-full rounded-[10px] '>
          <img src="whatthis.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
            <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
            <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
        </div>
        <div className='w-full rounded-[10px] '>
          <img src="super.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
        </div>
        <div className='w-full rounded-[10px] '>
          <img src="unknown.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
            <div className='flex justify-between'>
            <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
            <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
        </div>
        <div className='w-full rounded-[10px] '>
        <img src="friedrice.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
        <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
        <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
          </div>
          <div className='w-full rounded-[10px] '>
          <img src="beans.jpg" alt="" className='w-[100%] rounded-[6px] border-2 border-white shadow-lg bill' />
          <div className='px-[10px] py-[10px] border-1-black text-[#967f7f] flex flex-col'>
            <div className='flex justify-between'>
              <h1 className='text-[#8f4f35] text-[17px] font-[600]'>jellof rice</h1>
              <span className='text-[black] text-[17px] font-[700]'>$15.000</span>
            </div>
            <p className='text-[11px] font-[700] mb-[5px]'>Enjoy the smooth and balanced taste of our Americano,herfect  for a mellow coffe experience..</p>
            <div className='flex gap-[15px]'>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Delicious</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Balnaced</button>
              <button className='py-[3px] px-[8px] bg-[#8f4f35] text-white text-[13px] rounded-[19px] cursor-pointer'>Yommy</button>
            </div>
          </div>
        </div> */}
        </div>
      </section >
    </>
  )
}
