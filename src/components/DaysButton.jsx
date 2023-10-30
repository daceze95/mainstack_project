import React, { useState } from 'react';
import { numberOfDays } from '../constant';

const DaysButton = ({ retrieveTime }) => {
  const [state, setState] = useState('All Time');
  const style =
    'border m-2 md:mx-2 rounded-3xl py-1 px-4 text-center hover:cursor-pointer text-sm';
  return (
    <div className='pb-4'>
      {numberOfDays.map((day) => {
        if (typeof day === 'number') {
          return day > 1 ? (
            <button
              className={`${style} ${
                state === `${day} days`
                  ? 'bg-orange-100 border-orange-500'
                  : null
              }`}
              key={`number_${day}`}
              onClick={() =>
                retrieveTime(`${day} days`)(setState(`${day} days`))
              }
            >{`${day} days`}</button>
          ) : (
            <button
              className={`${style} ${
                state === `${day} day`
                  ? 'bg-orange-100 border-orange-500'
                  : null
              }`}
              key={`number_${day}`}
              onClick={() => retrieveTime(`${day} day`)(setState(`${day} day`))}
            >{`${day} day`}</button>
          );
        }
        return (
          <button
            className={`${style} ${
              state === `${day}` ? 'bg-orange-100 border-orange-500' : null
            }`}
            key={day}
            onClick={() => retrieveTime(day)(setState(day))}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};

export default DaysButton;
