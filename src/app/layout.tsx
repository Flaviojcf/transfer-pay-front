import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TransferPay",
  description: "Created by @FlavioJcf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-customGreen">{children}</body> 
    </html>
  );
}
