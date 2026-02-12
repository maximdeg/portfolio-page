"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: filtersRef, isVisible: filtersVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const works = [
    {
      title: t('works.proj1.title'),
      subtitle: t('works.proj1.subtitle'),
      description: t('works.proj1.description'),
      image: "/proyect-1.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Next-Gen E-commerce",
      link: "https://jm99-website.vercel.app/",
      github: undefined,
      category: "node",
      tech: ["Next.js 15", "TypeScript", "Cloudinary", "IA APIs", "Tailwind CSS"],
    },
    {
      title: t('works.proj2.title'),
      subtitle: t('works.proj2.subtitle'),
      description: t('works.proj2.description'),
      image: "/proyect-2.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Healthcare Management SaaS",
      link: "https://maxturnos.vercel.app/",
      github: undefined,
      category: "node",
      tech: ["Next.js", "PostgreSQL", "Redis", "Node.js", "WhatsApp API"],
    },
    {
      title: t('works.proj3.title'),
      subtitle: t('works.proj3.subtitle'),
      description: t('works.proj3.description'),
      image: "/proyect-3.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Enterprise Booking Engine",
      link: undefined,
      github: undefined,
      category: "node",
      tech: ["Node.js", "Express", "MongoDB", "Leaflet.js", "Sharp"],
    },
    {
      title: t('works.proj4.title'),
      subtitle: t('works.proj4.subtitle'),
      description: t('works.proj4.description'),
      image: "/proyect-4.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Author E-commerce - Lightworker",
      link: "https://lightworkeronduty.com/",
      github: undefined,
      category: "shopify",
      tech: ["Shopify Liquid", "JavaScript ES6+", "SEO Técnico"],
    },
    {
      title: t('works.proj5.title'),
      subtitle: t('works.proj5.subtitle'),
      description: t('works.proj5.description'),
      image: "/proyect-5.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Dance Sport Institutional Ecosystem",
      link: "https://aabd.online/",
      github: undefined,
      category: "wordpress",
      tech: ["WordPress", "Custom PHP", "Gutenberg Blocks", "Schema.org"],
    },
    {
      title: t('works.proj6.title'),
      subtitle: t('works.proj6.subtitle'),
      description: t('works.proj6.description'),
      image: "/proyect-6.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Specialty Platform",
      link: "https://heartsonghealingarts.net/",
      github: undefined,
      category: "wordpress",
      tech: ["WordPress", "PHP 7.4+", "ACF Pro", "Vanilla JS"],
    },
    {
      title: t('works.proj7.title'),
      subtitle: t('works.proj7.subtitle'),
      description: t('works.proj7.description'),
      image: "/proyect-7.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Conversion Funnel",
      link: "https://the-real-expert-website.vercel.app/",
      github: undefined,
      category: "node",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    },
  ];

  const filters = [
    { id: "all", label: t('portfolio.filter.all') },
    { id: "node", label: t('portfolio.filter.node') },
    { id: "wordpress", label: t('portfolio.filter.wordpress') },
    { id: "shopify", label: t('portfolio.filter.shopify') },
  ];

  const filteredWorks = works.filter(work => 
    activeFilter === "all" ? true : work.category === activeFilter
  );

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('portfolio.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            filtersVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
            projectsVisible ? 'scroll-stagger visible' : 'scroll-stagger'
          }`}
        >
          {filteredWorks.map((work) => (
            <div
              key={work.image}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={work.image}
                  alt={work.image_alt}
                  width={work.image_width}
                  height={work.image_height}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {work.link && (
                    <Link
                      href={work.link}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-200"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HiExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                  {work.github && (
                    <Link
                      href={work.github}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-200"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HiCode className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">
                    {work.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {t('portfolio.techUsed')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {work.link && (
                    <Link
                      href={work.link}
                      className="btn-primary inline-flex items-center"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HiEye className="w-4 h-4 mr-2" />
                      {t('portfolio.viewLive')}
                    </Link>
                  )}
                  {work.github && (
                    <Link
                      href={work.github}
                      className="btn-secondary inline-flex items-center"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HiCode className="w-4 h-4 mr-2" />
                      {t('portfolio.viewCode')}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 ${
            ctaVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('portfolio.haveProject')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('portfolio.passionate')}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('portfolio.workTogether')}
            </p>
            <Link href="#footer" className="btn-primary inline-flex items-center mt-4">
              {t('portfolio.letsTalk')}
              <HiExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
