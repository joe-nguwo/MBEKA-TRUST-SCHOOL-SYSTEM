import { useQuery } from "@tanstack/react-query";
import api from "@/services/endpoint.ts";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip

} from 'recharts';
type res = {
  
  total:number,
  male:number,
  female:number
}
export default function AnalyticsChart() {
  const student = useQuery({
    queryKey:["num"],
    queryFn:async()=>{
      const data:res[] = await api.get("numOfstdudent")
      return data
    }
  

})
console.log("this is the data",student.data)
  return (
    
    // ResponsiveContainer forces the chart to adapt to its parent container sizing
    <div style={{ width: '100%', height: 400 }}>
      <h1>STUDENTS CHART</h1>
      {<ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip ></Tooltip>
          <Pie data={student.data} dataKey={student.data}>
            
            
          </Pie>
        </PieChart>

      </ResponsiveContainer> }
    </div>
  );
};
