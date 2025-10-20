"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "API Reference", href: "/api-reference" },
    { label: "Dashboard", href: "/dashboard-demo" },
    { label: "Company", href: "/company" },
    { label: "Security", href: "/security" },
  ];

  return (
    <header className="relative bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#main-content" className="skip-to-content">
          Lompat ke konten utama
        </a>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desain%20tanpa%20judul%20%285%29%201%20%283%29-52FsQ9YrJti4z657Rj4bp9MxEiAdYy.png"
            alt="Sentra Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-primary hidden sm:inline">
            Sentra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            className="hidden sm:inline-block px-4 py-2 bg-white border-2 border-primary text-primary rounded font-medium text-sm"
          >
            Mulai dari Dokumentasi
          </Link>
          <Link
            href="/dashboard-demo"
            className="hidden sm:inline-block text-sm font-medium text-primary"
          >
            Login Dashboard
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground rounded"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Link
                href="/docs"
                className="block w-full px-4 py-2 bg-white border-2 border-primary text-primary rounded font-medium text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mulai dari Dokumentasi
              </Link>
              <Link
                href="/dashboard-demo"
                className="block w-full px-4 py-2 text-center text-sm font-medium text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
