import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-sm text-muted">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-sm text-muted">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Dokumentasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted">
                  Mulai
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-muted">
                  Panduan Integrasi
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-muted">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-sm text-muted">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-muted">
                  Keamanan & Kepatuhan
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-sm text-muted">
                  Karier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@sentra.id" className="text-sm text-muted">
                  support@sentra.id
                </a>
              </li>
              <li>
                <a href="mailto:partnership@sentra.id" className="text-sm text-muted">
                  partnership@sentra.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">© 2025 Sentra. Semua hak dilindungi.</div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-sm text-muted">
              Ketentuan Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
