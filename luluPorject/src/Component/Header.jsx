import React from 'react';
import HeaderLuLu from './HeaderLuLu';
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
   
  return (
    <>
      <div className=' top-0 z-30 flex flex-row items-center bg-gray-100 h-20 gap-x-96 '>
        {/* THE LEFT PART */}
        <a href="#" className="text-black hover:underline">Enjoy free express shipping and free returns. Learn More.</a>
        {/* THE RIGHT PART */}
        <div className='flex-initial'>
          <div className='flex justify-between items-center'>
            <nav className=''>
              <ul className='flex space-x-6'>
                <li className='relative group'>
                  <a href="#" className="text-black">Track Order</a>
                  <span className="block w-full h-1 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"></span>
                </li>
                <li className='relative group'>
                  <a href="#" className="text-black">Gift Cards</a>
                  <span className="block w-full h-1 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"></span>
                </li>
                <li className='relative group'>
                  <a href="#" className="text-black">Email Signup</a>
                  <span className="block w-full h-1 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"></span>
                </li>
                <li className='relative group'>
                  <a href="#" className="text-black">Stores</a>
                  <span className="block w-full h-1 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"></span>
                </li>
              </ul>
            </nav>
            <div className='flex-initial'>
              <div className='flex items-center cursor-pointer'>
                <SlLocationPin size={20} className='mr-2'/>
                <p className='m-1'>Australia (AUD)<RiArrowDropDownLine className='inline-block'size={36}/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;