import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Company() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-6">Tentang Sentra</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Sentra adalah platform gateway API B2B yang berfokus pada aksesibilitas finansial bagi pengguna dengan
              gangguan penglihatan. Kami membangun teknologi yang memerdekakan, bukan sekadar memudahkan.
            </p>
          </div>
        </section>

        {/* Visi Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center">Visi & Misi</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
                <p className="text-muted leading-relaxed">
                  Menciptakan ekosistem finansial digital yang sepenuhnya inklusif, di mana setiap orang—terlepas dari
                  kemampuan visual mereka—dapat mengakses dan mengelola layanan keuangan dengan mandiri, aman, dan
                  percaya diri.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
                <p className="text-muted leading-relaxed">
                  Menyediakan teknologi gateway API yang mudah diintegrasikan, memungkinkan bank dan fintech untuk
                  menanamkan fitur aksesibilitas finansial langsung ke aplikasi mereka tanpa perlu mengubah arsitektur
                  besar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12 text-center">Nilai-Nilai Kami</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aksesibilitas Pertama",
                desc: "Aksesibilitas bukan fitur tambahan, tetapi fondasi dari setiap keputusan desain dan teknis kami.",
              },
              {
                title: "Pemberdayaan Pengguna",
                desc: "Kami percaya pada teknologi yang memberdayakan pengguna untuk mandiri, bukan sekadar memudahkan.",
              },
              {
                title: "Kolaborasi Terbuka",
                desc: "Kami bekerja sama dengan mitra untuk memahami kebutuhan nyata dan terus berinovasi.",
              },
              {
                title: "Keamanan Data",
                desc: "Privasi dan keamanan data pengguna adalah prioritas utama dalam setiap aspek platform kami.",
              },
              {
                title: "Inovasi Berkelanjutan",
                desc: "Kami terus belajar dan berinovasi untuk memberikan solusi terbaik bagi komunitas kami.",
              },
              {
                title: "Transparansi",
                desc: "Kami transparan tentang kemampuan, keterbatasan, dan roadmap produk kami.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded border border-border">
                <h3 className="text-primary font-bold mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center">Tim Kami</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Richard",
                  role: "CEO",
                  bio: "Visioner dalam membangun ekosistem finansial yang inklusif dan accessible untuk semua.",
                },
                {
                  name: "Kadek Nandana Tyo Nayotama",
                  role: "CTO",
                  bio: "Teknolog berpengalaman dalam mengembangkan solusi API yang robust dan scalable.",
                },
                {
                  name: "Jason Surya Wijaya",
                  role: "CMO",
                  bio: "Strategist marketing yang fokus pada membangun brand awareness dan customer engagement.",
                },
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 rounded border border-border text-center">
                  <h3 className="font-bold text-foreground mb-1 text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted mb-6">
                Tim kami terus berkembang. Kami mencari talenta yang passionate tentang aksesibilitas.
              </p>
              <a
                href="mailto:partnership@sentra.id"
                className="inline-block px-6 py-3 bg-white border-2 border-primary text-primary rounded font-medium"
              >
                Lihat Lowongan Karir
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-primary mb-12 text-center">Hubungi Kami</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-6 rounded border border-border">
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <p className="text-muted mb-4">Untuk pertanyaan teknis dan dukungan integrasi:</p>
              <a href="mailto:support@sentra.id" className="text-primary font-medium">
                support@sentra.id
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded border border-border">
              <h3 className="font-bold text-foreground mb-4">Partnership</h3>
              <p className="text-muted mb-4">Untuk peluang kemitraan dan kolaborasi:</p>
              <a href="mailto:partnership@sentra.id" className="text-primary font-medium">
                partnership@sentra.id
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
