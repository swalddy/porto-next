'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import GooeyNav, { GooeyNavItem } from '@/components/GooeyNav';

const MoonIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const navItems: GooeyNavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.max(0, sectionIds.indexOf(activeSection));

  const handleNavChange = (_index: number, item: GooeyNavItem) => {
    if (item.href && item.href.startsWith('#')) {
      const targetId = item.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
  };

  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    const homeEl = document.getElementById('home');
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <a
          href="#home"
          onClick={scrollToHome}
          className="flex items-center cursor-pointer"
        >
          <Image
            key={theme}
            src={theme === 'dark' ? '/logowhite.png' : '/logo.png'}
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto transition-opacity duration-200"
            priority
            unoptimized
          />
        </a>
      </div>

      {/* Floating Gooey Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[92vw]">
        <GooeyNav
          items={navItems}
          activeIndex={activeIndex}
          onChange={handleNavChange}
          theme={theme === 'dark' ? 'dark' : 'light'}
          color="#8b5cf6"
          activeTextColor="#ffffff"
          size="sm"
          frame={true}
          gooeyness={1.2}
          wobble={1.0}
          hoverEffect={true}
        />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200/80 dark:border-zinc-700/80 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          type="button"
          suppressHydrationWarning
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </>
  );
}
