// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "./client-layout";

    "kebab Southall",
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
  metadataBase: new URL("https://yellowchilli.co.uk"),
  openGraph: {
    title: "Yellow Chilli | Indian & Afghan Cuisine in Southall",
    description:
      "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall. From aromatic biryanis to sizzling grills, enjoy authentic dishes in a warm, welcoming setting.",
    url: "https://yellowchilli.co.uk",
    siteName: "Yellow Chilli",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your Open Graph image
        width: 1200,
        height: 630,
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
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
