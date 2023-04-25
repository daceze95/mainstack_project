import React from 'react';
import Aside from '../components/Aside.jsx';
import Main from '../components/Main.jsx';

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='hidden md:block md:w-1/6 border border-y-0 border-l-0 border-r-2 flex-grow'>
        <Aside />
      </div>
      <div className='text w-full md:w-5/6 flex-grow px-2 md:px-12'>
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
