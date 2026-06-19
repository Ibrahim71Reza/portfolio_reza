import { allPortfolioItems } from "@/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// 1. Changed Github to GitBranch here!
import { ArrowLeft, GitBranch, ExternalLink, Download, Cpu, ShoppingBag, BookOpen } from "lucide-react";

const IconMap = {
  github: GitBranch, // 2. Updated IconMap
  demo: ExternalLink,
  download: Download,
  huggingface: Cpu,
  store: ShoppingBag,
  paper: BookOpen,
};

export async function generateStaticParams() {
  return allPortfolioItems.map((item) => ({
    id: item.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = allPortfolioItems.find((p) => p.id === id);

  if (!project) {
    notFound(); 
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/vault" 
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Vault
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden border border-neutral-800 mb-12">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
          {/* 3. Updated Tailwind v4 Gradient Syntax! */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-white bg-blue-500/20 border border-blue-500/50 rounded-full backdrop-blur-md">
              {project.category.replace("-", " ")}
            </span>
          </div>
        </div>

        {/* Header & Links Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 shrink-0">
            {project.links.map((link, idx) => {
              const Icon = IconMap[link.type];
              return (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <Icon size={18} />
                  <span className="capitalize">{link.label || link.type}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Description Section */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-neutral-800 pb-2">
            Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap text-lg">
            {project.description}
          </p>
        </div>
        
      </div>
    </main>
  );
}