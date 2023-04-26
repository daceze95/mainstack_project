import React from 'react';
import MenuItem from './MenuItem.jsx';
import { asideMenuItem, siteLogo, OthersOne, OthersTwo } from '../constant';

const Aside = () => {
  return (
    <div>
      <div className='pt-4 pb-6 px-4'>
        <img src={siteLogo} alt='siteLogo' />
      </div>
      <div className='px-6'>
        {asideMenuItem.map((item) => (
          <MenuItem text={item.text} icon={item.icon} />
        ))}
      </div>
      <div className='px-6'>
        <p className='text-xs text-gray-400'>OTHERS 1</p>
        {OthersOne.map((item) => (
          <MenuItem text={item.text} icon={item.icon} />
        ))}
      </div>
      <div className='px-6'>
        <p className='text-xs text-gray-400'>OTHERS 2</p>
        {OthersTwo.map((item) => (
          <MenuItem text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Aside;
