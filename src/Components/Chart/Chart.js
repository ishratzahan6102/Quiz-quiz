import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css'

const Chart = () => {
    const data = useLoaderData()
    console.log(data)
    const chartData = [
        {
          "name": "React",
          "total": 8,
          "views": 10,
        },
        {
          "name": "JavaScript",
          "total": 3,
          "views": 20,
        },
        {
          "name": "CSS",
          "total": 15,
          "views": 5,
        },
        {
          "name": "Git",
          "total": 5,
          "views": 30,
        }
      ]
    
    return (
        <div className='charts'>
            <div className='chart'>
            <div className='chart-heading'>
                <h1>AreaChart of Views</h1>
                <p>Based on topic discussed</p>
            </div>
            <AreaChart width={400} height={250} data={chartData}  
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" /><YAxis />
                <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"  />
                    <Area type="monotone" dataKey="views" stroke="#2504b8" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>

            <div className='chart-details'>
                <h2>Stacking Areas</h2>
                <p>
                By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts. By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts. By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts.
                </p>
            </div>
            </div>

            <div className='chart'>
            <div className='chart-heading'>
                <h1>PieChart of Views</h1>
                <p>Based on total number of questions</p>
            </div>
            <div>
            <PieChart width={300} height={250}>
            <Pie data={chartData} dataKey="views" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#2504b8" />
                <Pie data={chartData} dataKey="total" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </div>
            <div className='chart-details'>
                <h2>Stacking Areas</h2>
                <p>
                By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts. By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts. By default, the area chart draws the series on top of one another. You can stack them atop one another instead, so that the data values at each x-value are summed. In an area chart, the value for each series will always be stacked relative to the preceding series value. Stacking a mix of negative and positive values will cause the areas to overlap. It is important to note that the interpolateNulls option does not work with stacked area charts.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Chart;