import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdallah Khaled Abdelwahab | Full-Stack Engineer",
  description:
    "Full-Stack Engineer building modern, scalable web applications across the frontend and backend.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
