import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const Category = () => {
  const [categories, setCategories] = useState([])

  const fetchCategory = async() => {
    const response = await fetch('http://localhost:3000/category')
    const data = await response.json()
    console.log(data)
    console.log(data[0])
    setCategories(data)
  }
  useEffect(()=>{
    fetchCategory()
  },[])

  console.log(categories)

  return (
    <>
    <div className='max-w-[1000px] mx-auto'>
        <div className='flex items-center justify-between my-5'>
            <div className='text-[25px] font-bold'>What's on your mind</div>
            <div className='flex' >
                <div className='bg-[#e2e2ef] flex items-center justify-center gap-5 w-[30px] h-[30px] rounded-full mx-2'><FaArrowLeft className='cursor-pointer'/></div>
                <div className='bg-[#e2e2ef] flex items-center justify-center gap-5 w-[30px] h-[30px] rounded-full mx-2'><FaArrowRight className='cursor-pointer'/></div>
            </div>
        </div>

        <div className='flex'>
          {categories.map((category,index)=> {
            return (
              <div key={index} className='w-[150px] shrink-0'>
                <img src={"http://localhost:3000/category/" + category.image} alt={category.image} />
              </div>
            )
          })}

        </div>
    </div>
    </>
  )
}

export default Category