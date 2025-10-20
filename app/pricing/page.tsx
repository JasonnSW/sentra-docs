import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-6">
              Harga yang Jelas, Skema yang Fleksibel
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Mulai dari paket starter untuk pilot, hingga paket penuh untuk
              implementasi skala besar.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Starter Pack */}
              <div className="bg-white p-8 rounded border-2 border-border">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Starter Pack
                </h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-foreground">
                    Rp35.000.000
                  </p>
                  <p className="text-sm text-muted">/ tahun / 1 mitra</p>
                  <p className="text-sm text-muted mt-2">
                    + Rp1.200 / pengguna / bulan
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-border">
                  <p className="font-medium text-foreground mb-4">Termasuk:</p>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>1 modul bebas pilih</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Akses sandbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Dashboard demo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Dukungan email</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/docs"
                  className="w-full block text-center px-6 py-3 bg-primary !text-white rounded font-medium"
                >
                  Mulai Pilot
                </Link>
              </div>

              {/* Full Pack */}
              <div className="bg-white p-8 rounded border-2 border-primary shadow-lg">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4">
                  REKOMENDASI
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Full Pack
                </h3>
                <div className="mb-6">
                  <p className="text-sm text-muted mb-2">
                    Biaya integrasi awal
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    Rp50.000.000
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Bagi hasil Rp2.000 / pengguna / bulan
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-border">
                  <p className="font-medium text-foreground mb-4">Termasuk:</p>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        Semua modul: e-KYC, Voice-QRIS, Detector, Manager, AI,
                        Blog
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Prioritas dukungan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Peninjauan kepatuhan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Akses sandbox & production</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="mailto:partnership@sentra.id"
                  className="w-full block text-center px-6 py-3 bg-primary !text-white rounded font-medium"
                >
                  Ajukan Demo
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded text-center">
              <p className="text-sm text-foreground">
                <span className="font-medium">Catatan:</span> Harga di atas
                menggunakan data dummy untuk keperluan demo situs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-center mb-12 text-primary">Pertanyaan Umum</h2>

          <div className="space-y-6">
            {[
              {
                q: "Apakah saya bisa mencoba Sentra terlebih dahulu?",
                a: "Ya, paket Starter Pack dirancang untuk pilot. Anda mendapatkan akses sandbox dan dashboard demo untuk menguji integrasi.",
              },
              {
                q: "Bisakah saya menambah modul kemudian?",
                a: "Tentu saja. Anda dapat memulai dengan 1 modul di Starter Pack dan upgrade ke Full Pack kapan saja.",
              },
              {
                q: "Bagaimana dengan dukungan teknis?",
                a: "Starter Pack mendapat dukungan email. Full Pack mendapat prioritas dukungan dengan respons lebih cepat.",
              },
              {
                q: "Apakah ada biaya setup tambahan?",
                a: "Full Pack memiliki biaya integrasi awal Rp50.000.000. Starter Pack tidak ada biaya setup tambahan.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="px-6 py-3 bg-white text-primary rounded font-medium"
              >
                Mulai dari Dokumentasi
              </Link>
              <a
                href="mailto:partnership@sentra.id"
                className="px-6 py-3 border-2 border-white !text-white rounded font-medium"
              >
                Hubungi Kemitraan
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
