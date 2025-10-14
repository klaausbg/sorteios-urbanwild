import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Sorteios Urban Wild",
  description: "Participe dos sorteios mensais da Urban Wild!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="pt-BR">
      <body className="bg-black text-white">
        {/* Header estilizado */}
        <header className="p-6">
          <nav className="flex space-x-6 text-xl">
            <Link
              href="/"
              className="text-white hover:text-green-500 transition-colors font-semibold"
            >
              Sorteio
            </Link>
            <Link
              href="/como-funciona"
              className="text-white hover:text-green-500 transition-colors font-semibold"
            >
              Como Funciona?
            </Link>
          </nav>
        </header>

        {/* Conteúdo das páginas */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
