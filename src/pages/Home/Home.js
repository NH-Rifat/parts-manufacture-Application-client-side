import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Review from './Review/Review';
import Summary from './Summary/Summary';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>
      <Review></Review>
    </div>
  );
};

export default Home;