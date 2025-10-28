import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Raúl Argott - Portfolio",
  description: "Tech Lead • .NET & Azure Enthusiast • Portfolio and Demos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
