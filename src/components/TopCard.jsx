import React from 'react';
import ViewButton from './ViewButton';

const TopCard = ({ title = 'Top title', result }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6600'];
  // const COLORS = ['colorCode1', 'colorCode2', 'colorCode3', 'colorCode4', 'colorCode5'];
  return (
    <div className='m-4'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-6'>
        <h2 className='text-xl md:text-lg font-semibold'>{title}</h2>
        <ViewButton>View full reports</ViewButton>
      </div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col'>
          {result.map((obj, index) => (
            <div
              className='flex items-center my-1'
              key={obj.country || obj.source}
            >
              {obj.flag ? (
                <div className='mr-2'>{obj.flag}</div>
              ) : (
                <div className='mr-2'>
                  <img
                    src={obj.icon}
                    alt='obj.icon'
                    width={'15px'}
                    height={'auto'}
                  />
                </div>
              )}
              <div className='text-xs mr-2'>
                {obj.country || obj.source} {obj.percent}%
              </div>
              <span
                className={`rounded-full w-2 h-2 bg-[${COLORS[index % COLORS.length]}]`}
              ></span>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default TopCard;
