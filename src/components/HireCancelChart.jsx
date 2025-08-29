import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Hired', value: 78 },
  { name: 'Cancelled', value: 22 },
]

const COLORS = ['#22C55E', '#EF4444']

export default function HireCancelChart() {
  return (
    <div style={{ width: '100%', height: 220 }}>
      <h3 className="text-lg font-semibold mb-2">Hire vs Cancel</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
