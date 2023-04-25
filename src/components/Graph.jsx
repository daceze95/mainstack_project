import React from 'react';
import Days from './DaysButton.jsx';

const Graph = () => {
  return (
    <>
      <Days />
      <div className='border rounded-xl p-4'>
        <>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold'>Page views</h3>
            <span className='hidden md:block'>help</span>
          </div>
          <p className='text-sm text-gray-400'>All Time</p>
        </>
      </div>
    </>
  );
};

export default Graph;
