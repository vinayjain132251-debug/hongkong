import type { Metadata } from "next";
import { Montserrat, Mulish } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-nav",
});

export const metadata: Metadata = {
  title: "GovHK: Online Application Status Enquiry",

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}