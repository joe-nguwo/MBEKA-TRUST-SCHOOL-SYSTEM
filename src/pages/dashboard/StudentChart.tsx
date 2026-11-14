import { useQuery } from "@tanstack/react-query";
import api from "@/services/endpoint.ts";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";



type resCount = {
  gender: string | null;
  count: number | string;
};

const COLORS = ["#38bdf8", "#64748b"];

export default function AnalyticsChart() {

  const student = useQuery({
    queryKey: ["num"],
    queryFn: async () => {
      const data:number = await api.get("numOfstdudent");
      return data;
    }
  });

  const genderCount = useQuery({
    queryKey: ["genderCount"],
    queryFn: async () => {
      const data: resCount[] = await api.get("genderCount");

      return data
        .filter((item) => item.gender !== null)
        .map((item) => ({
          ...item,
          count: Number(item.count)
        }));
    }
  });

  console.log("Gender count:", genderCount.data);
  console.log("Total students:", student.data);

  return (
    <div style={{ width: "100%", height: 400 }}>

      <p>Total students: {student.data}</p>

      <h1>STUDENTS CHART</h1>

      {genderCount.isLoading && <p>Loading chart...</p>}

      {genderCount.isError && <p>Failed to load gender data.</p>}

      {genderCount.data && genderCount.data.length > 0 && (
        <ResponsiveContainer width="100%" height="85%">

          <PieChart>

            <Tooltip />

            <Legend />

            <Pie
              data={genderCount.data}
              dataKey="count"
              nameKey="gender"
              outerRadius={120}
              label
            >

              {genderCount.data.map((data, index) => (
                <Cell
                  key={data.gender ?? index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>
      )}

    </div>
  );
}