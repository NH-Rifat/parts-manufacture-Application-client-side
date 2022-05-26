import React from 'react';
import Banner from './Banner/Banner';
import BrandLogo from './BrandLogo/BrandLogo';
import Products from './Products/Products';
import Review from './Review/Review';
import Summary from './Summary/Summary';
import WheelBanner from './WheelBanner/WheelBanner';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Products></Products>
      <BrandLogo></BrandLogo>
      <Summary></Summary>
      <WheelBanner></WheelBanner>
      <Review></Review>
    </div>
  );
};

export default Home;