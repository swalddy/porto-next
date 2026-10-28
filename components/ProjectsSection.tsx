"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent';

interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PatyPet',
    category: 'Mobile & Cloud Application',
    summary:
      'A smart pet care platform designed to help pet owners identify dog and cat breeds while providing tailored recommendations for nutrition, grooming, and medical wellness.',
    description:
      'PatyPet is an app that helps pet owners identify dog and cat breeds while providing key information about their traits. It offers personalized tips on health, grooming, and food to ensure pets are well cared for. Perfect for all pet lovers, PatyPet makes pet care simple, accessible, and effective.',
    tech: ['Google Cloud Platform (GCP)', 'MySQL', 'JavaScript'],
    image: '/patypet.png',
    color: '#F97316',
    highlights: [
      'Automated breed identification and trait cataloging',
      'Personalized pet wellness and grooming schedules',
      'Scalable cloud backend powered by GCP and MySQL',
    ],
  },
  {
    id: 2,
    title: 'Final Signtasy',
    category: 'Interactive Game & Inclusive Tech',
    summary:
      'A 2D pixel-art educational game teaching Indonesian Sign Language (SIBI) interactively, featuring real-time camera-based gesture recognition as the primary game controller.',
    description:
      'Final Signtasy is a 2D pixel-art game designed to teach sign language interactively. Using a sign language detector as the main control, players progress through stages by identifying objects through SIBI sign language gestures. Each stage challenges players to guess objects by spelling them letter by letter using sign language. Before starting, players are shown the objects to find and guess, making it a fun and educational way to master sign language while gaming.',
    tech: ['Unity', 'C#', 'Computer Vision'],
    image: '/FinalSigntasy.png',
    color: '#8B5CF6',
    highlights: [
      'Real-time computer vision sign language detection',
      'Custom 2D pixel-art aesthetics and stage progression',
      'Interactive spelling challenges based on standard SIBI gestures',
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-4" id="projects">
      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative border border-gray-200 dark:border-zinc-800 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-800">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Header */}
            <div className="mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2"
                style={{
                  backgroundColor: `${selectedProject.color}15`,
                  color: selectedProject.color,
                }}
              >
                {selectedProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 font-medium rounded-full text-xs border border-gray-200 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-semibold text-gray-400 dark:text-gray-500 tracking-wider mb-2">
                About the Project
              </h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xs uppercase font-semibold text-gray-400 dark:text-gray-500 tracking-wider mb-2">
                Key Features &amp; Highlights
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: selectedProject.color }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power3.out" threshold={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Selected works spanning mobile platforms, cloud systems, and interactive accessibility games.
            </p>
          </div>
        </AnimatedContent>

        {/* Horizontal Showcase Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <AnimatedContent
                key={project.id}
                distance={50}
                direction="vertical"
                duration={0.85}
                delay={index * 0.15}
                ease="power3.out"
                threshold={0.15}
              >
                <div
                  className="group relative rounded-3xl border border-gray-200/90 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.color;
                    e.currentTarget.style.boxShadow = `0 20px 40px -15px ${project.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div
                    className={`flex flex-col md:flex-row ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } items-stretch`}
                  >
                    {/* Image Showcase */}
                    <div className="md:w-5/12 p-4 md:p-6 flex items-center justify-center">
                      <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-gray-200/60 dark:border-zinc-700/60">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Category Pill */}
                        <span
                          className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border"
                          style={{
                            borderColor: `${project.color}35`,
                            backgroundColor: `${project.color}12`,
                            color: project.color,
                          }}
                        >
                          {project.category}
                        </span>

                        {/* Project Title */}
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {project.summary}
                        </p>
                      </div>

                      {/* Bottom Area: Tech Badges + Action Button */}
                      <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-zinc-800/90 text-gray-700 dark:text-gray-300 font-medium rounded-full text-xs border border-gray-200/80 dark:border-zinc-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Details Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-zinc-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-200 shadow-xs cursor-pointer"
                        >
                          <span>View Details</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
