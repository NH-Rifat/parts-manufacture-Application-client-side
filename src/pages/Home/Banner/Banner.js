import React from 'react';
import banner from '../../../images/car-banner.jpg';

const Banner = () => {
  return (
    <div className='mb-28'>
      <div
        style={{
          background: `url(${banner})`,
          backgroundSize: 'cover',
        }}
        className='hero min-h-screen'
      >
        <div class='hero-overlay bg-opacity-60'></div>
        <div class='hero-content text-center text-neutral-content'>
          <div class='max-w-md'>
            <h1 class='mb-5 text-5xl font-bold'>Hello there</h1>
            <p class='mb-5'>
              Enjoy an entirely new level of driving experience with our
              in-depth selection of superior car bulbs, brake pads, spark plugs,
              and other automotive parts and accessories designed to keep your
              car running as its absolute best
            </p>
            <button class='btn btn-slate-800'>Let's Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
