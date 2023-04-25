import React from 'react';
import { numberOfDays } from '../constant';

const Days = () => {
    const style =
      'border m-2 md:mx-2 rounded-3xl py-2 px-4 text-center hover:cursor-pointer text-sm';
  return (
    <div className='pb-4'>
      {numberOfDays.map((day) => {
        if (typeof day === 'number') {
         return  day > 1 ? (
              <button className={style}>{`${day} days`}</button>
            ) : (
              <button className={style}>{`${day} day`}</button>
            );
        }
        return (
          <button className={style}>
            {day}
          </button>
        );
      })}
    </div>
  );
};

export default Days;
