export default function AIPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Sentra AI</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul AI adalah asisten suara lintas halaman yang dapat mengeksekusi perintah dan mengkonfirmasi hasil kepada
        pengguna.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pemahaman perintah suara natural language</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Eksekusi perintah lintas modul</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Konfirmasi hasil dengan suara</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pembelajaran dari interaksi pengguna</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">POST /v1/ai/intent</p>
        <p className="text-muted text-sm">Proses perintah suara dan kembalikan aksi</p>

        <p className="font-bold text-foreground mt-4 mb-2">Request Body:</p>
        <code className="text-sm text-muted block">
          {`{
  "command": "Scan QR untuk pembayaran 50 ribu"
}`}
        </code>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "action": "qris_scan",
  "route": "/qris",
  "status": "ready",
  "confirmation": "Siap untuk scan QRIS"
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Catatan:</span> AI Sentra terus belajar dari interaksi pengguna untuk meningkatkan
          akurasi pemahaman perintah.
        </p>
      </div>
    </div>
  )
}
