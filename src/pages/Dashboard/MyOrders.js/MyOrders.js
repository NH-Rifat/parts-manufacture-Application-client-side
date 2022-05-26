import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://safe-temple-78272.herokuapp.com/orders?email=${user.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
        .then((res) => {
          // console.log('res',res);
          if (res.status === 401 || res.status === 403) {
            navigate('/');
            signOut(auth);
            localStorage.removeItem('accessToken');
          }

          return res.json();
        })
        .then((data) => {
          setMyOrders(data);
          console.log(data);
        });
    }
  }, [user, navigate]);
  const orderDelete = (id) => {
    const processed = window.confirm('Do you want to delete the product?');
    if (processed) {
      fetch(`https://safe-temple-78272.herokuapp.com/deleteOrder/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainOrder = myOrders.filter((order) => order._id !== id);
            setMyOrders(remainOrder);
          }
        });
    }
  };

  return (
    <div className=''>
      <div className='mb-3 mt-6'>
        <h2 className='mb-2 text-xl text-2xl font-semibold'>
          My total
          <span className='text-slate-700'>
            {' '}
            Ordered items :{myOrders.length}
          </span>
        </h2>
        <hr />
      </div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.length > 0 ? (
              myOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order?.product}</td>
                  <td>{order?.price}</td>
                  <td>
                    {order?.price && !order?.paid && (
                      <Link to={`/dashboard/payment/${order?._id}`}>
                        <button className='btn btn-sm btn-slate-700'>
                          pay
                        </button>
                      </Link>
                    )}
                    {order?.price && order?.paid && (
                      <div>
                        <p>
                          <span className='text-slate-700'>Paid</span>
                        </p>
                        <p>
                          Transaction id:{' '}
                          <span className='text-success'>
                            {order.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                  <td>
                    {order?.price && !order?.paid && (
                      <span
                        style={{ fontSize: '24px' }}
                        onClick={() => orderDelete(order._id)}
                      >
                        <MdDelete />
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center'>
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
