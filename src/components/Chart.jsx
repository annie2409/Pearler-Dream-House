import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const calculateData = (data) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let currentMonth = d.getMonth();
  let startYear = d.getFullYear();

  let result = [];
  let initialData = data.data || null;
  if (initialData) {
    let currentMoney = parseInt(initialData.savings) || 0;
    let target = parseInt(initialData.cost) || 0;
    let goal = parseInt(initialData.deposit) || 0;
    let income = parseInt(initialData.income) || 0;
    let expense = parseInt(initialData.expense) || 0;
    const growth = parseInt(initialData.growth) || 0;
    const inflation = parseInt(initialData.inflation) || 8.0;

    let month = months[currentMonth % months.length];
    let year = startYear + Math.floor(currentMonth / 13);
    let incomeEarned = income;
    let expenseUsed = expense;

    result.push({
      name: `${month} ${year}`,
      totalAsset: currentMoney,
      depositTarget: goal,
      income: incomeEarned,
      expense: expenseUsed,
    });

    let limit = 0;
    while (currentMoney < target && limit < 360) {
      // 12 * 30 years
      let month = months[currentMonth % months.length];
      let year = startYear + Math.floor(currentMonth / 13);
      currentMoney = Math.floor(currentMoney - expense + income);
      incomeEarned += income;
      expenseUsed += expense;

      const dataPoint = {
        name: `${month} ${year}`,
        totalAsset: currentMoney,
        depositTarget: goal,
        income: incomeEarned,
        expense: expenseUsed,
      };

      result.push(dataPoint);

      income = Math.floor(income + income * (growth / 12 / 100));
      expense = Math.floor(expense + expense * (inflation / 12 / 100));
      target = Math.floor(target + target * (inflation / 12 / 100));
      goal = Math.floor(goal + goal * (inflation / 12 / 100));
      currentMonth++;
    }
    return result;
  }
};

export const Chart = ({ data }) => {
  let goalLine =
    data && data.data && data.data.goal ? (
      <ReferenceLine
        y={parseInt(data.data.goal)}
        label="First deposit"
        stroke="red"
      />
    ) : (
      <ReferenceLine />
    );
  if (data && data.data) {
    return (
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={calculateData(data)}
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
              dataKey="totalAsset"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.4}
            />
            {goalLine}
            <Area
              type="monotone"
              dataKey="income"
              stroke="#ffc658"
              fill="#ffc658"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <div></div>;
  }
};
