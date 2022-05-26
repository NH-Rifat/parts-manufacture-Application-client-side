import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      username: user?.displayName,
      userEmail: user?.email,
      ...data,
    };
    fetch('https://safe-temple-78272.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ reviewData }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success('Review Posted Successfully');
        } else {
          toast.error('Please try Again');
        }
      });
  };
  return (
    <div>
      <h1 className='text-center my-3 text-3xl font-semibold'>
        Write <span className='text-slate-700'>Your Review</span>
      </h1>
      <div className='hero p-24 bg-base-200'>
        <div className='hero-content '>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Raiting</span>
                  </label>
                  <input
                    type='number'
                    {...register('rating', {
                      required: true,
                      max: 5,
                      min: 0,
                    })}
                    step='0.1'
                    placeholder='Rating in 5'
                    className='input input-bordered'
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Review</span>
                  </label>
                  <textarea
                    type='text'
                    {...register('review', { required: true })}
                    placeholder='Write Review'
                    style={{ height: '100px' }}
                  />
                </div>
                <div className='form-control mt-6'>
                  <input
                    className='btn btn-slate-700 p-6 w-full max-w-xs text-white'
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

export default AddReview;
