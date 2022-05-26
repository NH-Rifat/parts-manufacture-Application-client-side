import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
  const { name, _id } = deletingProduct;
  const handleDelete = () => {
    // const processed = window.confirm('are you want to delete');
    fetch(`https://safe-temple-78272.herokuapp.com/deleteService/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} is deleted`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type='checkbox' id='delete-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg '>
            Are you sure you want to delete this {name}!
          </h3>
          <p className='py-4'>
            when you sure about that click{' '}
            <span className='text-red-500'>DELETE</span> button
          </p>
          <div className='modal-action'>
            <button
              onClick={() => handleDelete()}
              className='btn btn-xs btn-slate-700'
            >
              Delete
            </button>
            <label for='delete-modal' className='btn btn-xs btn-slate-700'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
