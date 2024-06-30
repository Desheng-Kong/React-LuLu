import React from 'react'
import midImg1 from '../assets/midImg1.webp'
const MidSection = () => {
  return (
    <div className='flex flex-col justify-start space-y-4 mt-10'>
      <img src={midImg1}/>
      <p className='text-2xl font-semibold'>Make plans and memories. Accommodate both.</p>
      <p>With new, soft layers and bags that pack in the ease, travel plans go from stress-filled to best-filled.</p>
      <button className='
         bg-white text-black rounded my-12 px-4 py-4 border-2 border-black text-x font-bold w-40 
         hover:bg-black h-15 hover:text-white translate-x-0
        ' >SHOP TRAVEL</button>
    </div>
  )
}

export default MidSection