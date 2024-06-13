import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Header from "@/components/main-header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBlog",
  description: "Share and read blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='container mx-auto'>
        <Header />
        <ToastContainer position="top-center"/>
        {children}
      </body>
    </html>
  );
}
