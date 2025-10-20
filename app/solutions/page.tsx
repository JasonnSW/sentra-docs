import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Solutions() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-6">Solusi yang Relevan untuk Berbagai Mitra</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Modul Sentra dapat dipasang terpisah atau digabung, mengikuti kebutuhan Anda.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Perbankan",
                  desc: "Percepat pembukaan rekening, KYC, dan transaksi tanpa hambatan visual. Cocok untuk bank nasional dan BPD. Contoh target potensial: BNI.",
                  icon: "🏦",
                },
                {
                  title: "E-Wallet",
                  desc: "Bantu pengguna memindai QR, konfirmasi nilai, dan mencatat transaksi dengan suara.",
                  icon: "💳",
                },
                {
                  title: "Aksesibilitas by Design",
                  desc: "Kompatibel dengan TalkBack/VoiceOver, fokus ring terlihat, dan kontras tinggi. Bukan fitur tambahan, tetapi standar layanan.",
                  icon: "♿",
                },
              ].map((solution, i) => (
                <div key={i} className="bg-white p-8 rounded border border-border hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-primary mb-4 text-2xl">{solution.title}</h3>
                  <p className="text-muted leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Detail */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-center mb-12 text-primary">Modul Sentra yang Tersedia</h2>

          <div className="space-y-12">
            {[
              {
                title: "e-KYC Dipandu Suara",
                desc: "Verifikasi KTP & wajah dengan pemandu suara yang jelas dan toleran pergeseran—ramah pembaca layar.",
              },
              {
                title: "Voice-QRIS",
                desc: "Ikuti instruksi suara untuk mengarahkan kamera. Nilai dibacakan ulang sebelum bayar—aman dan mandiri.",
              },
              {
                title: "Sentra Detector",
                desc: "Nominal uang disebutkan seketika, akurat bahkan pada uang lusuh dan cahaya minim.",
              },
              {
                title: "Sentra Manager",
                desc: "Cukup ucapkan pemasukan/pengeluaran, dan sistem mencatat otomatis, rapi, dan mudah ditinjau.",
              },
              {
                title: "Sentra AI",
                desc: "Asisten suara lintas halaman: perintah dieksekusi, hasil dikonfirmasi.",
              },
              {
                title: "Sentra Blog",
                desc: "Materi finansial yang dapat didengarkan per paragraf, memudahkan pemahaman tanpa bergantung visual.",
              },
            ].map((module, i) => (
              <div key={i} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-primary mb-2 text-xl">{module.title}</h3>
                <p className="text-muted leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6">Siap mengintegrasikan solusi Sentra?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="px-6 py-3 bg-white text-primary rounded font-medium">
                Mulai dari Dokumentasi
              </Link>
              <a href="mailto:partnership@sentra.id" className="px-6 py-3 bg-white text-primary rounded font-medium">
                Hubungi
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
