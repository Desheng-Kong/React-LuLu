import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
   
  return (
    <>
      <div className='max-w-[1600px] mx-auto bg-gray-50'>
        <a href="#" className="text-black mx-auto hover:underline flex justify-center ">Enjoy free express shipping and free returns. Learn More.</a>
        <nav className='max-w-[1400px] mx-auto mt-7 grid grid-cols-1 px-4 py-5 '>
            
            <ul className='grid grid-cols-5 '>
              <li className=''>
                <a href="#" className="text-black">Track Order</a>
              </li>
              <li className=''>
                <a href="#" className="text-black">Gift Cards</a>
              </li>
              <li className=''>
                <a href="#" className="text-black">Email Signup</a>
              </li>
              <li className=''>
                <a href="#" className="text-black">Stores</a>
              </li>
              <li className=''>
                <SlLocationPin size={20} className='inline'/>
                <a href="#" className="text-black">Australia (AUD)<RiArrowDropDownLine className='inline-block'size={36}/></a>
              </li>
            </ul>
          </nav>
      </div>
    </>
  );
}

export default Header;