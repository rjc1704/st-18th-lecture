import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-3 bg-yellow-200">
          <Link href="/login">로그인 모달 열기</Link>
          <Link href="/">홈으로</Link>
        </nav>
        {auth}
        {children}
      </body>
    </html>
  );
}
