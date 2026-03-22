import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-sm text-stone-400 mb-4">404</p>
      <h1 className="font-serif text-4xl font-medium text-stone-900 mb-4">
        Page not found
      </h1>
      <p className="text-stone-500 mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
