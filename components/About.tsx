import { motion, useReducedMotion } from 'framer-motion';
import { FiAward, FiBookOpen, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { awards, education, experience } from '@/data/personal';

const timeline = [
  { type: 'Experience', icon: FiBriefcase, ...experience[0] },
  { type: 'Experience', icon: FiBriefcase, ...experience[1] },
  { type: 'Education', icon: FiBookOpen, ...education[0] },
  { type: 'Experience', icon: FiBriefcase, ...experience[2] },
  { type: 'Experience', icon: FiBriefcase, ...experience[3] },
  { type: 'Education', icon: FiBookOpen, ...education[1] },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const cardHover = shouldReduceMotion ? undefined : { y: -8 };
  const timelineHover = shouldReduceMotion ? undefined : { x: 8, y: -4 };

  return (
    <section id="story" className="section-block">
      <div className="section-shell grid gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <motion.div
          className="xl:sticky xl:top-28 xl:self-start"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="eyebrow">Story and trajectory</div>
          <h2 className="section-title mt-4">
            A portfolio built around research depth and practical delivery.
          </h2>
          <p className="section-copy mt-6">
            My path has moved from backend support and software delivery into applied ML internships
            and now research work on LLM evaluation. That combination shows up in how I build:
            clear pipelines, usable interfaces, and experiments that can stand up to scrutiny.
          </p>
          <p className="section-copy mt-4">
            I enjoy projects where retrieval, modeling, data preparation, and communication all
            matter because the best AI work is rarely just about training a model.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {awards.map((award) => (
              <motion.div
                key={award.title}
                className="surface-card"
                whileHover={cardHover}
                transition={{ duration: 0.22 }}
              >
                <div className="flex items-center gap-3 text-amber-300">
                  <FiAward size={18} />
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-400">Award</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{award.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{award.organization}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{award.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative pl-6 sm:pl-10">
          <div className="timeline-rail" />
          <div className="space-y-8">
            {timeline.map((entry, index) => {
              const Icon = entry.icon;

              return (
                <motion.article
                  key={`${entry.type}-${entry.period}-${index}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="timeline-card"
                  whileHover={timelineHover}
                >
                  <div className="timeline-dot">
                    <Icon size={16} />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="label">{entry.type}</span>
                    <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-white">
                    {'title' in entry ? entry.title : entry.degree}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    <span>{'organization' in entry ? entry.organization : entry.institution}</span>
                    <span className="text-slate-600">&middot;</span>
                    <span className="inline-flex items-center gap-2">
                      <FiMapPin size={14} />
                      {entry.location}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {'summary' in entry ? entry.summary : entry.description}
                  </p>

                  {'bullets' in entry && (
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'tags' in entry && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="chip chip--muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
