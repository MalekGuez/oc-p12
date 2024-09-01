import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const CustomPieChart = ({percentage}) => {
  const data = [{ name: 'Percentage', value: percentage }];

  const startAngle = 120;
  const endAngle = (120 - percentage * 3.6);

  return (
    <div className="custom-pie-chart">
      <span className="custom-pie-chart__title">Score</span>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65} 
            outerRadius={80}
            fill="#E60000"
            label={false} 
            startAngle={startAngle}
            endAngle={endAngle}

            cornerRadius={10}
          />
        </PieChart>
        </ResponsiveContainer>
        <div className="custom-pie-chart__percentage"><p>{percentage}%</p> de votre <br/> objectif</div>
    </div>
  );
};

export default CustomPieChart;