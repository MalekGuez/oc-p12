import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ data }) => {

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{background: '#E60000', padding: '10px', color: 'white', fontSize: '12px', textAlign: 'center'}}>
          <p style={{marginBottom: '10px'}}>{payload[0].value} kg</p>
          <p>{payload[1].value} kCal</p>
        </div>
      );
    }

    return null;
  };

  const renderCustomizedXAxisTick = (value, index) => {
    return index + 1;
  };

  return (
    <>
     <div className="graph-container" style={{ position: 'relative' }}>
        <h2 className="graph-title" style={{position: 'absolute'}}>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barGap={10}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickLine={false} tick={{ fontSize: 12, fill : '#9B9EAC'}} interval={0} tickFormatter={renderCustomizedXAxisTick}/>
            <YAxis orientation="right"  tickCount={3} tick={{ fontSize: 12, fill: '#9B9EAC' }} axisLine={false} tickLine={false}/>
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend align="right" verticalAlign="top" iconType="circle" iconSize={5} wrapperStyle={{ paddingBottom: "30px", fontSize: '14px'}} />
            <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={7} radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={7} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomBarChart;