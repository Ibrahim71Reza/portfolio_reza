import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/providers/lenis-provider";
import { CommandMenu } from "@/components/layout/CommandMenu"; // <-- Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim Reza | Portfolio",
  description: "Software Engineer, Cybersecurity Researcher & UI/UX Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <LenisProvider>
          {children}
          <CommandMenu /> {/* <-- Add this right here! */}
        </LenisProvider>
      </body>
    </html>
  );
}