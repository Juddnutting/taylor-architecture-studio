import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taylorarchitecturestudio.com"),
  title: {
    default:
      "Taylor Architecture Studio | Residential Architect Boulder CO",
    template: "%s | Taylor Architecture Studio",
  },
  description:
    "Custom home design in Boulder County, Colorado. Thoughtful residential architecture for new homes, additions, and ADUs. Free consultation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Taylor Architecture Studio",
    images: [
      {
        url: "https://taylorarchitecturestudio.com/images/projects/miami-way/01.jpg",
        width: 1200,
        height: 800,
        alt: "Taylor Architecture Studio — Residential Architecture in Boulder County, CO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://taylorarchitecturestudio.com/images/projects/miami-way/01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
