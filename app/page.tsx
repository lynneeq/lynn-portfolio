import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const values = [
  {
    icon: <span className="text-2xl">&#x1F465;</span>,
    title: "Cross-functional collaboration",
    body: "I work closely with PMs, engineers, and data teams to turn ideas into shipped features, aligning with product OKRs.",
  },
  {
    icon: <span className="text-2xl">&#x1F4CA;</span>,
    title: "Research ownership",
    body: "I lead both qualitative and quantitative user research and turn findings into clear product decisions that teams can act on.",
  },
  {
    icon: <span className="text-2xl">&#x1F4BB;</span>,
    title: "Experience design",
    body: "I design flows and interfaces that elevate user experience, with explicit rationale for interaction, layout, and states.",
  },
  {
    icon: <span className="text-2xl">&#x2728;</span>,
    title: "Innovation driven by curiosity",
    body: "I experiment with new tools and technology to solve user and business problems.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════════════ */}
      <section id="hero" className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="flex-1">
            <p className="section-label mb-5 animate-fade-up">UX Designer & Researcher · London</p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-stone-900 leading-tight mb-7 animate-fade-up delay-100">
              Hi, I&apos;m <i>Lynn Qian.</i>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 animate-fade-up delay-200 max-w-lg">
              I design end-to-end product experiences that simplify complex systems, align with user needs, and move business metrics.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href="#my-projects" className="btn-primary">See my work</a>
              <Link href="/about" className="btn-ghost">About me →</Link>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-up delay-200">
            <div className="relative w-52 h-52 md:w-64 md:h-64 overflow-hidden bg-stone-100 shadow-sm" style={{ borderRadius: "999px" }}>
              <Image src="/images/profile.avif" alt="Lynn Qian" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELECTED WORK ═════════════════════════════════════════════ */}
      <section id="my-projects" className="max-w-5xl mx-auto px-6 pb-24 md:pb-32">
        <div className="mb-12">
          <p className="section-label mb-2">Selected work</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900">Recent projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><hr className="border-stone-200" /></div>

      {/* ═══ VALUES ════════════════════════════════════════════════════ */}
      <section id="my-values" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12">
          <p className="section-label mb-2">How I create impact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900">My values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-0.5">{value.icon}</div>
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{value.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{value.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><hr className="border-stone-200" /></div>

      {/* ═══ CONTACT ═══════════════════════════════════════════════════ */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="section-label mb-4">Get in touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-6">Let&apos;s connect.</h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            Want to know more about my journey and experience? You can find it on my{" "}
            <Link href="/about" className="text-stone-900 underline underline-offset-4">About</Link>{" "}
            page. If you&apos;d like to chat about a role, a project, or an idea, please feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:lynne.qian@yahoo.com" className="btn-primary">Email me</a>
            <a
              href="https://www.linkedin.com/in/lynn-qian-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
