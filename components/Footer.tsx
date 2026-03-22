import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-400 font-mono">
          © {year} Lynn Qian
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <a
            href="mailto:lynne.qian@yahoo.com"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/lynn-qian-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/about"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
