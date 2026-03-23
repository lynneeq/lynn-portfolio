"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base font-medium text-stone-900 hover:text-stone-600 transition-colors"
        >
          Lynn Qian
        </Link>

        <nav aria-label="Main navigation">
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "text-stone-900" : ""}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
