import React from 'react'

const items = [
  { name: "Dashboard", icon: "🏠" },
  { name: "Drivers", icon: "👨‍✈️" },
  { name: "Bookings", icon: "📝" },
  { name: "Notifications", icon: "🔔" },
  { name: "Settings", icon: "⚙️" },
  { name: "Payment Details", icon: "💳" },
  { name: "Transactions", icon: "📄" },
  { name: "Car Report", icon: "🚗" },
]

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="bg-slate-900 text-slate-100 p-4 md:min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">🚘</div>
        <div>
          <p className="font-semibold">Gloomshine</p>
          {/* <p className="text-xs text-slate-400">Fleet Dashboard</p> */}
        </div>
      </div>

      <nav className="space-y-1">
        {items.map((it) => (
          <button
            key={it.name}
            onClick={() => onChange(it.name)}
            className={`w-full text-left sidebar-link ${active === it.name ? 'active' : ''}`}
          >
            <span className="text-lg">{it.icon}</span>
            <span>{it.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
