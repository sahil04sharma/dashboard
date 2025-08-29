import React from 'react'

export default function StatsCard({ title, value, subLabel, trend = 'up' }) {
  const isUp = trend === 'up'

  return (
    <div className="card">
      {/* Top row: Title + Today tag */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
          Today
        </span>
      </div>

      {/* Value */}
      <p className="text-2xl font-semibold text-slate-800">{value}</p>

      {/* Sub label with trend */}
      <div className="mt-1 flex items-center justify-between text-sm">
        <p className="text-slate-500">{subLabel}</p>
        <span
          className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
            isUp
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {isUp ? '▲ +2.5%' : '▼ -1.5%'}
        </span>
      </div>
    </div>
  )
}
