import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/providers/lenis-provider";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer"; // 1. Import the Footer

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
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}> {/* 2. Added flex & min-h-screen to body */}
        <LenisProvider>
          <Navbar />
          
          {/* 3. Wrap children in a flex-grow div so the footer always stays at the bottom! */}
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer /> {/* 4. Add the Footer here */}
          <CommandMenu />
        </LenisProvider>
      </body>
    </html>
  );
}