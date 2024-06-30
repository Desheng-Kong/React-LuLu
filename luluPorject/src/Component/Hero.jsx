import React from 'react'
import heroImage from '../assets/heroImage.webp'
const Hero = () => {
  return (
    <>
    <div className='flex flex-col relative mt-20'>
      <img className='' src={heroImage} alt=""/>
      <button className=' absolute p-5 bg-white rounded font-semibold w-60 right-20 bottom-40 hover:bg-black hover:text-white '>WOMEN'S WHAT'S NEW </button>
      <div className='mt-10 text-3xl'>
        Lounge mode: on, indefinitely. Live in Scuba all season long.
      </div>
    </div>

    
    </>
  )
}

export default Hero