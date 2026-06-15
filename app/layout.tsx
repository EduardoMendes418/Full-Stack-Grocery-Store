import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Grocery Store",
  description: "Full stack grocery store application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
