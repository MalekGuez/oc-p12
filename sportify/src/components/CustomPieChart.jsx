import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const CustomPieChart = ({percentage}) => {
  const data = [{ name: 'Percentage', value: percentage }];

  const startAngle = 120;
  const endAngle = (120 - percentage * 3.6);

  return (
    <div className="custom-pie-chart">
      <span className="custom-pie-chart__title">Score</span>
      <PieChart width={300} height={300}>
      <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={95} 
          outerRadius={110}
          fill="#E60000"
          label={false} 

          startAngle={startAngle}
          endAngle={endAngle}

          cornerRadius={10}
        />
      </PieChart>
      <div className="custom-pie-chart__percentage"><p>{percentage}%</p> de votre <br/> objectif</div>
    </div>
  );
};

export default CustomPieChart;