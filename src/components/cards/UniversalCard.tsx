"use client";

import { PortfolioItem } from "@/content/schema";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Download, Cpu, ShoppingBag, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Next.js Link component

const IconMap = {
  github: GitBranch, 
  demo: ExternalLink,
  download: Download,
  huggingface: Cpu,
  store: ShoppingBag,
  paper: BookOpen,
};

export function UniversalCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-4 hover:border-neutral-700 hover:bg-neutral-800/50"
    >
      {/* 1. WRAPPED THE TOP HALF IN A LINK TO THE DETAIL PAGE */}
      <Link href={`/vault/${item.id}`} className="block">
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
          
          <div className="absolute top-2 left-2 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-neutral-300 backdrop-blur-md border border-neutral-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-neutral-100 group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
              {item.category.replace("-", " ")}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
            {item.description}
          </p>
        </div>
      </Link>

      {/* Bottom Half: External Links (Kept separate so they open new tabs) */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-neutral-800/50">
        {item.links.map((link, idx) => {
          const Icon = IconMap[link.type];
          return (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white relative z-10"
            >
              <Icon size={14} />
              <span className="capitalize">{link.label || link.type}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}