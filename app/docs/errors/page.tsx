export default function ErrorsPage() {
  return (
    <div>
      <h1 className="text-primary mb-6">Error Handling & Retry</h1>

      <p className="text-lg text-muted mb-8 leading-relaxed">
        Panduan ini menjelaskan cara menangani error dan mengimplementasikan retry logic yang tepat.
      </p>

      <h2 className="text-primary mb-4 mt-12">Error Codes</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-bold text-foreground">Code</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Deskripsi</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                code: "SENTRA_AUTH_001",
                desc: "Invalid API Key",
                action: "Periksa API Key Anda",
              },
              {
                code: "SENTRA_RATE_001",
                desc: "Rate limit exceeded",
                action: "Tunggu dan retry dengan exponential backoff",
              },
              {
                code: "SENTRA_EKYC_001",
                desc: "Session invalid",
                action: "Buat session baru",
              },
              {
                code: "SENTRA_TIMEOUT_001",
                desc: "Request timeout",
                action: "Retry dengan timeout lebih lama",
              },
            ].map((error, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-3 px-4 text-muted font-mono">{error.code}</td>
                <td className="py-3 px-4 text-muted">{error.desc}</td>
                <td className="py-3 px-4 text-muted">{error.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-primary mb-4 mt-12">Retry Strategy</h2>

      <p className="text-muted mb-4">Gunakan exponential backoff untuk retry:</p>

      <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto mb-8">
        <pre>{`const maxRetries = 3;
let retries = 0;
let delay = 1000; // 1 second

while (retries < maxRetries) {
  try {
    const response = await fetch(url, options);
    if (response.ok) return response;
  } catch (error) {
    retries++;
    if (retries < maxRetries) {
      await new Promise(r => setTimeout(r, delay));
      delay *= 2; // exponential backoff
    }
  }
}`}</pre>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded">
        <p className="text-foreground">
          <span className="font-bold">Best Practice:</span> Jangan retry untuk error 4xx (kecuali 429), hanya untuk 5xx
          dan timeout.
        </p>
      </div>
    </div>
  )
}
