import React from 'react'
import heroImage from '../assets/heroImage.webp'
const Hero = () => {
  return (
    <>
    <div className='flex flex-col'>
      <img src={heroImage} alt=""/>
      <button className='p-5  bg-white rounded font-semibold w-60  ml-auto mr-10 -my-20 hover:bg-black hover:text-white translate-x-0'>WOMEN'S WHAT'S NEW </button>
      <div className='mt-32 text-3xl'>
        Lounge mode: on, indefinitely. Live in Scuba all season long.
      </div>
    </div>

    
    </>
  )
}

export default Hero