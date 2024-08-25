import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const CustomRadarChart = ({data}) => (
<div className="custom-radar-line">
    <RadarChart width={300} height={300} outerRadius={90} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff', fontSize: 12 }} />
        <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
    </RadarChart>
</div>
   

);

export default CustomRadarChart;