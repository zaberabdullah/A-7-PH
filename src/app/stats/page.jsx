"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const StatsPage = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let counts = { Call: 0, Text: 0, Video: 0 };

    keys.forEach((key) => {
      if (key.startsWith("timeline_")) {
        const logs = JSON.parse(localStorage.getItem(key));
        logs.forEach((log) => {
          if (log.title.includes("Call")) counts.Call++;
          else if (log.title.includes("Text")) counts.Text++;
          else if (log.title.includes("Video")) counts.Video++;
        });
      }
    });

    setChartData([
      { name: "Calls", value: counts.Call, fill: "#0088FE" },
      { name: "Texts", value: counts.Text, fill: "#00C49F" },
      { name: "Videos", value: counts.Video, fill: "#FFBB28" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-6">
      <div className="max-w-4xl mx-auto">
      
        <h1 className="text-5xl font-bold text-[#1F2937] mb-8">Friendship Analytics</h1>

       
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative">
      
          <p className="text-lg font-medium text-[#1a3a32] mb-4">By Interaction Type</p>

          <div className="w-full h-[400px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius="70%"
                  outerRadius="90%"
                  cornerRadius={40}
                  paddingAngle={10}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: "20px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsPage;
