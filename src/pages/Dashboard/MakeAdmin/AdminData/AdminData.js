import React from 'react';
import { toast } from 'react-toastify';
const AdminRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  // console.log('user', email,role);
  const makeAdmin = () => {
    fetch(`https://safe-temple-78272.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          return toast.error('failed to make an admin');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          // console.log(data);
          toast.success('Successfully make an admin');
        }
      });
  };
  const handleDelete = () => {
    // console.log('delete user');
    toast.info('Working in progress');
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className='btn btn-sm'>
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role !== 'admin' && (
          <button onClick={handleDelete} className='btn btn-slate-700 btn-sm'>
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdminRow;
