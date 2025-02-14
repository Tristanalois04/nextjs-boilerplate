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
  openGraph: {
    title: "Aphelion - Industrial Visual Solutions",
    description:
      "We specialize in developing visual concepts that enable industrial companies to bring their ideas and products to life, transforming complex projects into clear, actionable solutions. Our approach optimizes technical and internal communication and creates a professional impact that facilitates investor attraction and enhances the value of each industrial proposal.",
    url: "https://example.com/", // Reemplaza con tu dominio real
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
      <body>{children}</body>
    </html>
  );
}


