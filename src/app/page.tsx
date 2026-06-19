import Link from "next/link";
import { getFeaturedItems } from "@/content";
import { UniversalCard } from "@/components/cards/UniversalCard";
import { BackgroundBeams } from "@/components/effects/background-beams";
// 1. Add these two imports
import { Timeline } from "@/components/sections/Timeline";
import { experienceData } from "@/content/experience";

export default function Home() {
  const featuredProjects = getFeaturedItems();

  return (
    <main className="min-h-screen flex flex-col items-center pt-40 pb-24 px-6 relative overflow-hidden bg-neutral-950">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-[60vh] pointer-events-none" />

      {/* Hero Section */}
      <div className="z-10 text-center max-w-3xl mb-32 relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
          Ibrahim Reza
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
          Software Engineer & Security Researcher. <br />
          Building tools, algorithms, and applications.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/vault" 
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View My Work
          </Link>
          <button className="px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:bg-neutral-800 transition-colors backdrop-blur-md bg-neutral-900/30">
            Contact Me
          </button>
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="w-full max-w-6xl z-10 mb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-200">Featured Artifacts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <UniversalCard key={project.id} item={project} />
          ))}
        </div>
      </div>

      {/* 2. Add the Timeline Section here! */}
      <div className="w-full z-10 border-t border-neutral-800/50 pt-20">
        <Timeline items={experienceData} />
      </div>

    </main>
  );
}