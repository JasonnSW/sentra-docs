import Link from "next/link"

export default function ApiKeyPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Dapatkan API Key (Sandbox)</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        API Key diperlukan untuk mengautentikasi setiap permintaan ke Sentra Gateway. Ikuti langkah di bawah untuk
        membuat kunci sandbox.
      </p>

      <h2 className="text-primary mb-4 mt-12">Langkah-Langkah</h2>

      <ol className="space-y-6 mb-12">
        <li className="flex gap-4">
          <span className="font-bold text-primary min-w-8">1.</span>
          <div>
            <p className="font-bold text-foreground mb-2">Buka Dashboard Demo</p>
            <p className="text-muted">
              Kunjungi{" "}
              <Link href="/dashboard-demo" className="text-primary hover:underline">
                /dashboard-demo
              </Link>{" "}
              dan login dengan akun Anda.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-primary min-w-8">2.</span>
          <div>
            <p className="font-bold text-foreground mb-2">Navigasi ke API Keys</p>
            <p className="text-muted">Di sidebar, pilih menu "API Keys".</p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-primary min-w-8">3.</span>
          <div>
            <p className="font-bold text-foreground mb-2">Buat Kunci Baru</p>
            <p className="text-muted">Klik tombol "Create New Key" dan pilih environment "Sandbox".</p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="font-bold text-primary min-w-8">4.</span>
          <div>
            <p className="font-bold text-foreground mb-2">Simpan Kunci Anda</p>
            <p className="text-muted">
              Kunci akan ditampilkan sekali saja. Simpan di tempat yang aman (misalnya .env file).
            </p>
          </div>
        </li>
      </ol>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">Format Kunci Sandbox:</p>
        <code className="text-sm text-muted">sk_test_xxxxxxxxxxxxxxxxxxxxx</code>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Keamanan:</span> Jangan pernah bagikan API Key Anda. Jika terjadi kebocoran,
          segera revoke kunci lama dan buat yang baru.
        </p>
      </div>
    </div>
  )
}
