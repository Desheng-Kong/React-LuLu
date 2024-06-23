import React from 'react'
import logo from '../assets/logo.png'
import userIcon from'../assets/user.png'
import miniCart from'../assets/miniCart.png'
import heart from '../assets/heart.png'
const HeaderLuLu = () => {
  return (
    <>
     <div className='flex flex-row justify-between items-center
                  h-10 '>
      <div className='flex-initial flex justify-beween'>
            <img src={logo} className='w-20'></img>
            <button className='m-2 text-xs'>WOMEN</button>
            <button className='m-2 text-xs'>MEN</button>
            <button className='m-2 text-xs'>ACCESSORIES</button>
            <button className='m-2 text-xs'>SHOES</button>
            <button className='m-2 text-xs'>COMMUNITY</button>
      </div>
      <div className='flex-initial flex justify-between items-center'>
        <div className='flex-initial items-center flex'>
          <input className='w-30' placeholder='Search gear,activiy'/>
          <div className='flex-initial flex items-center'>
            <img className='h-7 m-2'src={userIcon}/>
            <img className='h-7 m-2'src={heart}/>
            <img className='h-7 m-2'src={miniCart}/>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderLuLu;