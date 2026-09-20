import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { getNavigation, getPortfolio } from "./lib/content";
import Cursor from "./components/effects/Cursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const portfolio = getPortfolio();
const { seo, profile, social } = portfolio;

const navigation = getNavigation();

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s - ${profile.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: profile.name,
    ...(seo.ogImage
      ? {
          images: [
            { url: seo.ogImage, width: 1200, height: 630, alt: seo.title },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const REVEAL_READY_SCRIPT = `(function(){try{if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready');}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_READY_SCRIPT }} />
      </head>
      <Analytics />
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <Cursor />
        <Navbar
          name={profile.name}
          navigation={navigation}
          resumeHref={profile.resume}
        />
        <main id="main">{children}</main>
        <Footer name={profile.name} social={social} />
      </body>
    </html>
  );
}
