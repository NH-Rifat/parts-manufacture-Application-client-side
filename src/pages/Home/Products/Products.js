import React, { useEffect, useState } from 'react';
import SingleProduct from './singleProduct/SingleProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Product length {products.length}</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
