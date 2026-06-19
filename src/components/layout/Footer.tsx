"use client";

import Link from "next/link";
// 1. Swapped brand icons for standard UI icons (Code2, Briefcase, Globe)
import { Mail, Code2, Briefcase, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Left Column: CTA */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">
              {/* 2. Fixed the unescaped entity (Let's -> Let&apos;s) */}
              Let&apos;s build something <br className="hidden md:block" />
              extraordinary together.
            </h2>
            <p className="text-neutral-400 max-w-md mb-8">
              Currently open for new opportunities, freelance projects, and research collaborations. 
              My inbox is always open.
            </p>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
              Connect
            </h3>
            <nav className="flex flex-col gap-4">
              <Link 
                href="https://github.com/Ibrahim71Reza" 
                target="_blank"
                className="group flex items-center justify-between text-neutral-400 hover:text-white transition-colors"
              >
                {/* 3. Updated Icons here */}
                <span className="flex items-center gap-2"><Code2 size={18} /> GitHub</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              
              <Link 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                className="group flex items-center justify-between text-neutral-400 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2"><Briefcase size={18} /> LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              <Link 
                href="https://twitter.com/yourhandle" 
                target="_blank"
                className="group flex items-center justify-between text-neutral-400 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2"><Globe size={18} /> Twitter / X</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Ibrahim Reza. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>Built with</span>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Next.js 15
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}