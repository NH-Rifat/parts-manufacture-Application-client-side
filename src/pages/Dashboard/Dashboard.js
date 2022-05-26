import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content text-center'>
        <h2 className='text-2xl font-bold text-purple-500'>
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/addReview'>Add Reviews</Link>
          </li>
          <li>
            <Link to='/dashboard/myProfile'>My Profile</Link>
          </li>
          <li>
            <Link to='/dashboard/makeAdmin'>Make Admin</Link>
          </li>
          <li>
            <Link to='/dashboard/manageProducts'>Manage Products</Link>
          </li>
          <li>
            <Link to='/dashboard/manageAllOrder'>Manage All Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
