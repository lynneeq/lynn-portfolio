import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected UX design and research projects by Lynn Qian — product design, research, and AI/ML experiences.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16">
        <p className="section-label mb-3">Portfolio</p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-5">
          Selected work
        </h1>
        <p className="text-lg text-stone-500 max-w-xl leading-relaxed">
          A selection of product design and research projects spanning AI tools,
          accessibility, blockchain, and digital learning.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
