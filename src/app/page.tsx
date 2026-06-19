import { getFeaturedItems } from "@/content";
import { UniversalCard } from "@/components/cards/UniversalCard";

export default function Home() {
  // Fetch only the projects you marked as 'featured: true'
  const featuredProjects = getFeaturedItems();

  return (
    <main className="min-h-screen flex flex-col items-center pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="z-10 text-center max-w-3xl mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Ibrahim Reza
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-8">
          Software Engineer & Security Researcher. <br />
          Building tools, algorithms, and applications.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
            View My Work
          </button>
          <button className="px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:bg-neutral-800 transition-colors">
            Contact Me
          </button>
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="w-full max-w-6xl z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-200">Featured Artifacts</h2>
        </div>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <UniversalCard key={project.id} item={project} />
          ))}
        </div>
      </div>

    </main>
  );
}