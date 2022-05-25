import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import OrderModal from './OrderModal';

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [modal,setModal] = useState(true,)

  const [user] = useAuthState(auth);
  // console.log(user);

  const handleMin = () => {
    setQuantity(quantity - 1);
  };

  const handleMax = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/item/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuantity(data.minQuantity);
        setProduct(data);
      });
  }, []);

  // console.log(product);

  // const {
  //   data: product,
  //   isLoading,
  //   refetch,
  // } = useQuery(['product', productId], () =>
  //   fetch(`http://localhost:5000/item/${productId}`).then((res) => {
  //     // setQuantity()
  //     // console.log(product);
  //     return res.json();
  //   })
  // );

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  // if(product){
  //   setQuantity(product.minQuantity);
  // }
  // console.log(minquantity);

  const { name, image, des, price, minQuantity, available } = product;
  // console.log(product);
  return (
    <div className='grid grid-cols-2 gap-10'>
      <div class='card max-w-full p-40 bg-base-100 border'>
        <figure class='px-10 pt-10'>
          <img src={image} alt='Shoes' class='rounded-none' />
        </figure>
      </div>
      <div className=''>
        <h1 className='text-5xl'>{name}</h1>
        <p className='text-3xl font-semibold'>
          price: <span className='text-slate-700 font-normal'>${price}</span>
        </p>
        <p className='text-xl pt-10'>{des}</p>

        <div className='mt-20'>
          {quantity >= minQuantity ? (
            <button class='btn' onClick={handleMin}>
              --
            </button>
          ) : (
            <button class='btn' disabled>
              --
            </button>
          )}
          <button className='btn m-3'>{quantity}</button>
          {quantity < available ? (
            <button class='btn' onClick={handleMax}>
              +
            </button>
          ) : (
            <button class='btn' disabled>
              +
            </button>
          )}
          <label  for='my-modal-3' className='btn ml-8'>
            order now
          </label>
          {
            (quantity>= minQuantity || quantity < available)&& modal?<OrderModal
            product={product}
            quantity={quantity}
            modal={modal}
            ></OrderModal>:''
          }
        </div>
      </div>
    </div>
  );
};

export default Purchase;
