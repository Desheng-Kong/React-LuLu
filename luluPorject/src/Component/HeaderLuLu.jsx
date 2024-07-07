import React from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import miniCart from '../assets/miniCart.png';
import heart from '../assets/heart.png';
import searchIcon from '../assets/search.png';

const HeaderLuLu = () => {
  return (
    <>
      <div className=' flex w-full bg-white flex-row items-center h-20 z-50 space-x-80'>
          <ul className='flex flex-1 space-x-14 items-center '>
            <img src={logo} className='h-16 cursor-pointer mb-1' />
            <li className='relative group'>
              <a href="#" className="text-black font-semibold">WOMEN</a>
              <span className="block w-full h-1 absolute bg-red-500 bg-opacity-0 group-hover:bg-opacity-100"></span>
            </li>
            <li className='relative group'>
              <a href="#" className="text-black font-semibold">MEN</a>
              <span className="block w-full h-1 absolute bg-red-500 bg-opacity-0 group-hover:bg-opacity-100"></span>
            </li>
            <li className='relative group'>
              <a href="#" className="text-black font-semibold">ACCESSORIES</a>
              <span className="block w-full h-1 absolute bg-red-500 bg-opacity-0 group-hover:bg-opacity-100"></span>
            </li>
            <li className='relative group'>
              <a href="#" className="text-black font-semibold">SHOES</a>
              <span className="block w-full h-1 absolute bg-red-500 bg-opacity-0 group-hover:bg-opacity-100"></span>
            </li>
            <li className='relative group'>
              <a href="#" className="text-black font-semibold">COMMUNITY</a>
              <span className="block w-full h-1 absolute bg-red-500 bg-opacity-0 group-hover:bg-opacity-100"></span>
            </li>
          </ul>
          <div className='flex justify-between items-center relative mr-6'>
            <img className='w-6 h-6 z-10 absolute left-2' src={searchIcon} />
            <div className='flex items-center space-x-14'>
              <input className='w-72 h-16 border-solid border px-10 border-black rounded-lg placeholder:text-gray-500 hover:placeholder:text-black' placeholder='Search gear, activity' />
              <a href='#'><img className='h-7 m-2'src={userIcon}/></a>
              <a href='#'><img className='h-7 m-2'src={heart}/></a>
              <a href='#'><img className='h-7 m-2'src={miniCart}/></a>
            </div>
          </div>
        </div>
    </>
  );
}

export default HeaderLuLu;