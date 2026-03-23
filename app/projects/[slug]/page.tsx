import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAdjacentProjects, type MediaItem } from "@/data/projects";
import CaseStudyLayout from "@/components/CaseStudyLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

// Single media block
function MediaBlock({ media }: { media: MediaItem }) {
  return (
    <figure>
      <div className="rounded-xl overflow-hidden bg-stone-100">
        {media.type === "video" ? (
          <video src={media.src} autoPlay muted loop playsInline className="w-full h-auto" />
        ) : (
          <Image src={media.src} alt={media.caption ?? ""} width={900} height={500} className="w-full h-auto object-contain" />
        )}
      </div>
      {media.caption && (
        <figcaption className="pt-2 text-xs text-stone-400 font-mono text-center">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

// Renders a media item — if it has a .pair, renders both side-by-side
function MediaOrPair({ media }: { media: MediaItem }) {
  if (media.pair) {
    return (
      <div className="grid grid-cols-2 gap-4 my-6">
        <MediaBlock media={media} />
        <MediaBlock media={media.pair} />
      </div>
    );
  }
  return <div className="my-6"><MediaBlock media={media} /></div>;
}

// Renders a list of media items in sequence
function MediaList({ items }: { items: MediaItem[] }) {
  return (
    <>
      {items.map((m, i) => <MediaOrPair key={i} media={m} />)}
    </>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  let related: typeof projects;
  if (project.relatedSlugs && project.relatedSlugs.length > 0) {
    related = project.relatedSlugs
      .map((s) => projects.find((p) => p.slug === s))
      .filter(Boolean) as typeof projects;
  } else {
    const { prev, next } = getAdjacentProjects(slug);
    related = [prev, next].filter(Boolean) as typeof projects;
  }

  const { content } = project;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <CaseStudyLayout project={project} relatedProjects={related}>

        {/* ── OVERVIEW ─────────────────────────────────────────────── */}
        {content.overview && (
          <section id="overview" className="mb-20 scroll-mt-24">
            <p className="section-label mb-6">Overview</p>

            {content.overview.background && (
              <div className="mb-10 p-6 rounded-xl bg-stone-100 border-l-4 border-stone-300">
                <p className="text-stone-600 leading-relaxed text-sm">{content.overview.background}</p>
              </div>
            )}

            {content.overview.whyLLMs && (
              <div className="mb-10 p-6 rounded-xl bg-stone-100 border-l-4 border-stone-300">
                <p className="text-stone-600 leading-relaxed text-sm">{content.overview.whyLLMs}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              {content.overview.problem && (
                <div className="flex flex-col">
                  <h2 className="font-serif text-xl font-medium text-stone-900 mb-3">The Problem</h2>
                  <p className="text-stone-600 leading-relaxed text-sm">{content.overview.problem}</p>
                </div>
              )}
              {content.overview.goal && (
                <div className="flex flex-col">
                  <h2 className="font-serif text-xl font-medium text-stone-900 mb-3">The Goal</h2>
                  <p className="text-stone-600 leading-relaxed text-sm">{content.overview.goal}</p>
                </div>
              )}
            </div>

            {content.overview.problemMedia && (
              <div className="my-6"><MediaBlock media={content.overview.problemMedia} /></div>
            )}

            {content.overview.stats && (
              <div className="grid grid-cols-3 gap-3 rounded-2xl bg-stone-100 p-8 mb-12">
                {content.overview.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-stone-500 font-mono leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {content.overview.solutionSteps && (
              <div className="mb-12">
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-6">The Solution</h2>
                <div className="space-y-8">
                  {content.overview.solutionSteps.map((step) => (
                    <div key={step.number}>
                      <div className="flex gap-5 items-start mb-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-mono text-xs font-medium">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-serif text-base font-medium text-stone-900 mb-1">{step.title}</h3>
                          <p className="text-stone-600 leading-relaxed text-sm">{step.description}</p>
                        </div>
                      </div>
                      {step.media && <div style={{ paddingLeft: "3.25rem" }}><MediaOrPair media={step.media} /></div>}
                      {step.mediaList && <div style={{ paddingLeft: "3.25rem" }}><MediaList items={step.mediaList} /></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.overview.solutionPoints && (
              <div className="mb-12">
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-5">The Solution</h2>
                <ul className="space-y-3">
                  {content.overview.solutionPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                      <span className="text-stone-400 mt-0.5 flex-shrink-0">–</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {content.process && <hr className="border-stone-200 mb-20" />}

        {/* ── PROCESS ──────────────────────────────────────────────── */}
        {content.process && (
          <section id="process" className="mb-20 scroll-mt-24">
            <p className="section-label mb-4">Process</p>
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-12 max-w-2xl leading-snug">
              {content.process.title}
            </h2>
            <div className="space-y-14">
              {content.process.steps.map((step, i) => (
                <div key={step.id} id={step.id} className="relative pl-12 scroll-mt-24">
                  <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center font-mono text-xs text-stone-500 flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < content.process!.steps.length - 1 && (
                    <div className="absolute left-3.5 top-8 h-full w-px bg-stone-100" />
                  )}
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4 leading-snug">{step.title}</h3>

                  {/* Launching video link (OP) */}
                  {step.launchingVideo && (
                    <div className="mb-4">
                      <a
                        href={step.launchingVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stone-900 border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-100 transition-colors"
                      >
                        <span>▶</span> Watch launching video
                      </a>
                    </div>
                  )}

                  <ul className="space-y-2.5 mb-4">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                        <span className="text-stone-300 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {step.media && <MediaOrPair media={step.media} />}
                  {step.mediaList && <MediaList items={step.mediaList} />}
                </div>
              ))}
            </div>
          </section>
        )}

        {content.reflection && <hr className="border-stone-200 mb-20" />}

        {/* ── REFLECTION ───────────────────────────────────────────── */}
        {content.reflection && (
          <section id="reflection" className="mb-20 scroll-mt-24">
            <p className="section-label mb-4">Reflection</p>

            {content.reflection.contribution && (
              <div className="mb-12">
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-5">My Contribution</h2>
                <ul className="space-y-2">
                  {content.reflection.contribution.map((item, i) => (
                    <li key={i} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                      <span className="text-stone-400 mt-0.5 flex-shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h2 className="font-serif text-xl font-medium text-stone-900 mb-6">Challenges & Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {content.reflection.takeaways.map((item) => (
                <div key={item.title} className="rounded-xl bg-stone-50 border border-stone-200 p-6 flex flex-col">
                  <h3 className="font-serif text-base font-medium text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {content.reflection.feedbacks && content.reflection.feedbacks.length > 0 && (
              <div className="mb-14">
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-6">Feedback</h2>
                <div className="space-y-4">
                  {content.reflection.feedbacks.map((fb, i) => (
                    <blockquote key={i} className="border-l-2 border-stone-200 pl-5 py-1">
                      <p className="text-stone-600 text-sm italic leading-relaxed">{fb.quote}</p>
                      {fb.author && (
                        <cite className="text-stone-400 text-xs font-mono not-italic mt-1 block">{fb.author}</cite>
                      )}
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {content.reflection.nextSteps && (
              <div>
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-6">What&apos;s next</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.reflection.nextSteps.map((step) => (
                    <div key={step.title} className="border-t-2 border-stone-900 pt-4">
                      <h3 className="font-serif text-base font-medium text-stone-900 mb-2">{step.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

      </CaseStudyLayout>
    </div>
  );
}
