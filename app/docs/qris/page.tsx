export default function QRISPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Voice-QRIS</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul Voice-QRIS memungkinkan pengguna memindai kode QR dengan panduan kamera dan konfirmasi suara sebelum
        pembayaran.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Panduan kamera real-time (kiri, kanan, maju)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pembacaan nominal sebelum konfirmasi</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Konfirmasi suara untuk keamanan</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Deteksi QR otomatis dengan high accuracy</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">POST /v1/qris/scan</p>
        <p className="text-muted text-sm">Scan dan proses QRIS</p>

        <p className="font-bold text-foreground mt-4 mb-2">Request Body:</p>
        <code className="text-sm text-muted block">
          {`{
  "image_base64": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
}`}
        </code>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "amount": 50000,
  "merchant": "Toko ABC",
  "confidence": 0.98,
  "status": "success"
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Tip:</span> Gunakan format base64 untuk mengirim gambar. Pastikan kualitas gambar
          cukup baik untuk deteksi QR.
        </p>
      </div>
    </div>
  )
}
