"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base font-medium text-stone-900 hover:text-stone-600 transition-colors"
        >
          Lynn Qian
        </Link>

        <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-8">
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "text-stone-900" : ""}`}
          >
            About
          </Link>
        </nav>

        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-px bg-stone-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-stone-700 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-stone-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-stone-100 bg-stone-50 px-6 py-4 flex flex-col gap-4">
          <Link href="/about" className="nav-link text-base" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}
    </header>
  );
}
