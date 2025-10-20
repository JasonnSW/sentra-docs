"use client";

import type React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const dashboardSections = [
  { label: "Overview", href: "/dashboard-demo" },
  { label: "API Keys", href: "/dashboard-demo/api-keys" },
  { label: "Logs", href: "/dashboard-demo/logs" },
  { label: "Billing", href: "/dashboard-demo/billing" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-border transform transition-transform lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: "var(--header-height, 0)" }}
        >
          <div className="p-6 space-y-2">
            <h3 className="font-bold text-sm text-foreground mb-4">
              Dashboard
            </h3>
            {dashboardSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  pathname === section.href
                    ? "bg-primary !text-white font-bold"
                    : "text-foreground hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {section.label}
              </Link>
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </>
  );
}
