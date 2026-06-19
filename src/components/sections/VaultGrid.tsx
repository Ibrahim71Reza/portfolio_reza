"use client";

import { useState } from "react";
import { PortfolioItem } from "@/content/schema";
import { UniversalCard } from "@/components/cards/UniversalCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "AI & ML", value: "ai" },
  { label: "Linux Tools", value: "linux-tool" },
];

export function VaultGrid({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
      
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
              activeCategory === cat.value ? "text-black" : "text-neutral-400 hover:text-white"
            )}
          >
            {activeCategory === cat.value && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* The Grid (Animated) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={item.id}
            >
              <UniversalCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredItems.length === 0 && (
        <div className="py-20 text-center text-neutral-500">
          No artifacts found in this category.
        </div>
      )}
    </div>
  );
}