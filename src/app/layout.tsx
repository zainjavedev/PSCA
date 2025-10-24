import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { goli } from "@/app/fonts";

export const metadata: Metadata = {
  title: {
    default: "PSCA",
    template: "%s | PSCA",
  },
  description: "PSCA — Community sports, events, and programs for all ages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={goli.variable}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
