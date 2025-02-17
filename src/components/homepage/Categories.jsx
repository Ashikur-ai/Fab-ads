import React from 'react';

import categories from '../../libs/data/CategoryArray';

const Categories = () => {
  return (
    <div className='mt-10 md:mt-36'>
      <div className="text-center">
        <p className="text-xl md:text-4xl font-semibold text-[var(--primary-color)]">Find the Perfect Account for Your Needs!</p>
        <p className="text-sm">Choose from our wide range of verified and reinstated accounts to get started instantly.</p>
      </div>

      <div className="grid my-5 grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {
          categories?.map((item) => (
            <div
              key={item?.id}
              className="bg-white shadow-sm md:px-5 px-1 rounded-lg border-2 border-purple-600 md:py-5 hover:bg-[var(--primary-color)]  hover:text-white hover:shadow-lg flex gap-2 items-center transform transition ease-in-out delay-100 duration-200 hover:scale-105">
              <img src={item?.icon} className='w-6 md:w-12' alt="" />
              <p className="text-[8px] md:text-sm  my-2 md:font-semibold">{item?.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;