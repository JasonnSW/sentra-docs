export default function AuthPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Auth & Keamanan</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Sentra menggunakan API Key untuk autentikasi. Semua komunikasi harus melalui HTTPS dan menyertakan header
        autentikasi yang valid.
      </p>

      <h2 className="text-primary mb-4 mt-12">Autentikasi API Key</h2>

      <p className="text-muted mb-6">
        Setiap permintaan ke Sentra Gateway harus menyertakan API Key di header <code>x-sentra-key</code>.
      </p>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">Format Header:</p>
        <code className="text-sm text-muted">x-sentra-key: sk_test_xxxxxxxxxxxxxxxxxxxxx</code>
      </div>

      <h2 className="text-primary mb-4 mt-12">Keamanan Data</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Enkripsi In-Transit</p>
            <p className="text-muted text-sm">Semua data dienkripsi menggunakan TLS 1.2+</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Enkripsi At-Rest</p>
            <p className="text-muted text-sm">Data sensitif dienkripsi di database</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Rate Limiting</p>
            <p className="text-muted text-sm">Proteksi terhadap abuse dengan rate limiting per API Key</p>
          </div>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Best Practices</h2>

      <ol className="space-y-4">
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">1.</span>
          <div>
            <p className="font-bold text-foreground">Simpan API Key dengan Aman</p>
            <p className="text-muted text-sm">Gunakan environment variables, bukan hardcode di kode</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">2.</span>
          <div>
            <p className="font-bold text-foreground">Rotate Key Secara Berkala</p>
            <p className="text-muted text-sm">Buat key baru dan revoke yang lama setiap 90 hari</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">3.</span>
          <div>
            <p className="font-bold text-foreground">Monitor Penggunaan</p>
            <p className="text-muted text-sm">Periksa dashboard untuk aktivitas mencurigakan</p>
          </div>
        </li>
      </ol>
    </div>
  )
}
