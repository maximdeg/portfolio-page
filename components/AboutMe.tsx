"use client";

import React from "react";
import { PiDevicesBold } from "react-icons/pi";
import { FiCodesandbox } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutMe = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation<HTMLDivElement>();

  const services = [
    {
      icon: <PiDevicesBold className="w-8 h-8" />,
      title: "Website Design and Development",
      description: "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals. I can also help you with your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Modern UI/UX"]
    },
    {
      icon: <FiCodesandbox className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Reach your customers wherever they are. I craft engaging and user-friendly iOS and Android apps that seamlessly integrate with your business needs. From concept to deployment, I can guide you through the entire process, ensuring a smooth and successful mobile app launch.",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      icon: <TbApi className="w-8 h-8" />,
      title: "API Development",
      description: "We specialize in designing and developing applications using a microservices architecture. Our expertise lies in crafting robust and efficient APIs that seamlessly integrate with your existing systems, enabling a flexible and future-proof technology stack for your business.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"]
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
            <span className="gradient-text">My Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your digital ideas to life. 
            From concept to deployment, I'm here to make your vision a reality.
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
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Quick turnaround times without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">💬</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clear Communication</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Regular updates and transparent project management</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">🛠️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ongoing Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Post-launch maintenance and support included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
