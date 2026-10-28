"use client";

import React from 'react';
import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent';

interface Skill {
  name: string;
  icon: string;
  brandColor: string;
  invertInDark?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', icon: '/next.svg', brandColor: '#8b5cf6', invertInDark: true },
      { name: 'React', icon: '/React-icon.svg.png', brandColor: '#61DAFB' },
      { name: 'Tailwind CSS', icon: '/tailwind.png', brandColor: '#38BDF8' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '/JS.png', brandColor: '#F7DF1E' },
      { name: 'Python', icon: '/python.png', brandColor: '#3776AB' },
      { name: 'HTML5', icon: '/html.png', brandColor: '#E34F26' },
      { name: 'CSS3', icon: '/css.svg', brandColor: '#1572B6' },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'VS Code', icon: '/vsc.png', brandColor: '#007ACC' },
      { name: 'Git', icon: '/git.png', brandColor: '#F05032' },
      { name: 'GitLab', icon: '/gitlab.png', brandColor: '#FC6D26' },
      { name: 'Figma', icon: '/figma.png', brandColor: '#F24E1E' },
      { name: 'Photoshop', icon: '/ps.png', brandColor: '#31A8FF' },
      { name: 'Canva', icon: '/canva.png', brandColor: '#00C4CC' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        {/* Minimal Section Header */}
        <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power3.out" threshold={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              Skills
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Technologies and tools I work with
            </p>
          </div>
        </AnimatedContent>

        {/* Categories Stack */}
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <AnimatedContent
              key={category.title}
              distance={40}
              direction="vertical"
              duration={0.8}
              delay={idx * 0.1}
              ease="power3.out"
              threshold={0.15}
            >
              <div className="text-center">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 dark:text-gray-500 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900/80 border border-gray-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = skill.brandColor;
                        e.currentTarget.style.boxShadow = `0 6px 20px -4px ${skill.brandColor}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className={`w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110 ${
                            skill.invertInDark ? 'dark:invert' : ''
                          }`}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
