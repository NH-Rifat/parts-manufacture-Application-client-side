import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Summary from './Summary/Summary';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>

    </div>
  );
};

export default Home;