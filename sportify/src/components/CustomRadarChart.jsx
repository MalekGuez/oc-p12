import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const CustomRadarChart = ({ data }) => (
  <div className="custom-radar-line">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="65%" data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff', fontSize: 12 }} />
        <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

export default CustomRadarChart;