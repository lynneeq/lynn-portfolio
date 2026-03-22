import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lynn Qian — UX designer and researcher based in London with a background in architecture and a focus on complex systems.",
};

const fullTimeRoles = [
  {
    title: "UX Designer",
    company: "Bentley Systems",
    url: "https://www.bentley.com/",
    period: "07.2024 – present",
    location: "London",
  },
  {
    title: "Architect",
    company: "ritchie*studio",
    url: "https://www.ritchie.studio/",
    period: "08.2021 – 05.2024",
    location: "London",
  },
  {
    title: "Architectural Assistant",
    company: "Foster Lomas Architects",
    url: "https://fosterlomas.com/",
    period: "07.2018 – 06.2019",
    location: "London",
  },
];

const freelanceRoles = [
  {
    title: "Product Designer",
    company: "Teleport",
    url: undefined,
    period: "05.2024 – 06.2024",
    location: "California · Remote",
  },
  {
    title: "UX Designer",
    company: "Peanut Protocol",
    url: "https://peanut.to/",
    period: "04.2024 – 05.2024",
    location: "Berlin · Remote",
  },
  {
    title: "Product Designer",
    company: "UniWorlds",
    url: "https://docs.uniworlds.io/",
    period: "03.2024 – 06.2024",
    location: "Chiang Mai · Remote",
  },
  {
    title: "Undergraduate Technical Skill Tutor",
    company: "Bartlett School of Architecture, UCL",
    url: "https://summer2023.bartlettarchucl.com/room/meng-unit6-flow",
    period: "02.2024 – 03.2024",
    location: "London",
  },
  {
    title: "Chief Designer",
    company: "Oceanside Perspective",
    url: "https://www.oceansideperspective.org/",
    period: "08.2022 – 08.2023",
    location: "California · Remote",
  },
  {
    title: "Podcast Co-founder",
    company: "Not Very London",
    url: "https://open.spotify.com/show/3o7dEvHGfALZBIb25veZKb",
    period: "02.2020 – 02.2021",
    location: "London",
  },
];

const certifications = [
  {
    title: "Certified Professional in Accessibility Core Competencies",
    issuer: "IAAP",
    year: "2025",
  },
  {
    title: "Lean UX and Agile",
    issuer: "NN/Group",
    year: "2024",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera",
    year: "2023",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/4GY4A2AGWFFE",
  },
  {
    title: "UK Certified Architect",
    issuer: "Architects Registration Board",
    year: "2023",
    url: "https://architects-register.org.uk/Architect/110562H?filterId=Architect",
  },
];

const education = [
  {
    degree: "Master in Architecture",
    honours: "Distinction",
    school: "Bartlett, University College London",
    period: "2019 – 2021",
  },
  {
    degree: "BSc in Architecture",
    honours: "First Class Honour",
    school: "Bartlett, University College London",
    period: "2015 – 2018",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────

function RoleRow({
  title,
  company,
  url,
  period,
  location,
}: {
  title: string;
  company: string;
  url?: string;
  period: string;
  location: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-4 border-b border-stone-100 last:border-0">
      <div>
        <p className="font-medium text-stone-900 text-sm">{title}</p>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 text-sm hover:text-stone-900 transition-colors"
          >
            {company} ↗
          </a>
        ) : (
          <p className="text-stone-500 text-sm">{company}</p>
        )}
      </div>
      <div className="text-right">
        <p className="font-mono text-xs text-stone-400">{period}</p>
        <p className="font-mono text-xs text-stone-400">{location}</p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

      {/* ── BIO ─────────────────────────────────────────────────────────── */}
      <section id="about-me" className="mb-20 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="section-label mb-4">About me</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 leading-tight mb-8">
              Hi, I&apos;m <i>Lynn</i> — a product designer passionate about turning
              complex systems into intuitive experiences.
            </h1>
          </div>

          <div className="space-y-5 text-stone-600 leading-relaxed pt-2 md:pt-14">
            <p>
              My path into product design started in architecture, where I
              completed 8 years of training to become an architect and designed
              complex spatial systems. That experience shaped how I think about
              digital products today: structure, clarity, and human behaviour
              are always connected.
            </p>
            <p>
              Today I work across research, product strategy, and experience
              design at Bentley Systems, helping teams translate insights into
              practical product decisions. I&apos;m particularly interested in
              AI-assisted experiences in AEC software, where design helps make
              complex systems understandable and useful.
            </p>
            <p>
              Recently I&apos;ve been building experimental tools that combine
              LLMs, conversational interfaces, and rapid prototyping workflows
              to explore new ways people learn and interact with information.
            </p>
            <p>
              Outside of work, I enjoy exploring emerging technologies, building
              hand crafts, volunteering at communities, and playing tennis.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 mb-20" />

      {/* ── WORK EXPERIENCE ─────────────────────────────────────────────── */}
      <section id="experience" className="mb-20 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 mb-14">
          <div>
            <p className="section-label mb-2">Full-time</p>
          </div>
          <div>
            {fullTimeRoles.map((role) => (
              <RoleRow key={role.company + role.period} {...role} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <p className="section-label mb-2">Contract & Freelance</p>
          </div>
          <div>
            {freelanceRoles.map((role) => (
              <RoleRow key={role.company + role.period} {...role} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-stone-200 mb-20" />

      {/* ── EDUCATION & CERTS ────────────────────────────────────────────── */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="section-label mb-6">Education</p>
            <div className="space-y-6">
              {education.map((ed) => (
                <div key={ed.degree} className="border-l-2 border-stone-900 pl-4">
                  <p className="font-serif font-medium text-stone-900">
                    {ed.degree}
                  </p>
                  <p className="text-stone-500 text-sm">{ed.honours}</p>
                  <p className="text-stone-500 text-sm">{ed.school}</p>
                  <p className="font-mono text-xs text-stone-400 mt-1">{ed.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label mb-6">Licences & Certifications</p>
            <div className="space-y-5">
              {certifications.map((cert) => (
                <div key={cert.title} className="border-b border-stone-100 pb-5 last:border-0">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-stone-900 text-sm hover:underline underline-offset-4"
                    >
                      {cert.title} ↗
                    </a>
                  ) : (
                    <p className="font-medium text-stone-900 text-sm">{cert.title}</p>
                  )}
                  <p className="font-mono text-xs text-stone-400 mt-0.5">
                    {cert.year} · {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 mb-20" />

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="get-in-touch" className="scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="flex-1">
            <p className="section-label mb-4">Get in touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-6">
              Let&apos;s connect.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10">
              I love connecting with like-minded people and building products that
              solve real problems and create measurable impact. If you&apos;d like
              to chat about a role, a project, or an idea, please feel free to
              reach out.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:lynne.qian@yahoo.com" className="btn-primary">
                Email me
              </a>
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
          <div className="flex-shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64 overflow-hidden bg-stone-100 shadow-sm" style={{ borderRadius: "999px" }}>
              <Image src="/images/profile.avif" alt="Lynn Qian" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
