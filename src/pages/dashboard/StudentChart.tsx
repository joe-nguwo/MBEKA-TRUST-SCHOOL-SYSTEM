
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip

} from 'recharts';

// 1. Define your data structure
interface AnalyticsData {
  name: string;
  results: number;
  total: number;
}

// 2. Prepare strongly-typed mock data
const data: AnalyticsData[] = [
  { name: 'Jan', results: 4000, total: 2400 },
  { name: 'jon', results: 3000, total: 1398 },
  { name: 'Mary', results: 2000, total: 9800 },
  { name: 'Abi', results: 2780, total: 3908 },
  { name: 'Mayson', results: 1890, total: 4800 },
];
const colors = ['#4CAF50', '#FFEB3B', '#FF5722', '#2196F3', '#9C27B0'];

export default function AnalyticsChart() {
  return (
    // ResponsiveContainer forces the chart to adapt to its parent container sizing
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Tooltip ></Tooltip>
              <Pie dataKey="results" data={data} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${entry.results}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
        </PieChart>
       
      </ResponsiveContainer>
    </div>
  );
};
