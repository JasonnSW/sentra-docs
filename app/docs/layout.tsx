"use client";

import type React from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const docSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Mulai: Integrasi Sentra", href: "/docs" },
      { label: "Dapatkan API Key", href: "/docs/api-key" },
      { label: "Panggilan API Pertama", href: "/docs/first-call" },
    ],
  },
  {
    title: "Auth & Keamanan",
    items: [{ label: "Auth & Keamanan", href: "/docs/auth" }],
  },
  {
    title: "Integrasi per Modul",
    items: [
      { label: "e-KYC Dipandu Suara", href: "/docs/ekyc" },
      { label: "Voice-QRIS", href: "/docs/qris" },
      { label: "Sentra Detector", href: "/docs/detector" },
      { label: "Sentra Manager", href: "/docs/manager" },
      { label: "Sentra AI", href: "/docs/ai" },
      { label: "Sentra Blog", href: "/docs/blog" },
    ],
  },
  {
    title: "Referensi",
    items: [
      { label: "Error Handling & Retry", href: "/docs/errors" },
      { label: "Best Practices Aksesibilitas", href: "/docs/accessibility" },
      { label: "FAQ", href: "/docs/faq" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="w-screen min-h-full relative">
      <Header />
      <div className="relative min-h-screen bg-white lg:grid lg:grid-cols-[16rem_1fr]">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r border-border transform transition-transform lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-8 overflow-y-auto h-full">
            {docSections.map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-sm text-foreground mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors ${
                          pathname === item.href
                            ? "text-primary font-bold"
                            : "text-muted hover:text-foreground"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Mobile Menu Button */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-border p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-foreground hover:bg-gray-100 rounded"
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Footer />
    </main>
  );
}
