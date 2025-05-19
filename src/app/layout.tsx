import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Ubuntu } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ashutosh Portfolio",
};


const ubuntu = Ubuntu({
  subsets: ['latin'],       // or ['latin-ext', 'cyrillic'], etc.
  weight: ['400', '700'],   // optional - choose needed weights
  display: 'swap',          // optional - improves performance
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  );
}
