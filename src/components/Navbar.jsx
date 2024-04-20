import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <nav className='bg-[#F2F2F2] text-[#262223] shadow-sm fixed top-0 left-0 right-0'>
        <div className=' flex justify-between container mx-auto p-3'>
            <div className='flex text-3xl items-center'>
                <FaLocationDot className='text-[#F2811D] '/>
                <h1 className=' font-extrabold'>LocationGuesser</h1>
            </div>
            <ul className='text-xl space-x-8 hidden  md:visible md:flex md:items-center'>
                <li className='p-2 hover:bg-[#dadada] rounded-xl'>
                    <button>Home</button>
                </li>
                <li className='p-2 hover:bg-[#dadada] rounded-xl'>
                    <button>About</button>
                </li>
                <li className='p-2 hover:bg-[#dadada] rounded-xl'>
                    <button>Search</button>
                </li>
            </ul>
            <div className='flex items-center text-3xl md:hidden '>
                <button className='hover:bg-[#dadada] rounded-xl p-2'>
                    <AiOutlineMenu className='text-[#F2811D]  '/>
                </button>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar