import React, { useEffect, useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className='d-flex justify-between items-center p-5 mt-11'>
      <h3 className='text-3xl font-bold text-center m-5'>
        <span className='text-4xl'>Customes </span>Reviews
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {reviews.map((review, index) => (
          <div key={index} className='card w-96 bg-slate-700 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>{review?.reviewData.username}</h2>
              <p>Rating: {review?.reviewData.rating}/5</p>
              <p>Review: {review?.reviewData.review}</p>

              <div className='card-actions justify-end'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
