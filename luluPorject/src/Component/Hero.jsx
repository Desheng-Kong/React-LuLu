import React from 'react'
import heroImage from '../assets/heroImage.webp'
const Hero = () => {
  return (
    <>
    <div className='mx-auto max-w-[1200px]'>
      <img className='' src={heroImage} alt=""/>
      <button className='p-5 bg-white rounded font-semibold w-60 right-20 bottom-40 hover:bg-black hover:text-white z-20'>WOMEN'S WHAT'S NEW </button>
      <div className=''>
        Lounge mode: on, indefinitely. Live in Scuba all season long.
      </div>
    </div>
    </>
  )
}

export default Hero