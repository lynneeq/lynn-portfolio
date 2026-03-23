import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lynn Qian — UX Designer & Researcher",
    template: "%s | Lynn Qian",
  },
  description:
    "UX designer and researcher based in London. I design end-to-end product experiences that simplify complex systems, align with user needs, and move business metrics.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lynn-qian.com",
    siteName: "Lynn Qian",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-00GQTGDK1L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-00GQTGDK1L');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
