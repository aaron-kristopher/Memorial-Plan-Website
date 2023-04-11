import React, { useState } from 'react'
import { GiAbstract020 } from 'react-icons/gi'

import { FaBars } from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-[var(--white)] mt-5'>
        <div className='flex items-center px-4'>
            <GiAbstract020 size={40} className='text-[var(--white)] mr-2'/>
            <h1 className='text-3xl font-bold text-[var(--white)]'>LIBING THINGS</h1>
        </div>
        <ul className='hidden sm:flex px-4'>
            <li className='text-xl'>
                <a href='/'>Home</a>
            </li>
            <li className='text-xl'>
                <a href='/about-us'>About Us</a>
            </li>
            <li className='text-xl'>
                <a href='/deals'>Deals</a>
            </li>
            <li className='text-xl'>
                <a href='/payment'>Payment</a>
            </li>
        </ul>
        

        {/* Hamburger icon */}
        
        <div className='sm:hidden z-10' onClick={handleNav}>
            <FaBars size={20} className='mr-4 cursor-pointer' />
        </div>

        {/* Mobile Menu */}

        <div 
            onClick={handleNav}
            className={nav 
                ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
            } 
        >
            <ul className='h-full w-full text-center pt-12'>
                <li className='text-2xl py-8'>
                    <a href='/'>Home</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/about-us'>About Us</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/deals'>Deals</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='/payment'>Payment</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar