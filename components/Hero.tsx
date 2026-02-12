"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 mt-16 sm:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div 
            ref={textRef}
            className={`flex-1 text-center lg:text-left space-y-8 transition-all duration-1000 ${
              textVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
            }`}
          >
            <div className="space-y-4 md:mt-12">
              <p className="text-lg md:text-xl text-orange-600 dark:text-orange-400 font-medium">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}{" "}
                <span className="text-orange-600 dark:text-orange-400 font-semibold">{t('hero.website')}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="btn-primary inline-flex items-center justify-center group"
              >
                {t('hero.seeWork')}
                <HiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </Link>
              <Link
                href="#footer"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                {t('hero.hireMe')}
                <HiDownload className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.projectsCompleted')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.clientSatisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${
              imageVisible ? 'scroll-scale-in visible' : 'scroll-scale-in'
            }`}
          >
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  className="rounded-full object-cover shadow-2xl hover-lift"
                  src="https://res.cloudinary.com/djdnlogf1/image/upload/v1745878815/DSC_9974-12_zqvpfd.jpg"
                  alt="Maxim Degtiarev"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-blue-600 rounded-full opacity-5 blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-10"></div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute top-12 -right-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover-lift float w-12 h-12 flex items-center justify-center" style={{ animationDelay: '0s' }}>
                <Image src="/icons/icons8-javascript.svg" alt="JavaScript" width={32} height={32} className="object-contain" />
              </div>
              <div className="absolute -bottom-8 left-16 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover-lift float w-12 h-12 flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
                <Image src="/icons/icons8-typescript.svg" alt="TypeScript" width={32} height={32} className="object-contain" />
              </div>
              <div className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover-lift float w-12 h-12 flex items-center justify-center" style={{ animationDelay: '0.75s' }}>
                <Image src="/icons/icons8-wordpress.svg" alt="WordPress" width={32} height={32} className="object-contain" />
              </div>
              <div className="absolute bottom-16 -right-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover-lift float w-12 h-12 flex items-center justify-center" style={{ animationDelay: '2.25s' }}>
                <Image src="/icons/icons8-shopify.svg" alt="Shopify" width={32} height={32} className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow">
          <HiArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
