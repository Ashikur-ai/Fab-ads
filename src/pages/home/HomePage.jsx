import React from 'react';
import Banner from '../../components/homepage/Banner';
import Payments from '../../components/homepage/Payments';
import Categories from '../../components/homepage/Categories';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Payments />
      <Categories/>
    </div>
  );
};

export default HomePage;