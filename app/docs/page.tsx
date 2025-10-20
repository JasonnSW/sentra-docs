export default function DocsIndex() {
  return (
    <div>
      <h1 className="text-primary mb-6">Mulai: Integrasi Sentra</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Panduan ini membantu tim Anda mengintegrasikan modul Sentra secara bertahap. Semua contoh menggunakan data dan
        layanan sandbox (dummy).
      </p>

      <h2 className="text-primary mb-6 mt-12">Langkah-Langkah Integrasi</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            step: "1",
            title: "Dapatkan API Key (Sandbox)",
            desc: "Buka Dashboard Demo → API Keys → Buat kunci sandbox.",
          },
          {
            step: "2",
            title: "Panggilan API Pertama",
            desc: "Coba endpoint ping untuk memastikan kredensial.",
          },
          {
            step: "3",
            title: "Pilih Modul",
            desc: "Implementasikan e-KYC, Voice-QRIS, Detector, Manager, atau Sentra AI.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded border border-border">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
              {item.step}
            </div>
            <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Tip:</span> Semua endpoint sandbox bersifat dummy dan tidak terhubung ke sistem
          produksi. Gunakan untuk testing dan development.
        </p>
      </div>
    </div>
  )
}
