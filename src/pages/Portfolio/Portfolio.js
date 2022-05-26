import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl m-5'>
        My <span className='text-slate-800'>ProtFolio</span>
      </h1>
      <div className='p-5 flex justify-center items-center'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Name: Hasan Rifat</h2>
            <h2 className='card-title'>Email: hasanrifatr1@gmail.com</h2>
            <p>
              <span className='text-xl font-bold'>Education</span>:Bsc in
              Computer Science and Engineering
            </p>
            <p>
              <span className='text-xl font-bold'>Institution</span>: United
              International University
            </p>
            <div className='card-actions '>
              <p>
                <span className='text-xl font-bold mb-5'>My Best project</span>:{' '}
                <span>
                  <a
                    href='https://car-dealer-407f1.web.app/
'
                  >
                    Car Dealer Application
                  </a>
                </span>
                <br />
                <span>
                  <a
                    href='https://travel-guide-4388b.web.app/
'
                  >
                    Travel Guide
                  </a>
                </span>
                <br />
              </p>
              <p>
                <span className='text-xl font-bold'>Github</span>:{' '}
                <a
                  href='https://github.com/NH-Rifat
'
                >
                  https://github.com/NH-Rifat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
