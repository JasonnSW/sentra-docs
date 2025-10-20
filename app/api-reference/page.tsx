"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function APIReference() {
  const [activeTab, setActiveTab] = useState("curl")

  const endpoints = [
    {
      method: "GET",
      path: "/v1/ping",
      desc: "Verifikasi koneksi API",
      params: [],
      response: `{
  "ok": true,
  "service": "sentra-gateway",
  "trace_id": "dg-abc123"
}`,
    },
    {
      method: "POST",
      path: "/v1/ekyc/session",
      desc: "Mulai sesi e-KYC",
      params: [
        { name: "nik", type: "string", desc: "Nomor Induk Kependudukan" },
        { name: "nama", type: "string", desc: "Nama lengkap" },
        { name: "birthdate", type: "string", desc: "Tanggal lahir (YYYY-MM-DD)" },
      ],
      response: `{
  "session_id": "ekyc_sess_abc123",
  "status": "pending",
  "expires_at": "2025-10-20T12:00:00Z"
}`,
    },
    {
      method: "POST",
      path: "/v1/qris/scan",
      desc: "Scan dan proses QRIS",
      params: [{ name: "image_base64", type: "string", desc: "Gambar QRIS dalam format base64" }],
      response: `{
  "amount": 50000,
  "merchant": "Toko ABC",
  "confidence": 0.98,
  "status": "success"
}`,
    },
    {
      method: "POST",
      path: "/v1/detector/nominal",
      desc: "Deteksi nominal uang",
      params: [{ name: "image_base64", type: "string", desc: "Gambar uang dalam format base64" }],
      response: `{
  "nominal": 100000,
  "currency": "IDR",
  "confidence": 0.95,
  "status": "success"
}`,
    },
    {
      method: "POST",
      path: "/v1/manager/entry",
      desc: "Tambah entri pemasukan/pengeluaran",
      params: [
        { name: "type", type: "string", desc: "income atau expense" },
        { name: "amount", type: "number", desc: "Jumlah dalam rupiah" },
        { name: "note", type: "string", desc: "Catatan transaksi" },
      ],
      response: `{
  "entry_id": "mgr_entry_abc123",
  "status": "recorded",
  "timestamp": "2025-10-20T10:30:00Z"
}`,
    },
    {
      method: "POST",
      path: "/v1/ai/intent",
      desc: "Proses perintah suara",
      params: [{ name: "command", type: "string", desc: "Perintah dalam bahasa natural" }],
      response: `{
  "action": "qris_scan",
  "route": "/qris",
  "status": "ready",
  "confirmation": "Siap untuk scan QRIS"
}`,
    },
  ]

  const codeExamples = {
    curl: (endpoint: (typeof endpoints)[0]) =>
      `curl -X ${endpoint.method} "https://sandbox.api.sentra.id${endpoint.path}" \\
  -H "x-sentra-key: sk_test_123" \\
  -H "Content-Type: application/json"`,
    javascript: (endpoint: (typeof endpoints)[0]) =>
      `const res = await fetch("https://sandbox.api.sentra.id${endpoint.path}", {
  method: "${endpoint.method}",
  headers: {
    "x-sentra-key": "sk_test_123",
    "Content-Type": "application/json"
  }
});
const data = await res.json();
console.log(data);`,
    python: (endpoint: (typeof endpoints)[0]) =>
      `import requests
r = requests.${endpoint.method.toLowerCase()}(
  "https://sandbox.api.sentra.id${endpoint.path}",
  headers={"x-sentra-key": "sk_test_123"}
)
print(r.json())`,
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-primary mb-6">API Reference</h1>

          <p className="text-lg text-muted mb-12 leading-relaxed">
            Dokumentasi lengkap semua endpoint Sentra Gateway. Base URL: <code>https://sandbox.api.sentra.id</code>
          </p>

          <div className="space-y-12">
            {endpoints.map((endpoint, i) => (
              <div key={i} className="border border-border rounded p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className={`px-3 py-1 rounded font-bold text-white text-sm ${
                      endpoint.method === "GET" ? "bg-blue-600" : "bg-green-600"
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <div>
                    <code className="text-lg font-mono text-foreground">{endpoint.path}</code>
                    <p className="text-muted text-sm mt-1">{endpoint.desc}</p>
                  </div>
                </div>

                {endpoint.params.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-foreground mb-3">Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 font-bold text-foreground">Name</th>
                            <th className="text-left py-2 px-3 font-bold text-foreground">Type</th>
                            <th className="text-left py-2 px-3 font-bold text-foreground">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.params.map((param, j) => (
                            <tr key={j} className="border-b border-border">
                              <td className="py-2 px-3 text-muted font-mono">{param.name}</td>
                              <td className="py-2 px-3 text-muted">{param.type}</td>
                              <td className="py-2 px-3 text-muted">{param.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold text-foreground mb-3">Code Examples</h3>

                  <div className="flex gap-2 mb-4 border-b border-border">
                    {["curl", "javascript", "python"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-medium text-sm transition-colors ${
                          activeTab === tab
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                    <pre>{codeExamples[activeTab as keyof typeof codeExamples](endpoint)}</pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-3">Response</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                    <pre>{endpoint.response}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
