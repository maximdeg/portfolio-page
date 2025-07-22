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
      title: t('works.startup.title'),
      subtitle: t('works.startup.subtitle'),
      description: t('works.startup.description'),
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1745942260/Screenshot_2025-04-29_125508_mljyks.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Computer company website hero",
      link: "https://jm99-website.vercel.app/",
      github: "https://github.com/maximdeg/jm99-website",
      category: "web",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: t('works.booking.title'),
      subtitle: t('works.booking.subtitle'),
      description: t('works.booking.description'),
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1751374659/Screenshot_2025-07-01_095716_rimcjc.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Booking form",
      link: "https://maraxo-app.vercel.app/",
      github: "https://github.com/maximdeg/maraxo-app-2",
      category: "web",
      tech: ["Next.js", "React", "TypeScript", "AWS RDS", "PostgreSQL", "Redux"],
    },
    {
      title: t('works.natourex.title'),
      subtitle: t('works.natourex.subtitle'),
      description: t('works.natourex.description'),
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1737561821/natourex_cjd61s.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Natourex by Maxim Degtiarev",
      link: "https://slack-clone-macks-v2.vercel.app/",
      github: "https://github.com/maximdeg/notourex",
      category: "fullstack",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "PUG"],
    },
    {
      title: t('works.slack.title'),
      subtitle: t('works.slack.subtitle'),
      description: t('works.slack.description'),
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/slack_y5oila.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Slack Clone By Macks",
      link: "https://slack-clone-macks-v2.vercel.app/",
      github: "https://github.com/maximdeg/Slack-clone_macks-v2",
      category: "fullstack",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    },
  ];

  const filters = [
    { id: "all", label: t('portfolio.filter.all') },
    { id: "web", label: t('portfolio.filter.web') },
    { id: "fullstack", label: t('portfolio.filter.api') },
    { id: "mobile", label: t('portfolio.filter.mobile') },
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
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
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
              key={work.title}
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
                  <Link
                    href={work.link}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all duration-200"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </Link>
                  {work.github && (
                    <Link
                      href={work.github}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all duration-200"
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium">
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
                        className="px-3 py-1 bg-violet-100 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Link
                    href={work.link}
                    className="btn-primary inline-flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <HiEye className="w-4 h-4 mr-2" />
                    {t('portfolio.viewLive')}
                  </Link>
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
            <Link href="#footer" className="btn-primary inline-flex items-center">
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
