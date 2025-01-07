import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Adjust the path based on where your CSS file is stored

const Header = () => {
    return (
        <div className='bg-grey header'>
            <div className="flex justify-between px-3 py-14 leading-4 logo-text text-white">
                <Link to='/' aria-label='visit homepage' className='text-base font-semibold logo-link'>
                    <span>&#169; </span>
                    <span>Code by </span>
                    <span>
                        <span>Puspa </span>
                        <span className='absolute whitespace-nowrap overflow-hidden translate-x-2'>Nevas</span>
                    </span>
                </Link>

                <a href='#' className='relative flex md:hidden lg:hidden menu-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="relative size-6 z-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    <span className='menu-bg absolute inset-0 flex justify-center items-center -z-10'>
                        <svg height={60} width={60}>
                            <circle r={30} cx={30} cy={30} fill='orange'></circle>
                        </svg>
                    </span>
                </a>

                <div className="hidden space-x-3 md:block">
                    <a href="#" aria-label="Go to Work section">Work</a>
                    <a href="#" aria-label="Go to About section">About</a>
                    <a href="#" aria-label="Go to Contact section">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
