export default function BillingPage() {
  const billingBreakdown = [
    {
      category: "Pengguna Aktif",
      count: "5.400",
      unitPrice: "Rp1.200",
      total: "Rp 6.480.000",
    },
  ]

  const moduleBreakdown = [
    { module: "e-KYC", usage: "1.728", percentage: "32%" },
    { module: "QRIS", usage: "1.512", percentage: "28%" },
    { module: "Detector", usage: "1.080", percentage: "20%" },
    { module: "Manager", usage: "810", percentage: "15%" },
    { module: "AI", usage: "270", percentage: "5%" },
  ]

  return (
    <div>
      <h1 className="text-primary mb-8">Billing</h1>

      {/* Current Plan */}
      <div className="bg-white p-6 rounded border border-border mb-8">
        <h3 className="font-bold text-foreground mb-4">Paket Saat Ini</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted mb-1">Paket</p>
            <p className="text-lg font-bold text-foreground">Starter Pack</p>
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Biaya Tahunan</p>
            <p className="text-lg font-bold text-foreground">Rp 35.000.000</p>
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Biaya per Pengguna</p>
            <p className="text-lg font-bold text-foreground">Rp 1.200 / bulan</p>
          </div>
        </div>
      </div>

      {/* Billing Breakdown */}
      <div className="bg-white p-6 rounded border border-border mb-8">
        <h3 className="font-bold text-foreground mb-4">Breakdown Pengguna</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Kategori</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Jumlah</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Harga Satuan</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              {billingBreakdown.map((item, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">{item.category}</td>
                  <td className="py-3 px-4 text-muted">{item.count}</td>
                  <td className="py-3 px-4 text-muted">{item.unitPrice}</td>
                  <td className="py-3 px-4 text-foreground font-bold">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Module Usage */}
      <div className="bg-white p-6 rounded border border-border mb-8">
        <h3 className="font-bold text-foreground mb-4">Penggunaan per Modul (Bulan Ini)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold text-foreground">Modul</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Penggunaan</th>
                <th className="text-left py-3 px-4 font-bold text-foreground">Persentase</th>
              </tr>
            </thead>
            <tbody>
              {moduleBreakdown.map((item, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 px-4 text-foreground font-medium">{item.module}</td>
                  <td className="py-3 px-4 text-muted">{item.usage}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: item.percentage }} />
                      </div>
                      <span className="text-muted font-medium">{item.percentage}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Estimasi Bulanan */}
      <div className="bg-primary text-white p-8 rounded">
        <h3 className="font-bold mb-4 text-lg">Estimasi Billing Bulanan</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm opacity-90 mb-1">Pengguna Aktif</p>
            <p className="text-2xl font-bold">5.400</p>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">Biaya per Pengguna</p>
            <p className="text-2xl font-bold">Rp 1.200</p>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-1">Total Estimasi</p>
            <p className="text-2xl font-bold">Rp 6.480.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
