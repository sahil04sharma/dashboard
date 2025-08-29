import React from 'react'

const rows = [
  { driver: "Aman Verma", car: "DL 08 AB 2345", status: "On Trip", earnings: 1200 },
  { driver: "Neha Singh", car: "DL 01 CD 8899", status: "Idle", earnings: 300 },
  
  { driver: "Manish Patel", car: "DL 02 JK 5566", status: "Idle", earnings: 200 },
]

function StatusBadge({ s }) {
  const map = {
    "On Trip": "bg-green-100 text-green-700",
    "Idle": "bg-slate-100 text-slate-700",
    "Maintenance": "bg-amber-100 text-amber-700"
  }
  return <span className={`px-2 py-1 rounded-lg text-xs ${map[s] || ''}`}>{s}</span>
}

export default function LiveCarStatus() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Live Car Status</h3>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-xl border hover:bg-slate-50">Refresh</button>
          <button className="px-3 py-2 rounded-xl border hover:bg-slate-50">Export</button>
        </div>
      </div>

      {/* Limit height and scroll inside */}
      <div className="max-h-[220px] overflow-y-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500 sticky top-0 bg-white">
            <tr>
              <th className="py-2">Driver</th>
              <th className="py-2">Car Number</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Earnings (₹)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t hover:bg-slate-50">
                <td className="py-2">{r.driver}</td>
                <td className="py-2">{r.car}</td>
                <td className="py-2"><StatusBadge s={r.status} /></td>
                <td className="py-2 text-right">{r.earnings.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
