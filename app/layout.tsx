import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aphelion - Industrial Visual Solutions",
  description:
    "We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions. Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.",
  keywords: [
    "industrial",
    "visual solutions",
    "3D visualization",
    "digital prototyping",
    "process optimization",
    "Aphelion",
  ],
  authors: [{ name: "Aphelion", url: "https://aphelion.com.mx" }],
  alternates: {
    canonical: "https://aphelion.com.mx/",
  },
  openGraph: {
    title: "Aphelion - Industrial Visual Solutions",
    description:
      "We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions. Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.",
    url: "https://aphelion.com.mx/",
    siteName: "Aphelion",
    images: [
      {
        url: "/aphelion.svg",
        width: 800,
        height: 600,
        alt: "Aphelion Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aphelion - Industrial Visual Solutions",
    description:
      "We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions. Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.",
    images: ["/aphelion.svg"],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Orbitron-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/dron.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


