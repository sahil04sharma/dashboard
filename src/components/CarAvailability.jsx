import React, { useState } from 'react'

export default function CarAvailability() {
  const [form, setForm] = useState({
    car: '',
    date: '',
    time: '',
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Check Car Availability</h3>

      {/* 1 column on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div>
          <label className="muted text-sm">Car Number</label>
          <input
            name="car"
            className="field mt-1"
            placeholder="e.g. DL 10 CD 1234"
            value={form.car}
            onChange={onChange}
          />
        </div>
        <div>
          <label className="muted text-sm">Date</label>
          <input
            name="date"
            type="date"
            className="field mt-1"
            value={form.date}
            onChange={onChange}
          />
        </div>
        <div>
          <label className="muted text-sm">Time</label>
          <input
            name="time"
            type="time"
            className="field mt-1"
            value={form.time}
            onChange={onChange}
          />
        </div>
        <div className="flex items-end">
          <button className="btn w-full">Check</button>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 p-3 text-sm bg-slate-50">
        <p className="muted">
          Tip: Use filters to quickly find availability by car number, date and time.
        </p>
      </div>
    </div>
  )
}
