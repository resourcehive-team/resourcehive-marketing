import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3002",
  ),
  title: {
    default: "ResourceHive — Share more across campus",
    template: "%s | ResourceHive",
  },
  description:
    "Discover, share, and book resources across your university community with ResourceHive.",
  openGraph: {
    title: "ResourceHive — Share more across campus",
    description:
      "Discover, share, and book resources across your university community with ResourceHive.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 910,
        alt: "ResourceHive — Everything your campus has, shared better.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResourceHive — Share more across campus",
    description:
      "Discover, share, and book resources across your university community with ResourceHive.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
