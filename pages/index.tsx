import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { personalInfo } from '@/data/personal';

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalInfo.name} - {personalInfo.subtitle}</title>
        <meta 
          name="description" 
          content={`${personalInfo.name} - ${personalInfo.subtitle}. ${personalInfo.bio}`} 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI, Machine Learning, Deep Learning, NLP, RAG, Computer Science, Computational Sciences, Portfolio" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.subtitle}`} />
        <meta property="og:description" content={personalInfo.bio} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} - ${personalInfo.subtitle}`} />
        <meta name="twitter:description" content={personalInfo.bio} />
        <meta name="twitter:image" content="/assets/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50" />
        <div className="fixed inset-0 bg-[url('/assets/noise.png')] opacity-30 mix-blend-overlay" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                © 2024 {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
