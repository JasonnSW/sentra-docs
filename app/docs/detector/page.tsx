export default function DetectorPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Sentra Detector</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul Detector mengenali nominal uang secara otomatis dan membacakannya kepada pengguna, bahkan pada uang yang
        lusuh atau cahaya minim.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Deteksi nominal uang real-time</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Akurat bahkan pada uang lusuh dan cahaya minim</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pembacaan suara otomatis</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Dukungan untuk semua denominasi rupiah</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">POST /v1/detector/nominal</p>
        <p className="text-muted text-sm">Deteksi nominal uang dari gambar</p>

        <p className="font-bold text-foreground mt-4 mb-2">Request Body:</p>
        <code className="text-sm text-muted block">
          {`{
  "image_base64": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
}`}
        </code>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "nominal": 100000,
  "currency": "IDR",
  "confidence": 0.95,
  "status": "success"
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Catatan:</span> Detector mendukung semua denominasi rupiah dari Rp1.000 hingga
          Rp100.000.
        </p>
      </div>
    </div>
  )
}
