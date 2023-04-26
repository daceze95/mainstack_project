import React from 'react';
import Header from '../components/Header.jsx';
import { loggingUser } from '../constant/index.js';
import Graph from './Graph.jsx';
import Top from './Top.jsx';

const Main = () => {
  return (
    <div>
      <Header loggingUser={loggingUser} />
      <Graph />
      <Top/>
    </div>
  );
};

export default Main;
