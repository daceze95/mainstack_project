import React, {useState} from 'react'

const MenuItem = ({icon, text}) => {
    const [state, setState]= useState(false);
  return (
    <div
      className={`flex items-center my-4 border-y-0 border-r-0 ${
        state ? 'border-l-2 border-mainStackOrange' : null
      }`}
    >
      <p className='mr-4'>
        <img src={icon} alt={text} width={'15px'} height={'auto'} />
      </p>
      <p>{text}</p>
    </div>
  );
}

export default MenuItem