import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFT Dashboard",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}