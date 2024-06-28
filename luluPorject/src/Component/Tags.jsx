import React from 'react'
import { useState } from 'react'


const Tags = () => {

    const [name,setName] =useState('undefined');

    function handleName()
    {
        setName(name)
    }

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li className="relative group">
          <a href="#" className="text-white">Home</a>
          <span className="block w-full h-0.5 bg-white absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </li>
        <li className="relative group">
          <a href="#" className="text-white">About</a>
          <span className="block w-full h-0.5 bg-white absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </li>
        <li className="relative group">
          <a href="#" className="text-white">Services</a>
          <span className="block w-full h-0.5 bg-white absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </li>
        <li className="relative group">
          <a href="#" className="text-white">Contact</a>
          <span className="block w-full h-0.5 bg-white absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </li>
      </ul>
    </nav>
  )
}

export default Tags