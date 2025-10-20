export default function EKYCPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">e-KYC Dipandu Suara</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul e-KYC Sentra memungkinkan verifikasi KTP dan wajah dengan panduan suara yang jelas, toleran terhadap
        pergeseran, dan ramah pembaca layar.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Panduan suara real-time untuk pengguna</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Toleransi terhadap pergeseran dan rotasi dokumen</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Kompatibel dengan TalkBack dan VoiceOver</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Verifikasi wajah dengan liveness detection</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">POST /v1/ekyc/session</p>
        <p className="text-muted text-sm">Mulai sesi e-KYC baru</p>

        <p className="font-bold text-foreground mt-4 mb-2">Request Body:</p>
        <code className="text-sm text-muted block">
          {`{
  "nik": "1234567890123456",
  "nama": "John Doe",
  "birthdate": "1990-01-01"
}`}
        </code>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "session_id": "ekyc_sess_abc123",
  "status": "pending",
  "expires_at": "2025-10-20T12:00:00Z"
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Catatan:</span> Semua data di sandbox bersifat dummy. Untuk production, hubungi
          tim partnership kami.
        </p>
      </div>
    </div>
  )
}
