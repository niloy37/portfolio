import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '@/data/personal';

const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'story', label: 'Story' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);

      const checkpoint = window.scrollY + window.innerHeight * 0.35;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (checkpoint >= top && checkpoint < bottom) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-signal-400 via-ember-400 to-rose-400"
        style={shouldReduceMotion ? undefined : { scaleX: scrollYProgress }}
      />

      <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top of page"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-semibold text-white">
              {personalInfo.initials}
            </span>
            <span className="hidden sm:block">
              <span className="block text-xs uppercase tracking-[0.28em] text-slate-400">
                Portfolio
              </span>
              <span className="block text-sm font-semibold text-white">{personalInfo.name}</span>
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`nav-pill ${activeSection === item.id ? 'nav-pill--active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={personalInfo.resume}
              download="Niloy-Rahman-Resume.pdf"
              className="button-ghost text-sm"
            >
              Resume
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary text-sm"
            >
              LinkedIn
              <FiArrowUpRight />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#050814]/90 backdrop-blur-xl lg:hidden">
          <div className="section-shell flex min-h-screen flex-col gap-10 py-8">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.26em] text-slate-400">Navigate</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
                aria-label="Close navigation menu"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-pill justify-between px-5 py-4 text-base ${
                    activeSection === item.id ? 'nav-pill--active' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight size={18} />
                </button>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={personalInfo.resume}
                download="Niloy-Rahman-Resume.pdf"
                className="button-primary justify-center"
              >
                Download Resume
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary justify-center"
              >
                GitHub
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
