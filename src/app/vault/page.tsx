import { allPortfolioItems } from "@/content";
import { VaultGrid } from "@/components/sections/VaultGrid";

export default function VaultPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          The Artifact Vault
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          A complete index of my software, research papers, extensions, and tools.
        </p>
      </div>

      {/* Pass all data to our animated client component */}
      <VaultGrid items={allPortfolioItems} />
    </main>
  );
}