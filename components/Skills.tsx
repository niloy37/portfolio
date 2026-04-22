import { motion, useReducedMotion } from 'framer-motion';
import { skillClusters, toolbelt, workingStyle } from '@/data/skills';

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();
  const hoverLift = shouldReduceMotion ? undefined : { y: -8, scale: 1.01 };

  return (
    <section id="skills" className="section-block">
      <div className="section-shell space-y-12">
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="eyebrow">Toolkit</div>
          <h2 className="section-title mt-4">
            What I reach for when the work needs to move from idea to implementation.
          </h2>
          <p className="section-copy mt-5">
            The strongest through-line in my work is not a single framework. It is the ability to
            connect research questions, clean pipelines, and usable interfaces into one coherent
            system.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
          {skillClusters.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="surface-card h-full"
              whileHover={hoverLift}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{cluster.title}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{cluster.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span key={item} className="chip chip--muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="surface-card">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Toolbelt</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {toolbelt.map((group, index) => (
                <motion.div
                  key={group.label}
                  className="rounded-[24px] border border-white/8 bg-black/15 p-5"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={hoverLift}
                >
                  <h3 className="text-base font-semibold text-white">{group.label}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Working style</p>
            <div className="mt-6 space-y-4">
              {workingStyle.map((point, index) => (
                <motion.div
                  key={point}
                  className="rounded-[24px] border border-white/8 bg-black/15 p-5"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={hoverLift}
                >
                  <p className="text-sm leading-7 text-slate-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
