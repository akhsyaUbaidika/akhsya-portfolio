import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akhsya Portfolio",
  description: "Portfolio Akhsya Ubaidika",
  icons: {
    icon: "https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/sign/img/icon.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNWExMTFhMy01ODJlLTQ0MzYtYTdiMC0xMzhhM2U3NzAzY2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvaWNvbi5wbmciLCJpYXQiOjE3Nzg4NDA2MzIsImV4cCI6MTgxMDM3NjYzMn0.oyt4vDMfAAlbZIfe8i9G72xy4m-iIkn-tMFPXISOUYI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
