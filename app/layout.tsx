import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Abdallah Khaled Youssef | Data Engineer & Software Engineer",
  description:
    "Mid-Level Data Engineer at MCDR (Misr El-Makasa), specializing in Oracle SQL, PL/SQL, ETL, and Power BI, with full-stack software and applied AI projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><a href="#main-content" className="skip-link">Skip to content</a><div id="main-content">{children}</div></body>
    </html>
  );
}
