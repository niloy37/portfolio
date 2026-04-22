import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '@/data/personal';

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const haloShift = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const hoverLift = shouldReduceMotion ? undefined : { y: -6, scale: 1.02 };
  const linkHover = shouldReduceMotion ? undefined : { x: 8, y: -2 };

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden pt-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-8%] top-[-4rem] h-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(84,217,232,0.18)_0%,_rgba(84,217,232,0.02)_55%,_transparent_75%)] blur-3xl"
        style={shouldReduceMotion ? undefined : { y: haloShift }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(222,138,29,0.16)_0%,_rgba(222,138,29,0.04)_52%,_transparent_74%)] blur-3xl"
        style={shouldReduceMotion ? undefined : { y: asideY }}
      />

      <div className="section-shell pb-20 pt-10">
        <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.88fr)]">
          <motion.div
            className="space-y-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: 'easeOut' }}
            style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
          >
            <motion.div
              className="eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.45, delay: 0.05 }}
            >
              Balanced AI engineering and research portfolio
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.55, delay: 0.12 }}
            >
              <p className="max-w-2xl text-sm uppercase tracking-[0.32em] text-slate-400">
                {personalInfo.name}
              </p>
              <h1 className="display-title max-w-4xl">{personalInfo.headline}</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {personalInfo.focusAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="chip"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 0.35, delay: 0.2 + index * 0.04 }
                  }
                  whileHover={hoverLift}
                >
                  {area}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.45, delay: 0.28 }}
            >
              <a href="#projects" className="button-primary">
                Explore selected work
                <FiArrowDownRight />
              </a>
              <a href="#contact" className="button-secondary">
                Start a conversation
              </a>
              <a href={personalInfo.resume} download="Niloy-Rahman-Resume.pdf" className="button-ghost">
                Download resume
              </a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {personalInfo.proofStrip.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="metric-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 0.45, delay: 0.34 + index * 0.05 }
                  }
                  whileHover={hoverLift}
                >
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    {item.label}
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="hero-card"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, delay: 0.18 }}
            style={shouldReduceMotion ? undefined : { y: asideY }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Currently</p>
                <h2 className="mt-3 font-display text-2xl text-white">
                  Researching LLM faithfulness while shipping applied AI demos
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-signal-300">
                {personalInfo.location}
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {personalInfo.bio.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <motion.a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-card"
                whileHover={linkHover}
              >
                <FiGithub size={18} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-card"
                whileHover={linkHover}
              >
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href={personalInfo.socials.email}
                className="hero-link-card"
                whileHover={linkHover}
              >
                <FiMail size={18} />
                <span>Email</span>
              </motion.a>
            </div>

            <motion.div
              className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5"
              whileHover={hoverLift}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Positioning</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{personalInfo.availability}</p>
            </motion.div>
          </motion.aside>
        </div>

        <div className="mt-16 flex items-center gap-4 text-sm text-slate-400">
          <span className="h-px flex-1 bg-white/10" />
          <span className="uppercase tracking-[0.28em]">Scroll to follow the story</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
