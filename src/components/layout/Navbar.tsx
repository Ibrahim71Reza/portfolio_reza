"use client";

import Link from "next/link";
// 1. Replaced Github & Linkedin with Code2 & Briefcase
import { Search, Code2, Briefcase, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-neutral-800/60 bg-neutral-950/60 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-sm font-bold text-white tracking-widest uppercase">
          Reza<span className="text-blue-500">.</span>
        </Link>
        
        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link 
            href="/" 
            className={cn("hover:text-white transition-colors", pathname === "/" && "text-white")}
          >
            Home
          </Link>
          <Link 
            href="/vault" 
            className={cn("hover:text-white transition-colors", pathname === "/vault" && "text-white")}
          >
            The Vault
          </Link>
        </nav>

        {/* Right Side: Socials & Command Hint */}
        <div className="flex items-center gap-4">
          
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-500 text-xs font-medium cursor-default">
            <Search size={14} />
            <span>Search</span>
            <kbd className="ml-1 rounded bg-neutral-800 px-1.5 font-mono text-[10px]">⌘K</kbd>
          </div>

          <div className="h-4 w-px bg-neutral-800 hidden md:block"></div>

          {/* Social Icons */}
          <Link href="https://github.com" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
            <Code2 size={18} /> {/* Using Code2 instead of Github */}
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
            <Briefcase size={18} /> {/* Using Briefcase instead of Linkedin */}
          </Link>
          <Link href="mailto:your@email.com" className="text-neutral-400 hover:text-white transition-colors">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}