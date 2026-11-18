import {useQuery}from "@tanstack/react-query";
import api from "../../services/endpoint.ts";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";


// const data = [
//   { name: "Product A", sales: 4000 },
//   { name: "Product B", sales: 3000 },
//   { name: "Product C", sales: 2000 },
//   { name: "Product D", sales: 2780 },
//   { name: "Product E", sales: 1890 },
// ];

export default function BookChart() {
  const count = useQuery({
  queryKey: ["booksCount"],
  queryFn: async () => {
    const response:number = await api.get("booksCount");
    return response
  }
});


  return (
    <div style={{ width: "100%", height: 300 }}>
      <p>Total Books: {count.data}</p>
    </div>
  );
}
