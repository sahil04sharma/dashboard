import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', earnings: 1200 },
  { name: 'Tue', earnings: 980 },
  { name: 'Wed', earnings: 1400 },
  { name: 'Thu', earnings: 900 },
  { name: 'Fri', earnings: 1800 },
  { name: 'Sat', earnings: 1600 },
  { name: 'Sun', earnings: 1250 },
]

export default function EarningsChart() {
  return (
    <div style={{ width: '100%', height: 220 }}>   {/* reduced height */}
      <h3 className="text-lg font-semibold mb-2">Earnings Over Time</h3>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="earnings" stroke="#3B82F6" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
