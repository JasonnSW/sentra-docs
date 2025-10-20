import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Security() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-6">Keamanan & Kepatuhan</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Keamanan data dan kepatuhan regulasi adalah fondasi kepercayaan kami. Kami berkomitmen untuk melindungi
              data pengguna dengan standar industri tertinggi.
            </p>
          </div>
        </section>

        {/* WCAG 2.1 Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12">WCAG 2.1 Compliance</h2>

            <div className="space-y-8">
              {[
                {
                  title: "Kontras Tinggi",
                  desc: "Semua teks dan elemen interaktif memenuhi standar kontras minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar, memastikan keterbacaan bagi pengguna dengan low vision.",
                },
                {
                  title: "Fokus Terlihat",
                  desc: "Setiap elemen interaktif memiliki focus ring yang jelas dan terlihat, memudahkan navigasi keyboard dan screen reader users.",
                },
                {
                  title: "Navigasi Keyboard",
                  desc: "Semua fungsi dapat diakses sepenuhnya melalui keyboard. Tidak ada fitur yang hanya dapat diakses dengan mouse.",
                },
                {
                  title: "Screen Reader Compatible",
                  desc: "Platform kami kompatibel dengan TalkBack (Android), VoiceOver (iOS), NVDA (Windows), dan JAWS. Semua konten dapat diakses melalui screen reader.",
                },
                {
                  title: "Ukuran Font Minimum",
                  desc: "Ukuran font minimum 16px untuk body text, memastikan keterbacaan optimal tanpa perlu zoom.",
                },
                {
                  title: "Semantic HTML",
                  desc: "Kami menggunakan semantic HTML elements (button, form, label, heading) untuk memastikan struktur dokumen yang jelas.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded border border-border">
                  <h3 className="text-primary font-bold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PSrE Alignment Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12">PSrE (Peraturan Sistem Registrasi Elektronik) Alignment</h2>

          <div className="bg-gray-50 p-8 rounded border border-border mb-8">
            <p className="text-muted leading-relaxed mb-6">
              Sentra dirancang dengan mempertimbangkan regulasi PSrE Indonesia. Alur tanda tangan elektronik kami
              menyesuaikan dengan praktik yang diakui dan future-ready untuk evolusi regulasi.
            </p>

            <div className="space-y-4">
              {[
                "Dukungan untuk berbagai metode autentikasi yang diakui secara hukum",
                "Audit trail lengkap untuk setiap transaksi dan tanda tangan elektronik",
                "Enkripsi end-to-end untuk semua data sensitif",
                "Compliance dengan standar keamanan informasi nasional",
                "Dokumentasi lengkap untuk keperluan audit dan compliance",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12">Keamanan Data</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-4">Enkripsi In-Transit</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>TLS 1.2+ untuk semua komunikasi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Certificate pinning untuk API calls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Perfect Forward Secrecy (PFS)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-4">Enkripsi At-Rest</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>AES-256 untuk data di database</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Encrypted backups dengan key rotation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Secure key management dengan HSM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-4">Access Control</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>API Key rotation dan revocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-4">Monitoring & Audit</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time security monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Comprehensive audit logs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Intrusion detection system (IDS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Policy Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12">Kebijakan Data</h2>

          <div className="space-y-8">
            {[
              {
                title: "Minimalisasi Data",
                desc: "Kami hanya mengumpulkan data yang benar-benar diperlukan untuk memberikan layanan. Data yang tidak perlu tidak disimpan.",
              },
              {
                title: "Retensi Data",
                desc: "Data pengguna disimpan hanya selama diperlukan untuk tujuan layanan. Setelah itu, data dihapus secara aman.",
              },
              {
                title: "Sharing Data",
                desc: "Kami tidak pernah membagikan data pengguna kepada pihak ketiga tanpa persetujuan eksplisit, kecuali diwajibkan oleh hukum.",
              },
              {
                title: "User Rights",
                desc: "Pengguna memiliki hak untuk mengakses, mengubah, atau menghapus data pribadi mereka kapan saja.",
              },
              {
                title: "Audit & Compliance",
                desc: "Kami secara rutin melakukan audit keamanan internal dan eksternal untuk memastikan compliance dengan standar industri.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center">Service Level Agreement (SLA)</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
                <p className="text-foreground font-bold mb-2">Uptime Guarantee</p>
                <p className="text-sm text-muted">Kami menjamin 99.9% uptime untuk semua layanan production.</p>
              </div>

              <div className="bg-white p-6 rounded border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">{"<"}500ms</p>
                <p className="text-foreground font-bold mb-2">p95 Latency</p>
                <p className="text-sm text-muted">Target latency p95 di bawah 500ms untuk semua endpoint.</p>
              </div>

              <div className="bg-white p-6 rounded border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-foreground font-bold mb-2">Support</p>
                <p className="text-sm text-muted">Tim support kami siap membantu 24 jam sehari, 7 hari seminggu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12">Incident Response</h2>

          <div className="bg-gray-50 p-8 rounded border border-border">
            <p className="text-muted mb-6 leading-relaxed">
              Kami memiliki prosedur incident response yang ketat untuk menangani masalah keamanan dengan cepat dan
              efektif.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1. Detection",
                  desc: "Sistem monitoring kami mendeteksi anomali dan potensi insiden secara real-time.",
                },
                {
                  step: "2. Assessment",
                  desc: "Tim security kami segera menilai dampak dan severity dari insiden.",
                },
                {
                  step: "3. Containment",
                  desc: "Kami mengambil tindakan untuk mengisolasi dan membatasi dampak insiden.",
                },
                {
                  step: "4. Notification",
                  desc: "Kami memberitahu pengguna yang terdampak dalam waktu 24 jam.",
                },
                {
                  step: "5. Resolution",
                  desc: "Kami bekerja untuk menyelesaikan insiden dan mencegah terulangnya.",
                },
                {
                  step: "6. Post-Mortem",
                  desc: "Kami melakukan analisis mendalam dan membagikan lessons learned.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-24 font-bold text-primary">{item.step}</div>
                  <p className="text-muted flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center">Sertifikasi & Standar</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                { cert: "ISO 27001", desc: "Information Security Management" },
                { cert: "WCAG 2.1 AA", desc: "Web Content Accessibility Guidelines" },
                { cert: "SOC 2 Type II", desc: "Service Organization Control" },
                { cert: "GDPR Compliant", desc: "General Data Protection Regulation" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded border border-border text-center">
                  <p className="text-lg font-bold text-primary mb-2">{item.cert}</p>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12 text-center">Pertanyaan Keamanan?</h2>

          <div className="bg-primary text-white p-8 rounded text-center max-w-2xl mx-auto">
            <p className="mb-6 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang keamanan, compliance, atau ingin melakukan security audit, silakan
              hubungi kami.
            </p>
            <a
              href="mailto:support@sentra.id"
              className="inline-block px-6 py-3 bg-white text-primary rounded font-medium"
            >
              Hubungi Tim Security
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
