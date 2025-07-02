import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import RouteTransitionWrapper from "./components/RouteWrapper/RouteTransitionWrapper";
import { Analytics } from "@vercel/analytics/next"

// Font
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Global SEO Metadata
export const metadata: Metadata = {
  title: "Ashutosh Rath | Full Stack & GenAI Developer",
  description:
    "Ashutosh Rath's official portfolio showcasing projects, skills, and expertise in Full Stack Development, GenAI, and Cloud Solutions.",
  keywords: [
    "Ashutosh Rath",
    "Full Stack Developer",
    "GenAI Developer",
    "React",
    "Node.js",
    "AWS",
    "LangChain",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Ashutosh Rath", url: "https://ashutosh-portfolio.vercel.app/" }],
  creator: "Ashutosh Rath",
  publisher: "Ashutosh Rath",

  openGraph: {
    title: "Ashutosh Rath | Full Stack & GenAI Developer",
    description:
      "Explore Ashutosh's portfolio featuring React, Node, GenAI (LangChain), and Cloud projects.",
    url: "https://ashutosh-portfolio.vercel.app/",
    siteName: "Ashutosh Rath Portfolio",
    images: [
      {
        url: "/Preview.jpg", // Upload this
        width: 1200,
        height: 630,
        alt: "Ashutosh Rath Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Rath | Full Stack & GenAI Developer",
    description:
      "Visit Ashutosh's portfolio and see his latest projects in Web Dev and GenAI.",
    creator: "@iam_doomaf",
    images: ["/Preview.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={ubuntu.className}>
        <RouteTransitionWrapper>{children}</RouteTransitionWrapper>
        <Analytics />
      </body>
    </html>
  );
}
