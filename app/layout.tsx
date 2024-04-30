import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Motion",
  description: "Where Progress meets Passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <section className=" bg-gray-50 flex items-center justify-center">
          <main className="w-full flex justify-center">
            {children}
          </main>
        </section>
        <Footer />
        <Toaster closeButton richColors expand position='bottom-right' />
      </body>
    </html>
  );
}
