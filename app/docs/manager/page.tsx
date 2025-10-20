export default function ManagerPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Sentra Manager</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul Manager memungkinkan pengguna mencatat pemasukan dan pengeluaran hanya dengan suara, sistem akan
        mencatatnya secara otomatis.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pencatatan suara untuk pemasukan/pengeluaran</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Kategorisasi otomatis transaksi</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Laporan bulanan yang mudah diakses</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Integrasi dengan sistem akuntansi</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">POST /v1/manager/entry</p>
        <p className="text-muted text-sm">Tambah entri pemasukan atau pengeluaran</p>

        <p className="font-bold text-foreground mt-4 mb-2">Request Body:</p>
        <code className="text-sm text-muted block">
          {`{
  "type": "income",
  "amount": 500000,
  "note": "Gaji bulanan",
  "category": "salary"
}`}
        </code>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "entry_id": "mgr_entry_abc123",
  "status": "recorded",
  "timestamp": "2025-10-20T10:30:00Z"
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Tip:</span> Gunakan kategori yang konsisten untuk laporan yang lebih akurat.
        </p>
      </div>
    </div>
  )
}
