import React from 'react';
import { featuredProducts } from '../../libs/data/FeaturedProduct';
import { reinstate } from '../../libs/data/FeaturedProduct';

const FeaturedProduct = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 md:py-24 mx-auto">
          <div className="text-center">
            <p className="text-xl md:text-4xl font-semibold text-[var(--primary-color)]">Featured Accounts – Get Started Instantly!</p>
            <p className="text-sm">Browse our top-selling Facebook Ads accounts, verified and ready to use. Enjoy instant activation, high trust scores, and seamless ad approvals.</p>
          </div>

          {/* 1. VERIFIED BUSINESS MANAGERS */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">VERIFIED BUSINESS MANAGERS</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {/* 2. VERIFIED/UNVERIFIED BUSINESS MANAGERS (DM1) */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">VERIFIED/UNVERIFIED BUSINESS MANAGERS (DM1)</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>


          {/* 3. FACEBOOK ACCOUNTS */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">FACEBOOK ACCOUNTS</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          {/* 4. HIGH LIMIT PERSONAL ADS ACCOUNTS */}

          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">HIGH LIMIT PERSONAL ADS ACCOUNTS</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
         

          {/* 5.REINSTATE ACCOUNTS (ARI-2LINE) */}

          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">REINSTATE ACCOUNTS (ARI-2LINE)</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
         

         

         

          {/* 6. DOUBLE REINSTATED ACCOUNTS (SARI-3LINE) */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">DOUBLE REINSTATED ACCOUNTS (SARI-3LINE)</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>



         

          {/* 7. Whatsapp API Approve Business Managers*/}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">Whatsapp API Approve Business Managers</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          {/*8. VERIFIED / UNVERIFIED BUSINESS MANAGERS (BM5 = 5 & 10 Ad Account) */}

          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">VERIFIED / UNVERIFIED BUSINESS MANAGERS (BM5 = 5 & 10 Ad Account)</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          
          {/* 9. {High Threshold Facebook Ad Account  } */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">High Threshold Facebook Ad Account</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          {/* 10. Facebook fanpages */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl">Facebook fanpages</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          {/* 11. instagram account */}
          <div class="my-10 w-full mx-auto overflow-auto">
            <p className="text-center bg-[var(--secondary-color)] text-white py-2 md:text-2xl font-bold rounded-t-2xl uppercase">instagram account</p>

            <div className="">
              {
                featuredProducts?.map(item =>
                  <div key={item?.id} className='border-b pb-2 border-gray-300 transform transition-all delay-100 duration-150 hover:bg-[var(--primary-color)] hover:text-white flex flex-col md:flex-row  items-center justify-around'>
                    <div class="px-4 py-3 w-full md:w-[80%]">
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <img src={item?.icon} className='md:w-12 w-16 md:flex ' alt="" />
                        </div>
                        <div className="">
                          <p className="">{item?.title}</p>
                          <p className="text-xs">{item?.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full  md:w-[20%]'>
                      <button className='w-full rounded-lg bg-[var(--secondary-color)] text-white md:p-3 text-[12px] py-3 px-4 md:text-[16px]'>Learn More</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>



        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;