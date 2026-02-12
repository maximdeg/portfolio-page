"use client";

import React from 'react';
import { HiDatabase, HiCloud, HiGlobe } from "react-icons/hi";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const TechStack = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: additionalRef, isVisible: additionalVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: learningRef, isVisible: learningVisible } = useScrollAnimation<HTMLDivElement>();
  const { t } = useLanguage();

  const technologies = {
    [t('techStack.frontend')]: [
      { name: "Next.js", level: 90, color: "#000000" },
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
      { name: "Framer Motion", level: 80, color: "#BB4BE9" },
    ],
    [t('techStack.backend')]: [
      { name: "Node.js", level: 88, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "PostgreSQL", level: 82, color: "#336791" },
      { name: "MongoDB", level: 80, color: "#47A248" },
      { name: "Redis", level: 75, color: "#DC382D" },
    ],
    [t('techStack.tools')]: [
      { name: "Shopify", level: 85, color: "#96BF48" },
      { name: "WordPress", level: 85, color: "#21759B" },
      { name: "Docker", level: 75, color: "#2496ED" },
      { name: "Vercel", level: 88, color: "#000000" },
      { name: "Cloudinary", level: 80, color: "#3448C5" },
    ]
  };

  const categories = [
    {
      title: t('techStack.category1.title'),
      icon: <HiGlobe className="w-8 h-8" />,
      description: t('techStack.category1.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('techStack.category2.title'),
      icon: <HiDatabase className="w-8 h-8" />,
      description: t('techStack.category2.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('techStack.category3.title'),
      icon: <HiCloud className="w-8 h-8" />,
      description: t('techStack.category3.description'),
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="tech-stack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('techStack.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </div>

        {/* Technology Categories */}
        <div 
          ref={categoriesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${
            categoriesVisible ? 'scroll-stagger visible' : 'scroll-stagger'
          }`}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-600 via-blue-500 to-blue-300 p-[2px] hover-lift"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef}
          className={`space-y-12 ${
            skillsVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          {Object.entries(technologies).map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div 
          ref={additionalRef}
          className={`mt-16 ${
            additionalVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {t('techStack.additionalSkills')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "JavaScript", "PHP", "Liquid", "JWT", "Bcrypt", "ACF",
                "Gutenberg", "Schema.org", "Leaflet.js", "Sharp", "Stripe",
                "WhatsApp API", "Git", "Nginx", "Figma", "Radix UI"
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 rounded-lg px-4 py-3 text-center hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div 
          ref={learningRef}
          className={`mt-16 text-center ${
            learningVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('techStack.alwaysLearning.title')}
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              {t('techStack.alwaysLearning.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {t('techStack.alwaysLearning.tech1')}
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {t('techStack.alwaysLearning.tech2')}
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {t('techStack.alwaysLearning.tech3')}
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {t('techStack.alwaysLearning.tech4')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
