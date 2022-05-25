import React from 'react';

const SingleProduct = ({ product }) => {
  console.log(product);
  const { name, image, des, minQuantity, available, price } = product;
  console.log(name, image, des, minQuantity, available, price);
  return (
    <div class='card w-96 bg-base-100 shadow-xl'>
      <div class='card-body'>
        <div class='card-actions justify-between'>
          <div class='badge badge-outline'>min quantity: {minQuantity}</div>
          <div class='badge badge-outline'>Available: {available}</div>
        </div>
      </div>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div class='card-body'>
        <div className='flex items-center mb-4'>
          <h2 class='card-title'>{name}</h2>
          <p className='ml-28 text-lg border border-slate-900 rounded-md text-center'>price: {price}$</p>
        </div>
        <p className=' mb-4'>{des ? des.slice(0, 100) : 'description not available'}</p>
        <button className='btn btn-primary hover:bg-slate-800 hover:text-white'>Order Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;
