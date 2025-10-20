"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState("today");

  // Dummy data for charts
  const hourlyData = [
    { hour: "00:00", hits: 120 },
    { hour: "04:00", hits: 340 },
    { hour: "08:00", hits: 890 },
    { hour: "12:00", hits: 1200 },
    { hour: "16:00", hits: 1450 },
    { hour: "20:00", hits: 980 },
    { hour: "23:59", hits: 450 },
  ];

  const successFailData = [
    { time: "00:00", success: 100, failed: 20 },
    { time: "04:00", success: 320, failed: 20 },
    { time: "08:00", success: 850, failed: 40 },
    { time: "12:00", success: 1150, failed: 50 },
    { time: "16:00", success: 1380, failed: 70 },
    { time: "20:00", success: 920, failed: 60 },
    { time: "23:59", success: 420, failed: 30 },
  ];

  const moduleUsage = [
    { name: "e-KYC", value: 32, color: "#00027d" },
    { name: "QRIS", value: 28, color: "#4f46e5" },
    { name: "Detector", value: 20, color: "#818cf8" },
    { name: "Manager", value: 15, color: "#c7d2fe" },
    { name: "AI", value: 5, color: "#e0e7ff" },
  ];

  const kpis = [
    { label: "Total Hit Hari Ini", value: "8.320", change: "+12%" },
    { label: "Sukses", value: "8.102", change: "+15%" },
    { label: "Gagal", value: "218", change: "-8%" },
    { label: "p95 Latensi", value: "420 ms", change: "-5%" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-primary">Dashboard Overview</h1>
        <div className="flex gap-2">
          {["today", "7d", "30d"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded font-medium text-sm transition-colors ${
                timeRange === range
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-border"
              }`}
            >
              {range === "today"
                ? "Hari Ini"
                : range === "7d"
                ? "7 Hari"
                : "30 Hari"}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded border border-border">
            <p className="text-sm text-muted mb-2">{kpi.label}</p>
            <p className="text-3xl font-bold text-foreground mb-2">
              {kpi.value}
            </p>
            <p className="text-sm text-green-600 font-medium">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded border border-border">
          <h3 className="font-bold text-foreground mb-4">
            Hit per Jam (24 Jam)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="hour" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                }}
              />
              <Line
                type="monotone"
                dataKey="hits"
                stroke="#00027d"
                strokeWidth={2}
                dot={{ fill: "#00027d" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stacked Bar Chart */}
        <div className="bg-white p-6 rounded border border-border">
          <h3 className="font-bold text-foreground mb-4">Sukses vs Gagal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={successFailData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="time" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                }}
              />
              <Legend />
              <Bar dataKey="success" stackId="a" fill="#059669" />
              <Bar dataKey="failed" stackId="a" fill="#dc2626" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Donut Chart & Billing */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Module Usage */}
        <div className="bg-white p-6 rounded border border-border">
          <h3 className="font-bold text-foreground mb-4">
            Penggunaan per Modul
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moduleUsage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {moduleUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {moduleUsage.map((module, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: module.color }}
                />
                <span className="text-sm text-muted">
                  {module.name}: {module.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Billing Estimate */}
        <div className="bg-white p-6 rounded border border-border">
          <h3 className="font-bold text-foreground mb-4">
            Estimasi Billing Bulanan
          </h3>
          <div className="space-y-4">
            <div className="pb-4 border-b border-border">
              <p className="text-sm text-muted mb-1">Paket Saat Ini</p>
              <p className="text-lg font-bold text-foreground">Starter Pack</p>
            </div>

            <div className="pb-4 border-b border-border">
              <p className="text-sm text-muted mb-1">Pengguna Aktif</p>
              <p className="text-lg font-bold text-foreground">
                5.400 pengguna
              </p>
            </div>

            <div className="pb-4 border-b border-border">
              <p className="text-sm text-muted mb-1">Biaya per Pengguna</p>
              <p className="text-lg font-bold text-foreground">
                Rp1.200 / bulan
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded">
              <p className="text-sm text-muted mb-1">Total Estimasi</p>
              <p className="text-3xl font-bold text-primary">Rp 6.480.000</p>
              <p className="text-xs text-muted mt-2">
                Estimasi berdasarkan penggunaan saat ini
              </p>
            </div>

            <button className="w-full px-4 py-2 bg-primary text-white rounded font-medium">
              Upgrade ke Full Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
