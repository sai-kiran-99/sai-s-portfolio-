import Image from "next/image";
import { BranchLine } from "@/components/BranchLine";
import { HeroTerminal } from "@/components/HeroTerminal";
import { PackageJson } from "@/components/PackageJson";
import { ReviewDemo } from "@/components/ReviewDemo";
import { SiteEffects } from "@/components/SiteEffects";
import { Toolbar } from "@/components/Toolbar";
import { experience, metrics, project, sections, site } from "@/lib/content";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} tabIndex={-1} className="scroll-mt-16 pt-20 first:pt-0">
      <h2 id={`${id}-title`} className="reveal mb-6 font-mono text-sm font-medium text-accent">
        <span aria-hidden="true" className="text-muted">
          {"// "}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "LeetCode", href: site.leetcode },
  { label: "Resume", href: site.resume },
];

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <header className="flex flex-col justify-between gap-10 pt-14 lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto lg:py-14">
          <div>
            <div className="mb-6 size-28 rounded-full bg-linear-to-br from-indigo to-[#06b6d4] p-[3px]">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${site.name}`}
                width={106}
                height={106}
                priority
                className="size-full rounded-full border-2 border-bg object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>
            <p className="mt-3 text-lg font-medium">
              {site.title} <span className="text-muted">@ {site.company}</span>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">{site.oneLiner}</p>
            <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-x-5 lg:mt-10 lg:flex-col lg:items-start">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="nav-link" data-nav={s.id}>
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <Toolbar />
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a className="link" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main id="main" className="py-14">
          <HeroTerminal />

          <div className="pt-14">
            <Section id="about" title="About">
              <p className="reveal max-w-2xl leading-relaxed text-muted">{site.about}</p>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {metrics.map((m, i) => (
                  <li
                    key={m.label}
                    className="card spot reveal p-4"
                    style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
                  >
                    <p className="font-mono text-3xl font-semibold text-accent">
                      <span className="metric-num" data-count={m.value}>
                        {m.value}
                      </span>
                      %
                    </p>
                    <p className="mt-2 text-sm leading-snug">{m.label}</p>
                    <p className="mt-1 text-xs text-muted">{m.source}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="experience" title="Experience">
              <p aria-hidden="true" className="reveal mb-6 font-mono text-sm text-muted">
                <span className="text-accent">$</span> git log --oneline --graph
              </p>
              <ol className="relative">
                <BranchLine />
                {experience.map((job) => (
                  <li key={job.hash} className="relative pb-10 pl-9 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="node reveal absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-accent bg-bg"
                    />
                    <article data-place={job.place}>
                      <p className="reveal flex flex-wrap items-center gap-x-3 font-mono text-xs text-muted">
                        <span aria-hidden="true" className="text-accent">
                          {job.hash}
                        </span>
                        {job.head && (
                          <span aria-hidden="true" className="text-accent">
                            (HEAD -&gt; main)
                          </span>
                        )}
                        <span>{job.date}</span>
                      </p>
                      <h3 className="reveal mt-1.5 font-semibold">
                        {job.role} <span className="font-normal text-muted">· {job.company}</span>
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                        {job.bullets.map((b, i) => (
                          <li
                            key={b}
                            className="reveal"
                            style={{ "--delay": `${60 + i * 60}ms` } as React.CSSProperties}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="project" title="Project">
              <article className="card spot reveal p-5 sm:p-6" data-place="codereview">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
                <ReviewDemo />
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                  {project.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
                  {project.stack.map((s) => (
                    <li key={s} className="rounded bg-surface-2 px-2 py-1">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    data-magnetic
                  >
                    Try the live app
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>
                    View source
                  </a>
                </div>
              </article>
            </Section>

            <Section id="skills" title="Skills">
              <PackageJson />
            </Section>

            <Section id="contact" title="Contact">
              <p className="reveal max-w-xl leading-relaxed text-muted">
                I am open to frontend and AI product engineering roles. The fastest way to reach me is email.
              </p>
              <div className="reveal mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn btn-primary" data-magnetic>
                  {site.email}
                </a>
                <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>
                  Download resume
                </a>
              </div>
            </Section>
          </div>

          <footer className="mt-20 font-mono text-xs text-muted">
            {site.location} · Built with Next.js, TypeScript and Tailwind
          </footer>
        </main>
      </div>
      <SiteEffects />
    </>
  );
}
