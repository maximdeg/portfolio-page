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

  type Category = "webapps" | "sites" | "wordpress" | "shopify";
  type Badge = "inProgress" | "personal";

  // Ordered by what a client or recruiter should see first.
  const projects: {
    key: string;
    image: string;
    alt: string;
    link?: string;
    github?: string;
    category: Category;
    badge?: Badge;
    tech: string[];
  }[] = [
    { key: "proj2", image: "/proyect-2.png", alt: "Dermatology booking platform", link: "https://maxturnos.vercel.app/", category: "webapps",
      tech: ["Next.js 15", "TypeScript", "NextAuth v5", "MongoDB", "WhatsApp Cloud API", "Vitest", "Playwright"] },
    { key: "proj8", image: "/proyect-8.png", alt: "Video course streaming platform", link: "https://dancetothemax.vercel.app/", category: "webapps", badge: "inProgress",
      tech: ["React Router 7", "Effect", "PostgreSQL", "Drizzle", "Stripe", "Vitest", "Next.js 16"] },
    { key: "proj9", image: "/proyect-9.png", alt: "Luz Roja Contenidos website and store", link: "https://luzrojacontenidos.com/", category: "webapps",
      tech: ["Next.js 15", "Supabase", "Mercado Pago", "Nodemailer", "Vitest"] },
    { key: "proj1", image: "/proyect-1.png", alt: "JM99 e-commerce", link: "https://jm99-website.vercel.app/", category: "webapps",
      tech: ["Next.js 15", "TypeScript", "Cloudinary", "Claid AI API", "Tailwind CSS"] },
    { key: "proj4", image: "/proyect-4.png", alt: "Lightworker On Duty Shopify store", link: "https://lightworkeronduty.com/", category: "shopify",
      tech: ["Shopify Liquid", "JavaScript ES6+", "Technical SEO"] },
    { key: "proj5", image: "/proyect-5.png", alt: "AABD sports federation platform", link: "https://aabd.online/", category: "wordpress",
      tech: ["WordPress", "Custom PHP", "Gutenberg Blocks", "Schema.org"] },
    { key: "proj6", image: "/proyect-6.png", alt: "Heartsong Healing Arts website", link: "https://heartsonghealingarts.net/", category: "wordpress",
      tech: ["WordPress", "PHP 7.4+", "ACF Pro", "Vanilla JS"] },
    { key: "proj7", image: "/proyect-7.png", alt: "Real Expert landing page", link: "https://the-real-expert-website.vercel.app/", category: "sites",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"] },
    { key: "proj10", image: "/proyect-10.png", alt: "Simply Healthy Marketing landing", link: "https://simplyhealthymarketing.com/", category: "sites",
      tech: ["HTML5", "CSS3", "Vanilla JS", "Flodesk", "Calendly"] },
    { key: "proj11", image: "/proyect-11.png", alt: "Calenda Real Estate Group website", link: "https://calendagroup.com/", category: "sites",
      tech: ["HTML5", "CSS Grid", "Responsive design"] },
    { key: "proj12", image: "/proyect-12.png", alt: "Ryan Ginn therapy website", link: "https://ryanginn.com/", category: "wordpress",
      tech: ["WordPress", "Pro theme", "Yoast SEO", "Performance"] },
    { key: "proj3", image: "/proyect-3.png", alt: "Natourex tour booking API", category: "webapps", badge: "personal",
      tech: ["Node.js", "Express", "MongoDB", "Leaflet.js", "JWT", "Sharp"] },
  ];

  const works = projects.map((p) => ({
    ...p,
    title: t(`works.${p.key}.title`),
    subtitle: t(`works.${p.key}.subtitle`),
    description: t(`works.${p.key}.description`),
    badgeLabel: p.badge ? t(`portfolio.badge.${p.badge}`) : undefined,
  }));

  const filters = [
    { id: "all", label: t('portfolio.filter.all') },
    { id: "webapps", label: t('portfolio.filter.webapps') },
    { id: "sites", label: t('portfolio.filter.sites') },
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
                  alt={work.alt}
                  width={600}
                  height={400}
                />
                {work.badgeLabel && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 dark:bg-gray-900/90 dark:text-white shadow">
                    {work.badgeLabel}
                  </span>
                )}
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
