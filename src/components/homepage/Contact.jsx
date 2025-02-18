import React from 'react';
import contactImg from '@/assets/images/contact.avif';
import { FaDiscord, FaSkype, FaTelegram, FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <div className="">
          <div className="">
            <p className="text-3xl md:text-7xl text-center md:text-left font-bold">
              Contact Our Support Team
            </p>
            <div className="flex flex-wrap gap-1 my-5 ml-12 lg:ml-0">
              <div className="flex justify-center">
                <button className="inline-flex text-white  bg-[var(--secondary-color)] border-0 py-2 px-2 md:px-4  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between">
                  <FaTelegram className='text-xl' />
                  Telegram
                </button>
              </div>

              <div className="flex justify-center ">
                <button className="inline-flex text-white  bg-[var(--secondary-color)] border-0 py-2 px-2 md:px-4  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between">
                  <FaWhatsapp className='text-xl' />
                  Whatsapp
                </button>
              </div>

              <div className="flex justify-center ">
                <button className="inline-flex text-white  bg-[var(--secondary-color)] border-0 py-2 px-4 md:px-4  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between ">
                  <FaDiscord className='text-xl' />
                  Discord
                </button>
              </div>

              <div className="flex justify-center ">
                <button className="inline-flex text-white  bg-[var(--secondary-color)] border-0 py-2 px-7 md:px-7  focus:outline-none hover:bg-indigo-600 rounded-xl text-[16px] items-center gap-2 justify-between">
                  <FaSkype className='text-xl' />
                  Skype
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;