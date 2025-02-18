import React from 'react';
import Banner from '../../components/homepage/Banner';
import Payments from '../../components/homepage/Payments';
import Categories from '../../components/homepage/Categories';
import FeaturedProduct from '../../components/homepage/FeaturedProduct';
import WhyBest from '../../components/homepage/WhyBest';
import Faq from '../../components/homepage/Faq';
import Contact from '../../components/homepage/Contact';

const HomePage = () => {
  return (
    <div>
      <div className="w-10/12  mx-auto">
        <Banner />
      </div>

      <Payments />
      <div className="w-11/12 mx-auto">
        <Categories />
        <FeaturedProduct />
        <WhyBest />
        <Faq />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;