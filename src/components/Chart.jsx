import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const fakeData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const calculateData = (data) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];; 
  const d = new Date();
  let currentMonth = d.getMonth();
  let currentYear = d.getFullYear();
  console.log(currentMonth);

  let result = [];
  let initialData = data.data || null;
  if (initialData) {
    let currentMoney = initialData.savings || 0;
    const target = initialData.cost || 0;
    const goal = initialData.deposit || 0;
    const income = initialData.income || 0;
    const expense = initialData.expense || 0;
    const growth = initialData.growth || 0;
    const inflation = initialData.inflation || 8.0;

    while (currentMoney < target) {
        dataPoint = {
            name: 
            totalAsset: currentMoney

        }
    }
  }
};

export const Chart = ({ data }) => {
  console.log("add chart");
  console.log(data);
  console.log(calculateData(data));
  return (
    <AreaChart
      width={500}
      height={400}
      data={fakeData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
};
