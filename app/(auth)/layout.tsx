
import { Inter } from "next/font/google";
import '../global.css';
import type { Metadata } from "next";
import React from "react";

// Setting Up SEO
export const metadata: Metadata = {
  title: 'GreenLake',
  description: 'A social network app for smalll business owners'
}

const inter = Inter({ subsets: ['latin']});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body></body>
    </html>
  );

}


