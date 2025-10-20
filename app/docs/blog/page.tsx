export default function BlogPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Sentra Blog</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Modul Blog menyediakan materi finansial yang dapat didengarkan per paragraf, memudahkan pemahaman tanpa
        bergantung visual.
      </p>

      <h2 className="text-primary mb-4 mt-12">Fitur Utama</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Pembacaan konten per paragraf</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Kecepatan pembacaan yang dapat disesuaikan</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Navigasi antar artikel dengan mudah</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted">Bookmark dan catatan pribadi</span>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Endpoint</h2>

      <div className="bg-gray-50 p-6 rounded border border-border mb-8">
        <p className="font-bold text-foreground mb-2">GET /v1/blog/articles</p>
        <p className="text-muted text-sm">Dapatkan daftar artikel</p>

        <p className="font-bold text-foreground mt-4 mb-2">Response:</p>
        <code className="text-sm text-muted block">
          {`{
  "articles": [
    {
      "id": "blog_001",
      "title": "Panduan Mengelola Keuangan Pribadi",
      "category": "personal-finance",
      "audio_url": "https://audio.sentra.id/blog_001.mp3"
    }
  ]
}`}
        </code>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Tip:</span> Gunakan fitur bookmark untuk menyimpan artikel favorit dan kembali ke
          sana nanti.
        </p>
      </div>
    </div>
  )
}
