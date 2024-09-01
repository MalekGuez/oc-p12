import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ data }) => {
    const formatXAxisTick = (value) => {
      switch (value) {
        case 1:
          return 'L';
        case 2:
          return 'M';
        case 3:
          return 'M';
        case 4:
          return 'J';
        case 5:
          return 'V';
        case 6:
          return 'S';
        case 7:
          return 'D';
        default:
          return '';
      }
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          const { sessionLength } = payload[0].payload;
          return (
            <div className="custom-tooltip" style={{ padding: '10px', fontSize: '12px', background: 'white' }}>
              <p>{sessionLength} min</p>
            </div>
          );
        }
        return null;
      };
  
    return (
        <div className="custom-line-chart">
            <div className="chart-title">Durée moyenne des sessions</div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 100, right: 10, left: 10, bottom: 10 }}
                >
                    <XAxis
                    dataKey="day"
                    tickFormatter={formatXAxisTick} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#FFFFFF90' }}
                    />
                    <YAxis hide={true} />
                    <Tooltip content={<CustomTooltip />} wrapperStyle={{ background: 'transparent' }}/>
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF90" strokeWidth={2} strokeLinecap="round" dot={false} activeDot={{ fill: 'white'}} />
                </LineChart>
              </ResponsiveContainer>
        </div>
    );
  };
  
  export default CustomLineChart;