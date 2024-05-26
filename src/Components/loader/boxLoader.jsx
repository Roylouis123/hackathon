import React from 'react';
import './boxLoader.css';

const BoxLoader = () => {
  return (
    <div className='loading-animation'>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
    </div>
  );
};

export default BoxLoader;