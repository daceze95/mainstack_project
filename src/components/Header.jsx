import React from 'react';
import ViewButton from './ViewButton.jsx';

const Header = ({ loggingUser }) => {
  return (
    <div className='py-4'>
      <header className='text-lg font-bold pb-4'>Dashboard</header>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <div className='mb-2 md:mb-0'>
            <h2 className='text-xl md:text-2xl font-semibold md:font-bold'>
              Good morning, {loggingUser} ⛅️
            </h2>
            <p className='block md:hidden text-gray-400 text-xs'>
              Check out your dashboard summary.
            </p>
          </div>
          <ViewButton>View analytics</ViewButton>
        </div>
        <p className='hidden md:block text-gray-400 text-sm'>
          Check out your dashboard summary.
        </p>
    </div>
  );
};

export default Header;
