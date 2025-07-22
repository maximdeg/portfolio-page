"use client";

import React from "react";
import { PiDevicesBold } from "react-icons/pi";
import { FiCodesandbox } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation<HTMLDivElement>();
  const { t, tArray } = useLanguage();

  const services = [
    {
      icon: <PiDevicesBold className="w-8 h-8" />,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description'),
      features: tArray('services.webDesign.features')
    },
    {
      icon: <FiCodesandbox className="w-8 h-8" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: tArray('services.mobile.features')
    },
    {
      icon: <TbApi className="w-8 h-8" />,
      title: t('services.api.title'),
      description: t('services.api.description'),
      features: tArray('services.api.features')
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="my-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('services.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${
            servicesVisible ? 'scroll-stagger visible' : 'scroll-stagger'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 via-blue-500 to-blue-300 p-[2px] hover-lift"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          ref={infoRef}
          className={`mt-16 text-center ${
            infoVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
          }`}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('services.whyChooseMe')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('services.fastDelivery.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('services.fastDelivery.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">💬</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('services.communication.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('services.communication.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">🛠️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('services.support.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('services.support.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
