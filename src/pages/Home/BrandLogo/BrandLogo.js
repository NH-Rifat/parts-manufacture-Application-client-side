import React from 'react';
import brand1 from '../../../images/brand-1.webp'
import brand2 from '../../../images/brand-2.webp'
import brand3 from '../../../images/brand-3.webp'
import brand4 from '../../../images/brand-4.webp'
import brand5 from '../../../images/brand-5.webp'

const BrandLogo = () => {
  return (
    <div className='mt-24'>
      <h1 className='text-4xl font-bold text-center mb-14'>our services on Brand</h1>
      <div className="grid grid-cols-5">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
    </div>
  );
};

export default BrandLogo;