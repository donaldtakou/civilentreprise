import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CivilEntreprise - Entreprise BTP au Cameroun",
  description: "Entreprise de BTP spécialisée dans le gros œuvre, terrassement, maçonnerie et rénovation partout au Cameroun. Devis gratuit sous 48h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
