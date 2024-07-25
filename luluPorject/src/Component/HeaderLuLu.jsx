import React from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import miniCart from '../assets/miniCart.png';
import heart from '../assets/heart.png';
import searchIcon from '../assets/search.png';
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderLuLu = () => {
  return (
    <div className='xl:max-w-[full] bg-gray-50 m-auto'>
      <div className='xl:grid grid-cols-1 gap-[64px] max-w-[1380px] m-auto px-[15px] py-[10px] mt-[10px] items-center'>
        <div className='lg:flex justify-between items-center gap-4 sm:grid grid-cols-3 grid-rows-2'>
          {/* 左侧菜单图标和Logo */}
          
          {/* md:1024-768 */}
          <GiHamburgerMenu className='xl:hidden lg:hidden md:inline-block sm:hidden'/>
          <img src={logo} className='md:block m-auto sm:hidden'/>

           {/* sm:768-640 */}
          <div className='md:hidden sm:block col-span-2'>
            <GiHamburgerMenu className='inline-block'/>
            <img src={logo} className='sm:inline-block'/>
          </div>
          {/* xs:640-??? 还没弄 */}

          {/* 中间导航菜单 */}
          <ul className='hidden lg:flex xl:items-center gap-[28px] flex-grow text-sm font-semibold'>
            <li><a href="#" >WOMEN</a></li>
            <li><a href="#" >MEN</a></li>
            <li><a href="#" >ACCESSORIES</a></li>
            <li><a href="#" >SHOES</a></li>
            <li><a href="#" >COMMUNITY</a></li>
          </ul>

          {/* 搜索框 */}
          <div className='relative flex-grow xl:max-w-[256px] sm:col-start-1 row-start-2 col-span-3 '>
            <img className='absolute top-[16px] left-[10px] max-w-5 max-h-6 z-10' src={searchIcon} alt="search icon" />
            <input className='w-full pl-[35px] py-[12px] border-solid border border-black rounded-lg placeholder:text-gray-500 hover:placeholder:text-black' placeholder='Search gear, activity' />
          </div>

          {/* 右侧图标 */}
          <div className='flex justify-center gap-8 sm:justify-end'>
            <a href='#'><img className='max-w-6' src={userIcon}/></a>
            <a href='#'><img className='max-w-6' src={heart}/></a>
            <a href='#'><img className='max-w-6' src={miniCart}/></a>
          </div>
        </div>
      </div>  
    </div>
    
  );
}

/*
const HeaderLuLu = () => {
  return (
    <>
      <div className=' flex w-full bg-white flex-row items-center h-20 z-50 space-x-80'>
          <ul className='flex flex-1 space-x-14 items-center '>
            <img src={logo} className='h-16 cursor-pointer mb-1' />
            <li className=''>
              <a href="#" className="">WOMEN</a>
              
            </li>
            <li className=''>
              <a href="#" className="">MEN</a>
              
            </li>
            <li className=''>
              <a href="#" className="">ACCESSORIES</a>
              
            </li>
            <li className=''>
              <a href="#" className="">SHOES</a>
              
            </li>
            <li className=''>
              <a href="#" className="">COMMUNITY</a>
              
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
*/

export default HeaderLuLu;