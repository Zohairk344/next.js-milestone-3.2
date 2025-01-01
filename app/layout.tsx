import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { CartContextProvider } from "@/components/cartContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wishly",
  description: "Your one-stop shop for all your favorite products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Inter_init.variable} antialiased`}
      >
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
