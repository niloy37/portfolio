import Head from 'next/head';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { personalInfo, siteConfig } from '@/data/personal';

export default function Home() {
  const pageTitle = `${personalInfo.name} | ${personalInfo.headline}`;
  const description = `${siteConfig.tagline} ${personalInfo.subtitle}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Niloy Rahman, AI engineer, machine learning engineer, RAG, LLM, NLP, computer vision, research portfolio"
        />
        <meta name="author" content={personalInfo.name} />
        <meta name="theme-color" content="#07111e" />
        <link rel="canonical" href={siteConfig.siteUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:image:alt" content="Niloy Rahman portfolio preview" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="page-shell">
        <Navigation />

        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="relative z-10 border-t border-white/10 bg-black/20 py-10">
          <div className="section-shell flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <p>
              &copy; 2026 {personalInfo.name}. Designed for GitHub Pages with a
              research-to-product story.
            </p>
            <p className="text-slate-400">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
