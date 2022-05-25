import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const userData = {
      name: user.displayName,
      education: data.education,
      location: data.location,
      phone: data.phone,
    };
    console.log(userData);
    fetch(`http://localhost:5000/userProfile/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.upsertedCount > 0 || data?.modifiedCount > 0) {
          toast.success('Your Profile  Updated');
        } else {
          toast.error('Please try Again');
        }
      });
  };
  return (
    <div>
      <h1 className='text-center font-bold my-3'>
        My <span className='text-secondary'>ProFile</span>
      </h1>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content '>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name</span>
                  </label>
                  <input
                    value={user?.displayName}
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input value={user?.email} className='input input-bordered' />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Education</span>
                  </label>
                  <input
                    type='text'
                    {...register('education', {
                      required: true,
                    })}
                    placeholder='education'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Location</span>
                  </label>
                  <input
                    type='text'
                    {...register('location', {
                      required: true,
                    })}
                    placeholder='location'
                    className='input input-bordered'
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Phone Number</span>
                  </label>
                  <input
                    type='text'
                    {...register('phone', { required: true })}
                    placeholder='number'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control mt-6'>
                  <input
                    className='btn btn-secondary p-6 w-full max-w-xs text-white'
                    type='submit'
                    value='Review'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
