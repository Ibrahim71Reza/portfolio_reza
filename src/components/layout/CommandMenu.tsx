"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Monitor, Terminal, Cpu, FileText, Code } from "lucide-react";
import { allPortfolioItems } from "@/content";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Don't render anything if it's closed
  if (!open) return null;

  return (
    <>
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* The Command Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl">
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
          
          {/* Search Input */}
          <div className="flex items-center border-b border-neutral-800 px-3">
            <Search className="mr-2 h-5 w-5 shrink-0 text-neutral-500" />
            <Command.Input 
              autoFocus
              placeholder="Search tools, papers, apps..." 
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-500"
            />
            <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-2 font-mono text-[10px] font-medium text-neutral-400">
              ESC
            </kbd>
          </div>

          {/* Search Results List */}
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-neutral-500">
              No results found.
            </Command.Empty>

            <Command.Group heading="Projects & Artifacts" className="px-2 py-1.5 text-xs font-medium text-neutral-400">
              {allPortfolioItems.map((item) => (
                <Command.Item
                  key={item.id}
                  value={`${item.title} ${item.tags.join(" ")}`}
                  onSelect={() => {
                    // For now, let's just open the first link available!
                    // Later, we will route this to a dedicated project page.
                    if (item.links.length > 0) {
                      window.open(item.links[0].url, "_blank");
                    }
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-200 transition-colors hover:bg-neutral-800 aria-selected:bg-neutral-800 aria-selected:text-white"
                >
                  {/* Dynamic Icon based on Category */}
                  {item.category === "web" && <Monitor className="h-4 w-4 text-neutral-500" />}
                  {item.category === "linux-tool" && <Terminal className="h-4 w-4 text-neutral-500" />}
                  {item.category === "ai" && <Cpu className="h-4 w-4 text-neutral-500" />}
                  {item.category === "research" && <FileText className="h-4 w-4 text-neutral-500" />}
                  {(!["web", "linux-tool", "ai", "research"].includes(item.category)) && <Code className="h-4 w-4 text-neutral-500" />}
                  
                  <div className="flex flex-col">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-neutral-500 line-clamp-1">{item.description}</span>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </>
  );
}