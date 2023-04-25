import React, {useState} from 'react'

const MenuItem = ({icon, text}) => {
    const [state, setState]= useState(false);
  return (
    <div className={`flex items-center my-4 px-4 border-y-0 border-r-0 border-l-2 ${state ? 'border-mainStackOrange' : null}`}>
      <p className='mr-4'>
        <img src={icon} alt={text} width={'20px'} height={'auto'}/>
      </p>
      <p>{text}</p>
    </div>
  );
}

export default MenuItem