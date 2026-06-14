import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anbu Tattoo | Custom Tattoo Art in Toronto",
  description: "Professional custom tattoo studio in Toronto. Book your consultation today. Unique designs, cover-ups, touch-ups, and more.",
  keywords: ["tattoo", "tattoo artist", "Toronto", "custom tattoo", "anbu tattoo"],
  openGraph: {
    title: "Anbu Tattoo | Custom Tattoo Art in Toronto",
    description: "Professional custom tattoo studio in Toronto. Book your consultation today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} ${bebas.variable} font-sans bg-[#0A0A0A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
