import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fe-task-api.mainstack.io/');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const graphData = data.graph_data.views;
  const graphDataArray = Object.entries(graphData).map(([date, count]) => ({
    date,
    count,
  }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6600'];
  // [colorCode1, colorCode2, colorCode3, colorCode4, colorCode5];

  return (
    <div>
      {data.graph_data ? (
        <div>
          <AreaChart width={600} height={400} data={graphDataArray}>
            <XAxis dataKey='date' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='count'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </div>
      ) : null}
      <div className='flex mx-2'>
        <div className='mx-2'>
          {data.top_locations ? (
            <div className='flex'>
              <div className=''>
                {data.top_locations.map((item, index) => (
                  <div className='flex items-center' key={item.country}>
                    <div>{`${item.country} ${item.count} ${item.percent}% `}</div>
                    <div
                      className={`rounded-full w-2 h-2 ml-2 bg-[${
                        COLORS[index % COLORS.length]
                      }]`}
                    ></div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center items-center'>
                <PieChart width={300} height={400}>
                  <Pie
                    dataKey='count'
                    data={data.top_locations}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                  >
                    {data.top_locations.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </div>
            </div>
          ) : null}
        </div>
        <div className='mx-2'>
          {data.top_sources ? (
            <div className='flex'>
              <div>
                {data.top_sources.map((item, index) => (
                  <div className='flex items-center' key={item.source}>
                    <div>{`${item.source} ${item.count} ${item.percent}% `}</div>
                    <div
                      className={`rounded-full w-2 h-2 ml-2 bg-[${
                        COLORS[index % COLORS.length]
                      }]`}
                    ></div>
                  </div>
                ))}
              </div>
              <div>
                <PieChart width={300} height={400}>
                  <Pie
                    dataKey='count'
                    data={data.top_sources}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                  >
                    {data.top_locations.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
