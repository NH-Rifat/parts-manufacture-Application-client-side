import React from 'react';
import wheel from '../../../images/wheels.webp';

const WheelBanner = () => {
  return (
    <div className='grid grid-cols-2 mt-48 w-3/4 mx-auto items-center'>
      <div className=''>
        <img src={wheel} alt='' />
      </div>
      <div className=''>
        <h1 className='text-5xl font-bold mb-4'>FLASH DEALS</h1>
        <h1 className='text-5xl font-bold mb-4'>HURRY UP AND GET 25% DISCOUNT</h1>
        <button className='btn text-lg'>Take Hurry</button>

      </div>
    </div>
  );
};

export default WheelBanner;
