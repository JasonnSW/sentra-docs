"use client"

import { useState } from "react"

export default function APIKeysPage() {
  const [keys, setKeys] = useState([
    {
      id: 1,
      name: "Production Key",
      key: "sk_prod_abc123def456",
      lastUsed: "2025-10-20 14:30",
      created: "2025-09-15",
      status: "active",
    },
    {
      id: 2,
      name: "Development Key",
      key: "sk_test_xyz789uvw012",
      lastUsed: "2025-10-20 10:15",
      created: "2025-10-01",
      status: "active",
    },
    {
      id: 3,
      name: "Old Key",
      key: "sk_test_old123456789",
      lastUsed: "2025-10-10 09:00",
      created: "2025-08-01",
      status: "inactive",
    },
  ])

  const [showNewKeyForm, setShowNewKeyForm] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")

  const handleCreateKey = () => {
    if (newKeyName.trim()) {
      const newKey = {
        id: keys.length + 1,
        name: newKeyName,
        key: `sk_test_${Math.random().toString(36).substr(2, 9)}`,
        lastUsed: "-",
        created: new Date().toISOString().split("T")[0],
        status: "active",
      }
      setKeys([...keys, newKey])
      setNewKeyName("")
      setShowNewKeyForm(false)
    }
  }

  const handleRevokeKey = (id: number) => {
    setKeys(keys.map((key) => (key.id === id ? { ...key, status: "inactive" } : key)))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-primary">API Keys</h1>
        <button
          onClick={() => setShowNewKeyForm(!showNewKeyForm)}
          className="px-4 py-2 bg-primary text-white rounded font-medium"
        >
          Create New Key
        </button>
      </div>

      {/* Create New Key Form */}
      {showNewKeyForm && (
        <div className="bg-white p-6 rounded border border-border mb-8">
          <h3 className="font-bold text-foreground mb-4">Buat API Key Baru</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nama Key</label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Contoh: Production Key"
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={handleCreateKey} className="px-4 py-2 bg-primary text-white rounded font-medium">
                Create
              </button>
              <button
                onClick={() => setShowNewKeyForm(false)}
                className="px-4 py-2 border border-border text-foreground rounded font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keys Table */}
      <div className="bg-white rounded border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-gray-50">
                <th className="text-left py-3 px-4 font-bold text-foreground">Nama</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Key</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Dibuat</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Terakhir Digunakan</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key) => (
                <tr key={key.id} className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">{key.name}</td>
                  <td className="py-3 px-4 text-muted font-mono text-xs">{key.key}</td>
                  <td className="py-3 px-4 text-muted">{key.created}</td>
                  <td className="py-3 px-4 text-muted">{key.lastUsed}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        key.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {key.status === "active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {key.status === "active" && (
                      <button onClick={() => handleRevokeKey(key.id)} className="text-red-600 font-medium text-sm">
                        Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Keamanan:</span> Jangan pernah bagikan API Key Anda. Jika terjadi kebocoran,
          segera revoke kunci lama dan buat yang baru.
        </p>
      </div>
    </div>
  )
}
