"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

export default function MonthlyBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/transactions');
      const transactions = await res.json();

      const grouped = transactions.reduce((acc, curr) => {
        const month = format(parseISO(curr.date), 'MMM yyyy');
        acc[month] = (acc[month] || 0) + curr.amount;
        return acc;
      }, {});

      const chartData = Object.entries(grouped).map(([month, amount]) => ({
        month,
        amount,
      }));

      setData(chartData);
    }
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
