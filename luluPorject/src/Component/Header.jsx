import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
   
  return (
    <>
      <div className='lg:block xl:block max-w-full m-auto bg-gray-50'>
        <a href="#" className="text-black mx-auto hover:underline flex justify-center ">Enjoy free express shipping and free returns. Learn More.</a>
        <nav className='hidden lg:block xl:block max-w-[1400px] m-auto py-4 '>
            <ul className='flex justify-end gap-4 items-center '>
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