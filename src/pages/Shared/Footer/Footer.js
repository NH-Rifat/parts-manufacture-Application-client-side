import React from 'react';

const Footer = () => {
  return (
    <div className='mt-12'>
      <footer class='footer p-10 bg-slate-700 text-base-content'>
        <div>
          <span class='footer-title text-white'>Services</span>
          <a class='link link-hover text-white'>Branding</a>
          <a class='link link-hover text-white'>Design</a>
          <a class='link link-hover text-white'>Marketing</a>
          <a class='link link-hover text-white'>Advertisement</a>
        </div>
        <div className='text-white'>
          <span class='footer-title'>Company</span>
          <a class='link link-hover'>About us</a>
          <a class='link link-hover'>Contact</a>
          <a class='link link-hover'>Jobs</a>
          <a class='link link-hover'>Press kit</a>
        </div>
        <div className='text-white'>
          <span class='footer-title'>Legal</span>
          <a class='link link-hover'>Terms of use</a>
          <a class='link link-hover'>Privacy policy</a>
          <a class='link link-hover'>Cookie policy</a>
        </div>
        <div >
          <span class='footer-title text-white'>Newsletter</span>
          <div class='form-control w-80'>
            <label class='label'>
              <span class='label-text text-white'>Enter your email address</span>
            </label>
            <div class='relative'>
              <input
                type='text'
                placeholder='username@site.com'
                class='input input-bordered w-full pr-16'
              />
              <button class='btn btn-zinc-600 absolute top-0 right-0 rounded-l-none'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
