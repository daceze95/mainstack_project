import React from 'react';
import MenuItem from './MenuItem.jsx';
import {
  asideMenuItem,
  siteLogo,
  OthersOne,
  OthersTwo,
  loggingUserImage,
} from '../constant';

const Aside = ({ loggingUser }) => {

  return (
    <div>
      <>
        <div className='pt-4 pb-6 px-4'>
          <img src={siteLogo} alt='siteLogo' />
        </div>
        <div className=''>
          {asideMenuItem.map((item) => (
            <MenuItem
              text={item.text.toLowerCase()}
              icon={item.icon}
              key={item.text}
              route={item.url}
            />
          ))}
        </div>
        <div className=''>
          <p className='text-xs text-gray-400 px-6'>OTHERS 1</p>
          {OthersOne.map((item) => (
            <MenuItem
              text={item.text.toLowerCase()}
              icon={item.icon}
              key={item.text}
              route={item.url}
            />
          ))}
        </div>
        <div className=''>
          <p className='text-xs text-gray-400 px-6'>OTHERS 2</p>
          {OthersTwo.map((item) => (
            <MenuItem
              text={item.text.toLowerCase()}
              icon={item.icon}
              key={item.text}
              route={item.url}
            />
          ))}
        </div>
      </>
      <div className='flex items-center mt-24 px-6'>
        <div className=' mr-2  '>
          <img
            src={loggingUserImage}
            alt='user_image'
            className='w-9 h-9 rounded-full'
          />
        </div>
        <p className='text-sm'>{`${loggingUser} Daniels`}</p>
      </div>
    </div>
  );
};

export default Aside;
