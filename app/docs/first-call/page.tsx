"use client"

import { useState } from "react"

export default function FirstCallPage() {
  const [activeTab, setActiveTab] = useState("curl")

  const codeExamples = {
    curl: `curl -X GET "https://sandbox.api.sentra.id/v1/ping" \\
  -H "x-sentra-key: sk_test_123"`,
    javascript: `const res = await fetch("https://sandbox.api.sentra.id/v1/ping", {
  headers: { "x-sentra-key": "sk_test_123" }
});
const data = await res.json();
console.log(data);`,
    python: `import requests
r = requests.get("https://sandbox.api.sentra.id/v1/ping",
                 headers={"x-sentra-key":"sk_test_123"})
print(r.json())`,
  }

  const response = `{
  "ok": true,
  "service": "sentra-gateway",
  "trace_id": "dg-abc123"
}`

  return (
    <div>
      <h1 className="text-primary mb-6">Panggilan API Pertama (Sandbox)</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Gunakan API Key sandbox pada header. Semua endpoint di lingkungan demo bersifat dummy.
      </p>

      <h2 className="text-primary mb-4 mt-12">Endpoint Ping</h2>

      <p className="text-muted mb-6">
        Endpoint ping adalah cara terbaik untuk memverifikasi bahwa kredensial Anda bekerja dengan baik.
      </p>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">Base URL:</p>
        <code className="text-sm text-muted">https://sandbox.api.sentra.id</code>

        <p className="font-bold text-foreground mt-4 mb-2">Headers:</p>
        <code className="text-sm text-muted">x-sentra-key: &lt;YOUR_API_KEY&gt;</code>
        <code className="text-sm text-muted block">Content-Type: application/json</code>
      </div>

      <h2 className="text-primary mb-4 mt-12">Contoh Kode</h2>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-4 border-b border-border">
        {["curl", "javascript", "python"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === tab ? "text-primary border-b-2 border-primary" : "text-muted hover:text-foreground"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Code Block */}
      <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto mb-8">
        <pre>{codeExamples[activeTab as keyof typeof codeExamples]}</pre>
      </div>

      <h2 className="text-primary mb-4 mt-12">Response</h2>

      <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto mb-8">
        <pre>{response}</pre>
      </div>

      <div className="bg-green-50 border border-green-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Sukses!</span> Jika Anda melihat response di atas, berarti API Key Anda bekerja
          dengan baik. Anda siap untuk mengintegrasikan modul Sentra.
        </p>
      </div>
    </div>
  )
}
