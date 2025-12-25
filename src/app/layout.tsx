import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV GADJAH PERKASA - Konstruksi Gedung Lainnya Terpercaya",
  description: "CV GADJAH PERKASA adalah perusahaan konstruksi terpercaya untuk semua kebutuhan pembangunan gedung. Berpengalaman, profesional, dan berkualitas tinggi di Sumatera Selatan.",
  keywords: ["CV GADJAH PERKASA", "konstruksi", "gedung", "bangunan", "kontraktor", "Baturaja", "Ogan Komering Ulu", "Sumatera Selatan"],
  authors: [{ name: "CV GADJAH PERKASA" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV GADJAH PERKASA - Konstruksi Gedung Lainnya",
    description: "Perusahaan konstruksi terpercaya untuk semua kebutuhan pembangunan gedung Anda",
    siteName: "CV GADJAH PERKASA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV GADJAH PERKASA - Konstruksi Gedung",
    description: "Perusahaan konstruksi terpercaya untuk semua kebutuhan pembangunan gedung Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
