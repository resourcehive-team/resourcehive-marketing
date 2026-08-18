import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_MARKETING_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "ResourceHive — Share more across campus",
    template: "%s | ResourceHive",
  },
  description:
    "Discover, share, and book resources across your university community with ResourceHive.",
  icons: {
    icon: [{ url: "/resourcehive-mark.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "ResourceHive — Share more across campus",
    description:
      "Discover, share, and book resources across your university community with ResourceHive.",
    type: "website",
    images: [
      {
        url: "/og-editorial.png",
        width: 1731,
        height: 909,
        alt: "ResourceHive — A shared campus, within reach.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResourceHive — Share more across campus",
    description:
      "Discover, share, and book resources across your university community with ResourceHive.",
    images: ["/og-editorial.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
