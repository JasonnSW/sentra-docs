export default function AccessibilityPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Best Practices Aksesibilitas</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Panduan ini membantu Anda mengintegrasikan Sentra dengan cara yang paling aksesibel untuk pengguna.
      </p>

      <h2 className="text-primary mb-4 mt-12">WCAG 2.1 Compliance</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Kontras Tinggi</p>
            <p className="text-muted text-sm">Minimal 4.5:1 untuk teks normal, 3:1 untuk teks besar</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Fokus Terlihat</p>
            <p className="text-muted text-sm">Semua elemen interaktif harus memiliki focus ring yang jelas</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Navigasi Keyboard</p>
            <p className="text-muted text-sm">Semua fungsi harus dapat diakses dengan keyboard</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-primary font-bold">✓</span>
          <div>
            <p className="font-bold text-foreground">Screen Reader Compatible</p>
            <p className="text-muted text-sm">Kompatibel dengan TalkBack, VoiceOver, dan NVDA</p>
          </div>
        </li>
      </ul>

      <h2 className="text-primary mb-4 mt-12">Implementasi</h2>

      <ol className="space-y-4">
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">1.</span>
          <div>
            <p className="font-bold text-foreground">Gunakan Semantic HTML</p>
            <p className="text-muted text-sm">Gunakan button, form, label, dan elemen semantik lainnya</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">2.</span>
          <div>
            <p className="font-bold text-foreground">Tambahkan ARIA Labels</p>
            <p className="text-muted text-sm">Gunakan aria-label, aria-describedby untuk konteks tambahan</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary min-w-8">3.</span>
          <div>
            <p className="font-bold text-foreground">Test dengan Screen Reader</p>
            <p className="text-muted text-sm">Test dengan TalkBack (Android) atau VoiceOver (iOS)</p>
          </div>
        </li>
      </ol>
    </div>
  )
}
