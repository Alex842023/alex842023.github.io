import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Aketi | Computer Science & Machine Learning",
  description: "The projects and experience of Surya Aketi: Penn State computer science, machine learning research, and useful tools for the desktop.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
