import { useLocation } from 'react-router-dom';

import React from 'react';

const usePath = () => {
  const location = useLocation();
  let path = location.pathname;
  let pathArr = path.split('/')
  let pathName = pathArr[pathArr.length-1]
  return pathName;
};

export default usePath;
