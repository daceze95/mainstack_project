import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePath from '../hooks/usePath.js';

const MenuItem = ({ icon, text, route }) => {
  const [state, setState] = useState(()=>usePath());

  return (
    <Link to={`/dashboard/${route}`}>
      <div
        className={`flex items-center my-4 px-6 hover:cursor-pointer  border-y-0 border-r-0 ${
          state === text ? 'border-4 border-l-mainStackOrange' : null
        } `}
      >
        <p className='mr-4'>
          <img src={icon} alt={text} width={'15px'} height={'auto'} />
        </p>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
