"use client"

import { useState } from "react"

export default function LogsPage() {
  const [timeRange, setTimeRange] = useState("today")
  const [moduleFilter, setModuleFilter] = useState("all")

  const logs = [
    {
      time: "14:35:22",
      method: "POST",
      endpoint: "/v1/ekyc/session",
      status: 200,
      duration: "245ms",
      traceId: "dg-abc123",
    },
    {
      time: "14:34:15",
      method: "POST",
      endpoint: "/v1/qris/scan",
      status: 200,
      duration: "312ms",
      traceId: "dg-def456",
    },
    {
      time: "14:33:48",
      method: "GET",
      endpoint: "/v1/ping",
      status: 200,
      duration: "45ms",
      traceId: "dg-ghi789",
    },
    {
      time: "14:32:10",
      method: "POST",
      endpoint: "/v1/detector/nominal",
      status: 200,
      duration: "428ms",
      traceId: "dg-jkl012",
    },
    {
      time: "14:31:55",
      method: "POST",
      endpoint: "/v1/manager/entry",
      status: 200,
      duration: "156ms",
      traceId: "dg-mno345",
    },
    {
      time: "14:30:22",
      method: "POST",
      endpoint: "/v1/ai/intent",
      status: 200,
      duration: "523ms",
      traceId: "dg-pqr678",
    },
    {
      time: "14:29:45",
      method: "POST",
      endpoint: "/v1/ekyc/session",
      status: 400,
      duration: "89ms",
      traceId: "dg-stu901",
    },
    {
      time: "14:28:30",
      method: "GET",
      endpoint: "/v1/ping",
      status: 200,
      duration: "42ms",
      traceId: "dg-vwx234",
    },
  ]

  const getStatusColor = (status: number) => {
    if (status === 200) return "text-green-600"
    if (status === 400) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div>
      <h1 className="text-primary mb-8">API Logs</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Time Range</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="today">Hari Ini</option>
            <option value="7d">7 Hari</option>
            <option value="30d">30 Hari</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Module</label>
          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            className="px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">Semua Modul</option>
            <option value="ekyc">e-KYC</option>
            <option value="qris">QRIS</option>
            <option value="detector">Detector</option>
            <option value="manager">Manager</option>
            <option value="ai">AI</option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-gray-50">
                <th className="text-left py-3 px-4 font-bold text-foreground">Time</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Method</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Endpoint</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Trace ID</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 px-4 text-muted font-mono">{log.time}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        log.method === "GET" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {log.method}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-foreground font-mono text-xs">{log.endpoint}</td>
                  <td className={`py-3 px-4 font-bold ${getStatusColor(log.status)}`}>{log.status}</td>
                  <td className="py-3 px-4 text-muted">{log.duration}</td>
                  <td className="py-3 px-4 text-muted font-mono text-xs">{log.traceId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 border border-border text-foreground rounded font-medium">Load More</button>
      </div>
    </div>
  )
}
