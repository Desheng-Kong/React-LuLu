import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaChevronLeft,FaChevronRight} from "react-icons/fa";
import { GoHeart } from "react-icons/go";

const Card = () => {
  return (
    <div className='flex flex-col mt-10'>
      <div className=' container flex justify-end -mb-12'>
      <button className='w-8 h-8 mr-4 rounded-full bg-gray-50 flex items-center justify-center z-10'><GoHeart size={18}/></button>
      </div>
      <img src='https://placehold.jp/300x300.png' alt=''/>
      <div className='flex my-3'>
      {/* <FaChevronLeft size={25}/> */}
      <ul className='flex gap-2'>
        <li><button className='bg-blue-100 w-8 h-8 rounded-full'></button></li>
        <li><button className='bg-black w-8 h-8 rounded-full'></button></li>
        <li><button className=' bg-orange-400 w-8 h-8 rounded-full'></button></li>
        <li><button className=' bg-yellow-500 w-8 h-8 rounded-full'></button></li>
      </ul>
      {/* <FaChevronRight size={25}/> */}
      </div>
      <p className='font-bold'>Scuba Oversized Full-Zip Hoodie</p>
      <div className='flex mb-4 mt-2'>
      <FaStar size={20}/>
      <FaStar size={20}/>
      <FaStar size={20}/>
      <FaStar size={20}/>
      <FaStar size={20}/>
      </div>
      <div className='flex flex-col'>
        <p>A$169</p>
        <div className='flex flex-row -ml-1 mt-1'>
        <MdOutlineShoppingBag size={25}/>
        <p className='ml-2'>Quick Shop</p>
        </div>
      </div>
    </div>
  )
}

export default Card