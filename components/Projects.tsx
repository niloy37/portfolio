import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLink2, FiPlayCircle } from 'react-icons/fi';
import {
  archiveCategories,
  archiveProjects,
  featuredProjects,
  type Project,
  type ProjectAccent,
  type ProjectLinkKind,
} from '@/data/projects';

const accentStyles: Record<ProjectAccent, { border: string; glow: string; text: string }> = {
  cyan: {
    border: 'border-signal-400/30',
    glow: 'shadow-[0_0_0_1px_rgba(84,217,232,0.08),0_24px_80px_rgba(26,182,200,0.18)]',
    text: 'text-signal-300',
  },
  amber: {
    border: 'border-ember-400/30',
    glow: 'shadow-[0_0_0_1px_rgba(239,178,86,0.08),0_24px_80px_rgba(222,138,29,0.18)]',
    text: 'text-ember-300',
  },
  rose: {
    border: 'border-rose-400/30',
    glow: 'shadow-[0_0_0_1px_rgba(235,116,132,0.08),0_24px_80px_rgba(214,69,98,0.18)]',
    text: 'text-rose-300',
  },
  emerald: {
    border: 'border-emerald-400/30',
    glow: 'shadow-[0_0_0_1px_rgba(68,195,142,0.08),0_24px_80px_rgba(28,155,103,0.18)]',
    text: 'text-emerald-300',
  },
};

const linkIcons: Record<ProjectLinkKind, JSX.Element> = {
  github: <FiGithub size={16} />,
  live: <FiArrowUpRight size={16} />,
  linkedin: <FiPlayCircle size={16} />,
  demo: <FiLink2 size={16} />,
};

const ArchiveVisual = ({ project }: { project: Project }) => {
  const accent = accentStyles[project.accent];

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border ${accent.border} bg-[linear-gradient(160deg,rgba(9,17,31,0.96),rgba(9,17,31,0.72))] p-6 ${accent.glow}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative">
        <p className={`text-xs uppercase tracking-[0.24em] ${accent.text}`}>{project.category}</p>
        <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.period}</p>
      </div>
    </div>
  );
};

const FeaturedProjectStage = ({ project }: { project: Project }) => {
  const accent = accentStyles[project.accent];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-6"
    >
      <div className={`project-preview ${accent.border} ${accent.glow}`}>
        <div className="project-preview__header">
          <div>
            <p className={`text-xs uppercase tracking-[0.24em] ${accent.text}`}>{project.eyebrow}</p>
            <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">{project.title}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{project.category}</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{project.period}</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)]">
          <div className="space-y-6">
            <p className="text-base leading-7 text-slate-300">{project.summary}</p>
            <p className="text-sm leading-7 text-slate-400">{project.narrative}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-sm font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Role and outcome</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.outcome}</p>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 rounded-full ${accent.text.replace('text', 'bg')}`} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {project.proofLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary text-sm"
                >
                  {linkIcons[link.kind]}
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip chip--muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            {project.embed ? (
              <div className="project-embed-frame">
                <iframe
                  src={project.embed.embedUrl}
                  title={project.embed.title}
                  loading="lazy"
                  className="h-[520px] w-full rounded-[24px] border-0 bg-white md:h-[620px]"
                />
              </div>
            ) : (
              <div className="project-proof-card h-full">
                <p className={`text-xs uppercase tracking-[0.24em] ${accent.text}`}>Proof surface</p>
                <h4 className="mt-4 font-display text-3xl text-white">{project.title}</h4>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.outcome}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[22px] border border-white/8 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{metric.label}</p>
                      <p className="mt-3 text-sm font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.proofLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-ghost text-sm"
                    >
                      {linkIcons[link.kind]}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFeaturedId, setActiveFeaturedId] = useState(featuredProjects[0]?.id ?? '');
  const shouldReduceMotion = useReducedMotion();

  const activeFeaturedProject =
    featuredProjects.find((project) => project.id === activeFeaturedId) ?? featuredProjects[0];

  const filteredArchive = useMemo(() => {
    if (selectedCategory === 'All') {
      return archiveProjects;
    }

    return archiveProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);
  const itemHover = shouldReduceMotion ? undefined : { y: -6, scale: 1.01 };

  return (
    <section id="projects" className="section-block">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title mt-4">
            Featured work now lives in an interactive project stage instead of a long scroll.
          </h2>
          <p className="section-copy mt-5">
            Hover, focus, or tap a project name to swap the case study on the right. The goal here
            is to make the portfolio feel more like a guided presentation than a stack of repeated
            sections.
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(280px,0.62fr)_minmax(0,1.38fr)]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <div className="surface-card space-y-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Featured case studies</p>
                <span className="label">Hover or click</span>
              </div>

              <div className="space-y-3">
                {featuredProjects.map((project, index) => {
                  const accent = accentStyles[project.accent];
                  const isActive = project.id === activeFeaturedProject.id;

                  return (
                    <motion.button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveFeaturedId(project.id)}
                      onMouseEnter={() => setActiveFeaturedId(project.id)}
                      onFocus={() => setActiveFeaturedId(project.id)}
                      className={`w-full rounded-[28px] border p-5 text-left transition ${
                        isActive
                          ? `${accent.border} bg-white/[0.06] ${accent.glow}`
                          : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.05]'
                      }`}
                      whileHover={itemHover}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
                        </div>
                        <span className={`text-xs uppercase tracking-[0.22em] ${accent.text}`}>
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {project.proofLinks.slice(0, 2).map((link) => (
                          <span key={link.href} className="chip chip--muted">
                            {link.label}
                          </span>
                        ))}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
              {activeFeaturedProject && <FeaturedProjectStage project={activeFeaturedProject} />}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow">Archive</div>
              <h3 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Additional builds across ML, web, algorithms, and interactive systems.
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {archiveCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`nav-pill ${selectedCategory === category ? 'nav-pill--active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredArchive.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.25 }}
                className="surface-card flex h-full flex-col"
                whileHover={itemHover}
              >
                <ArchiveVisual project={project} />

                <div className="mt-6 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="label">{project.category}</span>
                    <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip chip--muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.proofLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-ghost text-sm"
                    >
                      {linkIcons[link.kind]}
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
