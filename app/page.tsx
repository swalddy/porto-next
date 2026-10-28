"use client";

import ShinyText from '@/components/ShinyText';
import TrueFocus from '@/components/TrueFocus';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import AnimatedContent from '@/components/AnimatedContent';

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 relative">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power3.out" trigger="mount">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I&apos;m <ShinyText text="Oswald" speed={3} color="#A689C4" shineColor="#FF99D9" spread={120} direction="right" />
            </h1>
            <div className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
              <TrueFocus 
                sentence="Web-Developer Designer"
                manualMode={false}
                blurAmount={5}
                borderColor="#A689C4"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              I create beautiful and functional websites.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative px-8 py-3 text-white rounded-lg transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ 
                  backgroundColor: '#A689C4',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#9578B3';
                  e.currentTarget.style.borderColor = '#FF99D9';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 153, 217, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#A689C4';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-4 bg-gray-50/70 dark:bg-zinc-900/40 border-y border-gray-200/60 dark:border-zinc-800/60">
        <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" threshold={0.2}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
              I&apos;m Oswald Dew Sachio, a <span className="font-semibold"><ShinyText text="Front-end Developer" speed={2} color="#A689C4" shineColor="#FF99D9" spread={100} /></span>. I graduated in <span className="font-semibold"><ShinyText text="Computer Engineering" speed={2} color="#A689C4" shineColor="#FF99D9" spread={100} /></span> from ITS. I may not claim to be exceptionally skilled, but I am <span className="font-semibold"><ShinyText text="hardworking" speed={2} color="#A689C4" shineColor="#FF99D9" spread={100} /></span> and <span className="font-semibold"><ShinyText text="highly motivated" speed={2} color="#A689C4" shineColor="#FF99D9" spread={100} /></span>. For me, trying new things is an exciting challenge. I enjoy working in teams and take full responsibility for every task entrusted to me.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <div className="bg-gray-50/50 dark:bg-zinc-900/30 border-y border-gray-200/60 dark:border-zinc-800/60">
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Minimal Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-zinc-800 text-center">
        <AnimatedContent distance={30} direction="vertical" duration={0.6}>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Oswald Dew Sachio. All rights reserved.
          </p>
        </AnimatedContent>
      </footer>
    </div>
  );
}
