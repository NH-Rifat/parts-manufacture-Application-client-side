import React, { useEffect, useState } from 'react';
import SingleProduct from './singleProduct/SingleProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://safe-temple-78272.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className=' text-center mb-12'>
        <h1 className='text-3xl font-semibold'>ALL OF OUR PRODUCTS</h1>
        <p className='mt-6'>
          All best seller product are now available for you and your can buy
        </p>
        <p>this product from here any time any where so sop now</p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
