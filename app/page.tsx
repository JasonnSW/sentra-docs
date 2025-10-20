import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-6">
              Gateway API Inklusif untuk Perbankan & Dompet Digital
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Sentra menanamkan fitur aksesibilitas finansial langsung ke
              aplikasi mitra—agar nasabah dengan gangguan penglihatan dapat
              bertransaksi secara mandiri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/docs"
                className="px-6 py-3 bg-white border-2 border-primary text-primary rounded font-medium"
              >
                Mulai dari Dokumentasi
              </Link>
              <Link
                href="/dashboard-demo"
                className="px-6 py-3 bg-primary !text-white rounded font-medium"
              >
                Lihat Dashboard Demo
              </Link>
            </div>

            {/* Badge Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-medium">
              <div className="px-4 py-2 bg-gray-100 rounded text-foreground">
                ✓ Aksesibilitas untuk Gangguan Penglihatan
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded text-foreground">
                ✓ Integrasi Cepat & Modular
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded text-foreground">
                ✓ Kepatuhan WCAG 2.1 & PSrE
              </div>
            </div>
          </div>
        </section>

        {/* Value Blocks */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12 text-primary">
              Modul Unggulan Sentra
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "e-KYC Dipandu Suara",
                  desc: "Verifikasi KTP & wajah dengan panduan suara yang jelas, toleran pergeseran, dan ramah pembaca layar.",
                },
                {
                  title: "Voice-QRIS",
                  desc: "Pemandu kamera kiri/kanan/maju dan konfirmasi suara sebelum bayar, agar transaksi QR benar-benar mandiri.",
                },
                {
                  title: "Deteksi Nominal Uang",
                  desc: "Nominal disebutkan seketika, bahkan pada uang lusuh dan cahaya minim—praktis dan akurat.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded border border-border"
                >
                  <h3 className="text-primary mb-4">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-center mb-6 text-primary">
            Tanam Sekali, Manfaatkan di Seluruh Aplikasi
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Sentra berperan sebagai gateway API B2B antara bank/fintech dan
            pengguna akhir. Mitra memilih modul, mengintegrasikan melalui API,
            dan langsung menghadirkan pengalaman aksesibel tanpa mengubah
            arsitektur besar.
          </p>
          <div className="bg-gray-50 p-8 rounded border border-border text-center">
            <p className="text-lg font-medium text-foreground">
              Bank/E-Wallet ↔{" "}
              <span className="text-primary font-bold">
                Sentra Gateway (API)
              </span>{" "}
              ↔ Pengguna
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12 text-primary">Contoh Penerapan</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Perbankan",
                  desc: "Onboarding nasabah tunanetra dengan e-KYC yang ramah suara.",
                },
                {
                  title: "Dompet Digital",
                  desc: "Pembayaran QR mandiri dengan konfirmasi suara.",
                },
                {
                  title: "Aksesibilitas",
                  desc: "Fitur universal untuk nasabah low vision tanpa mengganggu alur yang ada.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded border border-border"
                >
                  <h3 className="text-primary mb-4">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Strip */}
            <div className="bg-primary !text-white p-8 rounded text-center">
              <h3 className="mb-6">Siap memperluas inklusi finansial?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-white text-primary rounded font-medium"
                >
                  Mulai dari Dokumentasi
                </Link>
                <a
                  href="mailto:partnership@sentra.id"
                  className="px-6 py-3 bg-white text-primary rounded font-medium"
                >
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
