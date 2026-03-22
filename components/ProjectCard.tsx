"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/3] mb-4">
        {project.heroVideo ? (
          <video
            src={project.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${cardGradients[index % cardGradients.length]})`,
            }}
          />
        )}

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300" />

        {/* Badge */}
        {project.badge && (
          <span className="absolute top-3 left-3 badge-new z-10">{project.badge}</span>
        )}

        {/* View arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-900 text-sm font-medium shadow-sm">
            →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
        <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-stone-500 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed">{project.tagline}</p>
      </div>
    </Link>
  );
}

const cardGradients = [
  "#e8e0d5 0%, #c8bdb0 100%",
  "#dde8e0 0%, #b0c8ba 100%",
  "#e8e4d5 0%, #c8bfb0 100%",
  "#e0dde8 0%, #bab0c8 100%",
  "#e8d5d5 0%, #c8b0b0 100%",
  "#d5e8e4 0%, #b0c8c3 100%",
];
