export default function FAQPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">FAQ</h1>

      <div className="space-y-8">
        {[
          {
            q: "Berapa lama waktu integrasi Sentra?",
            a: "Untuk modul dasar seperti e-KYC, biasanya 2-4 minggu. Untuk integrasi penuh, 6-8 minggu.",
          },
          {
            q: "Apakah Sentra mendukung bahasa lain?",
            a: "Saat ini Sentra mendukung Bahasa Indonesia. Dukungan bahasa lain sedang dalam pengembangan.",
          },
          {
            q: "Bagaimana dengan uptime Sentra?",
            a: "Kami menjamin 99.9% uptime dengan SLA yang jelas. Lihat halaman Security untuk detail.",
          },
          {
            q: "Bisakah saya menggunakan Sentra di aplikasi mobile?",
            a: "Ya, Sentra dapat diintegrasikan di aplikasi iOS dan Android melalui API kami.",
          },
          {
            q: "Apakah ada dokumentasi API yang lebih detail?",
            a: "Ya, kunjungi halaman API Reference untuk dokumentasi lengkap semua endpoint.",
          },
          {
            q: "Bagaimana jika saya menemukan bug?",
            a: "Hubungi support@sentra.id dengan detail bug dan kami akan segera menginvestigasi.",
          },
        ].map((item, i) => (
          <div key={i} className="border-l-4 border-primary pl-6 py-4">
            <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
            <p className="text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
