import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const OrderModal = ({ product, quantity,modal }) => {
  const [user, loading, error] = useAuthState(auth);
  // console.log('modal',product,user);

  const handleBooking = (event) => {
    // console.log('clicked')
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    const order = {
      orderId: product?._id,
      product: product?.name,
      userEmail: user?.email,
      userName: user?.displayName,
      phone,
      address
    };
    // console.log(order);
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`order is place successfully for, ${product?.name}`);
        } else {
          toast.error(`'order is not placed' ${product?.name}`);
        }
        modal(false);
      });
  };
  console.log('model', product);
  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='font-bold text-lg text-slate-800 text-center'>
            Order Place For {product?.name}
          </h3>
          <form
            onSubmit={handleBooking}
            className='grid grid-cols-1 gap-3 justify-items-center mt-2'
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='input input-bordered w-full max-w-xs'
              disabled
              value={user?.displayName || ''}
            />
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='input input-bordered w-full max-w-xs'
              disabled
              value={user?.email || ''}
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='number'
              name='quantity'
              placeholder='quantity'
              disabled
              value={quantity ? quantity : ''}
              className='input input-bordered w-full max-w-xs'
            />
            

            <input
              type='text'
              name='address'
              placeholder='address'
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='submit'
              value='Submit'
              className='btn w-full max-w-xs'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
