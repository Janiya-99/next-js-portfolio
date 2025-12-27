import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google"; // Import Syne and Inter
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Layout/Navbar";
import { Preloader } from "@/components/Layout/Preloader";
import { ScrollToTop } from "@/components/Layout/ScrollToTop";
 // We will create this

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Janith Samarasinghe | Software Engineer",
  description: "Portfolio of Janith Samarasinghe, a dedicated Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased bg-main text-[#ffffff]">
        <Preloader />
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
