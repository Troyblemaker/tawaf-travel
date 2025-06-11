import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const roboto = Roboto({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Tawaf Travel",
  description: "Tawaf Travel Agency - Travel Haji & Umrah Beramanah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
