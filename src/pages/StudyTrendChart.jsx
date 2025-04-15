import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StudyTrendChart = ({ stats }) => {
  const data = Object.entries(stats).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <div className="chart-box">
      <h3>📈 学习趋势</h3>
      <ResponsiveContainer width="50%" height={150}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudyTrendChart;
