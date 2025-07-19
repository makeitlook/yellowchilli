// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "Yellow Chilli | Indian & Afghan Cuisine in Southall",
    template: "%s | Yellow Chilli",
  },
  description:
    "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall. From aromatic biryanis to sizzling grills, enjoy authentic dishes in a warm, welcoming setting.",
  keywords: [
    "Yellow Chilli Southall",
    "Indian restaurant Southall",
    "Afghan restaurant Southall",
    "Indian Afghan cuisine",
    "best kebab Southall",
    "South Asian food Southall",
    "tandoori grill Southall",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yellowchilli.co.uk"),
  openGraph: {
    title: "Yellow Chilli | Indian & Afghan Cuisine in Southall",
    description:
      "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall. From aromatic biryanis to sizzling grills, enjoy authentic dishes in a warm, welcoming setting.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yellowchilli.co.uk",
    siteName: "Yellow Chilli",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Yellow Chilli social image",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yellow Chilli | Indian & Afghan Cuisine in Southall",
    description:
      "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall. From aromatic biryanis to sizzling grills, enjoy authentic dishes in a warm, welcoming setting.",
    images: ["/images/og-default.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="bg-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
