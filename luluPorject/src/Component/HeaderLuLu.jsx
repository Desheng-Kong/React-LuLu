import React from 'react'
import logo from '../assets/logo.png'
import userIcon from'../assets/user.png'
import miniCart from'../assets/miniCart.png'
import heart from '../assets/heart.png'
import searchIcon from '../assets/search.png'
const HeaderLuLu = () => {
  return (
    <>
     <div className='flex flex-row justify-between items-center
                  h-20'>
      <div className='flex-initial flex justify-beween'>
            <img src={logo} className='w-32 cursor-pointer mb-1'></img>
            <button className='m-4 text-xs font-bold'>WOMEN</button>
            <button className='m-4 text-xs font-bold'>MEN</button>
            <button className='m-4 text-xs font-bold'>ACCESSORIES</button>
            <button className='m-4 text-xs font-bold'>SHOES</button>
            <button className='m-4 text-xs font-bold'>COMMUNITY</button>
      </div>
      <div className='flex-initial flex justify-between items-center'>
        <div className='flex-initial items-center flex'>
          <img className='w-5 -mr-6 z-10' src={searchIcon}/>
          <input className='w-30 px-6 py-3  border-solid border border-black rounded' placeholder='Search gear,activiy'/>
          <div className='flex-initial flex items-center'>
            <img className='h-7 m-2 cursor-pointer'src={userIcon}/>
            <img className='h-7 m-2 cursor-pointer'src={heart}/>
            <img className='h-7 m-2 cursor-pointer'src={miniCart}/>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderLuLu;