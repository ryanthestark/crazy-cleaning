import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRAZY CLEANING — We Make Your Car Crazy Clean!",
  description: "Hendrix's car washing business. Small cars $5, SUVs $10, Trucks $40.",
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
