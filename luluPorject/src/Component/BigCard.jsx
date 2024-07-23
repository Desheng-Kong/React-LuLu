import React from 'react'
import BG1 from '../assets/womenBC1.webp'
import BG2 from '../assets/womenBC2.webp'
import BG3 from '../assets/womenBC3.webp'

const BigCard = () => {
  return (
    <div className='xl:bg-blue-500 lg:bg-pink-600'>
      <div className='flex flex-col justify-center items-center'>
          <button className='
          bg-white text-black rounded my-12 px-2 py-4 border-2 border-black text-x font-bold w-32 
          hover:bg-black hover:text-white translate-x-0
          
          ' >ALIGN SHOP</button>
      </div>
      <div className='flex flex-row space-x-3'>
          <div className='flex-col'>
              <img src= {BG1}/>
              <p className='text-2xl font-bold mt-3'>Sweet everythings.</p>
              <p className='text-xs my-2'>Sweet on softness, style and the confidence you feel in Nulu™ fabric. </p>
              <button className=' bg-white rounded w-30 p-4 border-2 border-black text-x font-bold my-2 
              hover:bg-black hover:text-white translate-x-0'>WOMEN"S TANKS </button>
          </div>
          <div className='flex-col'>
              <img src={BG3}/>
              <p className='text-2xl font-bold mt-3'>Love at first wear.</p>
              <p className='text-xs my-2'>Minimalist silhouettes to layer up or down for infinite flattering explorations.  </p>
              <button className=' bg-white rounded w-30 p-4 border-2 border-black text-x font-bold my-2
              hover:bg-black hover:text-white translate-x-0'>WOMEN"S LEGGINGS </button>
          </div>
      </div>
    </div>
    
  )
}
export default BigCard