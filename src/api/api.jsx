import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { endPoint } from '../constant/index.js';

export const fetchData = () => {
//   const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(
    <div className='w-full flex items-center justify-center font-semibold'>
      Loading...
    </div>
  );

   const getData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(endPoint);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    }, []);

  return data ? data : loading;
};

export default fetchData;
