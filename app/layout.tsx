import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display ({
  variable: "--font-playfair",
  weight: ["400", "900"],
  subsets: ["latin"]
})

const poppins = Poppins ({
  variable: "--font-poppins",
  weight: ["400", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Sinergi Laundry - Solusi Laundry Terpercaya",
  description: "Layanan laundry profesional: cuci lipat, dry cleaning, dan shoe care. Bersih, wangi, dan terjangkau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfairDisplay.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
