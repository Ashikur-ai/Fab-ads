import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.png';
import { FaTelegram, FaWallet, FaWhatsapp } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className=" mx-auto flex justify-between  p-5 flex-col md:flex-row items-center">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  items-center text-base text-[var(--secondary-color)] justify-center ">
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Home</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Contact</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Privacy</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Terms Conditions</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Refund Policy</Link>
          {/* <Link className="mr-5 hover:text-gray-900 font-semibold flex items-center gap-2" href="#">0.0$ <FaWallet /></Link> */}
          {/* <Link className="mr-5 hover:text-gray-900 font-semibold text-2xl flex items-center gap-2" href="#"> <FaCartShopping /></Link> */}

        </nav>

        {/* logo  */}
        <div className=" md:mr-40">
          <Link className="flex font-bold items-center text-blue-600 md:mb-0">
            <div className="bg-white rounded-full shadow-sm mb-4">
              <img src={logo} alt="" className='w-12' />
            </div>
            <span className="ml-3 text-3xl">Fab-Ads</span>
          </Link>
       </div>

        {/* button  */}
        <div className=" flex-wrap gap-1 hidden md:flex">
          <div className="flex justify-center ">
            <button className="inline-flex text-black  bg-gray-200 border-0 py-2 px-2 md:px-4  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between">
              <FaTelegram className='text-xl' />
              Telegram
            </button>
          </div>

          <div className="flex justify-center ">
            <button className="inline-flex text-white  bg-[var(--primary-color)] border-0 py-2 px-2 md:px-4  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between">
              <FaWhatsapp className='text-xl' />
              Whatsapp
            </button>
          </div>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden -mt-12 ml-auto text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>


      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full min-h-screen bg-gray-100 py-2 px-4 transform transition-all duration-300 ease-in-out overflow-hidden 
    ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}
      >
        <nav className='flex flex-col space-y-4 text-2xl justify-center text-center items-center text-[var(--secondary-color)]'>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Home</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Contact</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Privacy</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Terms Conditions</Link>
          <Link className="mr-5 hover:text-gray-900 font-semibold" href="#">Refund Policy</Link>

          {/* <Link className="mr-5 hover:text-gray-900 font-semibold flex items-center gap-2" href="#">0.0$ <FaWallet /></Link> */}
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
