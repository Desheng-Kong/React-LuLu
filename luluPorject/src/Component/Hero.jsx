import React from 'react'
import heroImage from '../assets/heroImage.webp'
const Hero = () => {
  return (
    <div className='xl:m-auto max-w-[full] bg-gray-100 sm:px-[16px]'>
      <div className='w-full m-auto max-w-[1350px] relative'>
        <img className='object-fit' src={heroImage} />
        <button className='absolute hidden lg:block right-14 bottom-24 xl:block p-5 bg-white rounded font-semibold max-w-[260px] m-auto  hover:bg-black hover:text-white z-20'> WOMEN'S WHAT'S NEW </button>
        <p className='text-[28px] mb-[16px] pt-[16px] pb-[5px] pr-[10px]'>
          Lounge mode: on, indefinitely. Live in Scuba all season long.
        </p>
      </div>
    </div>
  )
}

export default Hero