import React from 'react';
import { toast } from 'react-toastify';

const StatusUpdate = ({
  order,
  status,
  index,
  handleChange,
  setUpdated,
  updated,
}) => {
  console.log('order from status update', order);
  const handleDelete = (orderId) => {
    const processed = window.confirm('are you want to delete');
    if (processed) {
      fetch(`https://safe-temple-78272.herokuapp.com/manageOrders/${orderId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setUpdated(!updated);
            toast.success(`Order is deleted`);
          }
        });
    }
  };

  return (
    // {status==='shipped'?"shipped":"pending"}
    <tr>
      <th></th>
      <td>{order?.product}</td>
      <td>{order?.price}</td>
      <td>{order?.userName}</td>
      <td>
        {order?.paid ? (
          <span className='text-green-500 text-xl'>{order?.status}</span>
        ) : (
          <span className='text-red-500 text-xl'>unpaid</span>
        )}
      </td>
      <td>
        {order?.paid ? (
          <button
            onClick={() => handleChange(order._id, status)}
            className='btn btn-slate-800 btn-xs'
          >
            place order
          </button>
        ) : (
          <button
            onClick={() => handleDelete(order._id)}
            className='btn btn-error btn-xs'
          >
            Cancel Order
          </button>
        )}
      </td>
    </tr>
  );
};

export default StatusUpdate;
