"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface CaseStudyLayoutProps {
  project: Project;
  relatedProjects?: Project[];
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  project,
  relatedProjects = [],
  children,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const sectionIds = project.sections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [project.sections]);

  // Ensure exactly 2 related projects
  const shown = relatedProjects.slice(0, 2);

  return (
    <>
      {/* Sidebar — fixed to left, top-aligned with the "← All work" back link (pt-14 = nav height) */}
      {project.sections.length > 0 && (
        <aside className="hidden xl:block fixed left-8 w-40 z-40" style={{ top: "calc(3.5rem + 2rem)" }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 text-xs font-mono text-stone-400 hover:text-stone-700 transition-colors mb-3 w-full"
            aria-expanded={sidebarOpen}
          >
            <span
              className="inline-block transition-transform duration-200"
              style={{ transform: sidebarOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ▶
            </span>
            <span className="uppercase tracking-widest">Quick Links</span>
          </button>

          <nav
            aria-label="Section navigation"
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: sidebarOpen ? "400px" : "0px", opacity: sidebarOpen ? 1 : 0 }}
          >
            <div className="border-l border-stone-200 pl-4 space-y-1">
              {project.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block text-sm py-1.5 transition-all duration-150 leading-snug ${
                    activeSection === section.id
                      ? "text-stone-900 font-medium border-l-2 border-stone-900 -ml-4 pl-3.5"
                      : "text-stone-400 hover:text-stone-700"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>
        </aside>
      )}

      {/* Main content — centred, unaffected by sidebar */}
      <article>
        <header className="border-b border-stone-100 pb-12 mb-12">
          <div className="mb-8">
            <Link href="/" className="btn-ghost text-xs">← All work</Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.badge && <span className="badge-new">{project.badge}</span>}
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-6 leading-tight max-w-3xl">
            {project.title}
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
            {project.content.intro}
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { label: "Role", value: project.role },
              { label: "Timeline", value: project.timeline },
              ...(project.company ? [{ label: "Company", value: project.company }] : []),
              ...(project.stakeholders ? [{ label: "Stakeholders", value: project.stakeholders }] : []),
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="section-label block mb-0.5">{label}</span>
                <span className="text-sm text-stone-600">{value}</span>
              </div>
            ))}
            {project.prototypeUrl && (
              <div>
                <span className="section-label block mb-0.5">Prototype</span>
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-900 hover:underline underline-offset-4"
                >
                  View live ↗
                </a>
              </div>
            )}
          </div>
        </header>

        {children}

        {shown.length > 0 && (
          <section className="mt-24 pt-16 border-t border-stone-100">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-serif text-2xl font-medium text-stone-900">Other projects</h2>
              <Link href="/" className="btn-ghost text-xs">All work →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {shown.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
