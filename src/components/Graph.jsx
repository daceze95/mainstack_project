import React, { useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import DaysButton from './DaysButton.jsx';
import { help as hint } from '../constant';
import GraphPlot from './GraphPlot.jsx';
import FetchData from '../api/api.jsx';

const Graph = () => {
  const [getTime, setGetTime] = useState('All Time')
  function retrieveTime(time){
    setGetTime(time)
  }
  return (
    <div className='hidden md:block'>
      <DaysButton retrieveTime={retrieveTime} />
      <div className='border rounded-xl p-4'>
        <>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold'>Page views</h3>
            <span className='hidden md:block'>
              <img src={hint} alt='hint' />
            </span>
          </div>
          <p className='text-sm text-gray-400'>{getTime}</p>
        </>
        <div className='text-3xl font-semibold my-2'>500</div>
        <GraphPlot />
        <div><FetchData/></div>
      </div>
    </div>
  );
};

export default Graph;
