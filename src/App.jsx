import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import CarAvailability from "./components/CarAvailability";
import LiveCarStatus from "./components/LiveCarStatus";
import HireCancelChart from "./components/HireCancelChart";
import EarningsChart from "./components/EarningsChart";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="min-h-screen grid md:grid-cols-[260px_1fr] grid-cols-1">
      {/* Sidebar */}
      <Sidebar active={active} onChange={setActive} />

      {/* Main content */}
      <main className="p-4 md:p-6 bg-slate-50">
        {/* Top header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-slate-800">Today's Statistics</h1>
            <p className="text-sm text-slate-500">Tue, 14 Nov, 2022, 11:30 AM</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative">
              <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-xl">🔔</span>
            </button>
            <input
              className="field max-w-[240px]"
              placeholder="Search here"
            />
          </div>
        </div>

        {/* Two-column grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN → Stats + Hire/Cancel */}
          <div className="space-y-4">
            <StatsCard
              title="Income"
              value="$9460.00"
              subLabel="Compared to $9940 yesterday"
              trend="down"
            />
            <StatsCard
              title="Expenses"
              value="$5660.00"
              subLabel="Compared to $5240 yesterday"
              trend="up"
            />
            {/* Hire vs Cancel chart stays here (left side) */}
            <div className="card">
              <HireCancelChart />
            </div>
          </div>

          {/* RIGHT COLUMN → Car availability + Live status + Earnings */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card">
              <CarAvailability />
            </div>
            <div className="card">
              <LiveCarStatus />
            </div>
            <div className="card">
              <EarningsChart />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
