import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
  const {productId} = useParams();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(['product',productId], () =>
    fetch(`http://localhost:5000/item/${productId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(product);

  return (
    <div>
      <h1>product id {productId}</h1>
    </div>
  );
};

export default Purchase;