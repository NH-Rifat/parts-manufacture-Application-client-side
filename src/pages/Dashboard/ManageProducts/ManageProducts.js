import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ProductsRow from './ProductsRow'
import DeleteModal from './DeleteModal'

const ManageProduct = () => {
  // const [allProduct, setAllProduct] = useState([]);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery('products', () =>
    fetch('http://localhost:5000/manageservice', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <h2 className='text-2xl'>Manage Products: {products.length}</h2>
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <ProductsRow
                  key={index}
                  product={product}
                  index={index}
                  refetch={refetch}
                  setDeletingProduct={setDeletingProduct}
                ></ProductsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
