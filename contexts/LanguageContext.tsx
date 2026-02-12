"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.techStack': 'Tech Stack',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi 👋! My name is Maxim Degtiarev',
    'hero.title': 'Full Stack Web Developer',
    'hero.description': 'Experienced full-stack developer with 3+ years of expertise in Next.js and MERN Stack. Happy to help you with your',
    'hero.website': 'Website.',
    'hero.seeWork': 'See my work!',
    'hero.hireMe': 'Hire Me',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsCompleted': 'Big Projects Completed',
    'hero.clientSatisfaction': 'Client Satisfaction',
    
    // About Me
    'about.title': 'About Me',
    'about.description': 'Self-driven, highly motivated Full-Stack Web Developer with more than 3 years involved in the whole software development life cycle using JavaScript, TypeScript, React, CSS, HTML, and Node. Proven ability to manage projects independently, meet deadlines, and deliver high-quality code. While my experience has been primarily freelance, I am eager to transition into a collaborative team environment where I can contribute my skills, learn from experienced professionals, and grow as a developer. I am a fast learner with excellent memory and the ability to quickly grasp and apply new concepts. I thrive in challenging environments and am comfortable navigating change. Very interested in machine learning, cloud-computing and AI programming.',
    
    // Services (based on portfolio: Node/Next.js, CMS & E-commerce, DevOps)
    'services.title': 'My Services',
    'services.subtitle': 'I focus on scalable software engineering, AI integration, and conversion optimization. I turn complex architectures into fluid UX and profitable business tools.',
    'services.whyChooseMe': 'Why Choose Me?',
    'services.fastDelivery.title': 'Fast Delivery',
    'services.fastDelivery.description': 'Quick turnaround times without compromising quality',
    'services.communication.title': 'Clear Communication',
    'services.communication.description': 'Regular updates and transparent project management',
    'services.support.title': 'Ongoing Support',
    'services.support.description': 'Post-launch maintenance and support included',
    'services.webDesign.title': 'Frontend & Backend (Node / Next.js)',
    'services.webDesign.description': 'Next.js 14/15 (App Router), React 18/19, TypeScript. Atomic design, accessibility (WAI-ARIA), Core Web Vitals and Mobile-First. Backend with Node.js, Express, PostgreSQL, MongoDB, Redis. Auth with OAuth, JWT, RBAC and Bcrypt.',
    'services.webDesign.features': ['Next.js & React', 'TypeScript & Tailwind', 'PostgreSQL & MongoDB', 'JWT & OAuth'],
    'services.mobile.title': 'CMS & E-commerce',
    'services.mobile.description': 'Shopify: Liquid, Online Store 2.0, checkout customization. WordPress: headless and monolithic themes with PHP (Strict Typing), Custom Post Types and advanced metadata (ACF). Conversion-focused stores and content platforms.',
    'services.mobile.features': ['Shopify Liquid', 'WordPress & ACF', 'Custom themes', 'Technical SEO'],
    'services.api.title': 'DevOps & Integrations',
    'services.api.description': 'Docker, Nginx, CI/CD with Vercel. Generative AI APIs, Cloudinary for media, and notification automation (WhatsApp / Email). Reliable deployment and third-party integrations for production apps.',
    'services.api.features': ['Docker & Vercel', 'AI APIs', 'Cloudinary', 'WhatsApp / Email APIs'],
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Here are some of my recent projects. Each one represents a unique challenge and solution.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.node': 'Node',
    'portfolio.filter.wordpress': 'WordPress',
    'portfolio.filter.shopify': 'Shopify',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewCode': 'View Code',
    'portfolio.techUsed': 'Technologies Used:',
    'portfolio.viewLive': 'View Live',
    'portfolio.haveProject': 'Have a project in mind?',
    'portfolio.passionate': 'I\'m passionate about creating innovative web solutions that deliver exceptional user experiences.',
    'portfolio.workTogether': 'Let\'s work together to bring your ideas to life!',
    'portfolio.letsTalk': 'Let\'s Talk',
    
    // Portfolio Works
    'works.proj1.title': 'Next-Gen E-commerce',
    'works.proj1.subtitle': 'Full retail tech platform with AI asset automation',
    'works.proj1.description': 'I implemented Next.js 15 and React 19 for instant navigation. I integrated the Claid AI API in the admin backend to automate high-quality product image generation, optimizing the editorial workflow by 70%.',
    
    'works.proj2.title': 'Healthcare Management SaaS',
    'works.proj2.subtitle': 'Multi-provider automated appointment management system',
    'works.proj2.description': 'I developed a real-time availability engine that processes slots on the fly, integrating Upstash Redis for concurrency control and PostgreSQL for persistence. WhatsApp API reminder automation reduced no-shows by 40%.',
    
    'works.proj3.title': 'Enterprise Booking Engine',
    'works.proj3.subtitle': 'Full-stack experience booking platform with geospatial logic',
    'works.proj3.description': 'Node.js/MongoDB architecture with GeoJSON geospatial queries. I implemented an advanced security pipeline including rate-limiting, NoSQL injection and XSS prevention, and server-side image processing with Sharp.',
    
    'works.proj4.title': 'Author E-commerce',
    'works.proj4.subtitle': 'Premium sustainable athleisure store',
    'works.proj4.description': 'Custom Shopify theme (Liquid) built for conversion. I implemented API-based predictive search and a modular component architecture that lets the client scale the catalog while keeping load under 1.5s.',
    
    'works.proj5.title': 'Dance Sport Institutional Ecosystem',
    'works.proj5.subtitle': 'Data hub and competition management for the Argentine Dance Sport Association',
    'works.proj5.description': 'Turned WordPress into a data management app with Custom Post Types and extended metadata. Built a custom plugin for dynamic discipline mapping and national rankings management.',
    
    'works.proj6.title': 'Specialty Platform',
    'works.proj6.subtitle': 'Clinical practice digitization with wellness-focused UX',
    'works.proj6.description': 'Theme built from scratch with PHP Strict Typing, pixel-perfect fidelity and semantic SEO. Simplified admin interface with ACF for full client autonomy.',
    
    'works.proj7.title': 'Conversion Funnel',
    'works.proj7.subtitle': 'Strategic landing page for real estate coaching',
    'works.proj7.description': 'Next.js 14 for ultra-fast content delivery. Design based on consumer psychology and interactive components with Framer Motion, optimized for real-time lead capture and qualification.',
    
    // Tech Stack (based on portfolio)
    'techStack.title': 'My Tech Stack',
    'techStack.subtitle': 'Technologies and tools I use to build high-performance digital products, from frontend to DevOps.',
    'techStack.frontend': 'Frontend & UX',
    'techStack.backend': 'Backend & Data',
    'techStack.tools': 'CMS, E-commerce & DevOps',
    'techStack.category1.title': 'Frontend & UX',
    'techStack.category1.description': 'Next.js 14/15 (App Router), React 18/19, TypeScript. Tailwind, Radix UI, Framer Motion. Atomic design, WAI-ARIA, Core Web Vitals, Mobile-First.',
    'techStack.category2.title': 'Backend & Data',
    'techStack.category2.description': 'Node.js, Express. PostgreSQL, MongoDB, Redis. OAuth, JWT, RBAC, Bcrypt. Secure and scalable APIs and data layer.',
    'techStack.category3.title': 'CMS, E-commerce & DevOps',
    'techStack.category3.description': 'Shopify (Liquid, Online Store 2.0). WordPress (PHP, CPTs, ACF). Docker, Nginx, Vercel CI/CD. AI APIs, Cloudinary, WhatsApp/Email.',
    'techStack.additionalSkills': 'Additional Skills & Tools',
    'techStack.learning': 'Currently Learning',
    'techStack.alwaysLearning.title': 'Always Learning',
    'techStack.alwaysLearning.description': 'I stay current with 2026 fullstack trends: AI integration, edge runtimes, and modern tooling.',
    'techStack.alwaysLearning.tech1': 'AI & LLM APIs',
    'techStack.alwaysLearning.tech2': 'Edge Computing',
    'techStack.alwaysLearning.tech3': 'WebAssembly',
    'techStack.alwaysLearning.tech4': 'Real-time & Streaming',
    
    // Footer
    'footer.title': 'Get In Touch',
    'footer.subtitle': 'Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!',
    'footer.sendMessage': 'Send me a message',
    'footer.name': 'Name',
    'footer.email': 'Email',
    'footer.subject': 'Subject',
    'footer.message': 'Message',
    'footer.namePlaceholder': 'Your name',
    'footer.emailPlaceholder': 'your.email@example.com',
    'footer.subjectPlaceholder': 'What\'s this about?',
    'footer.messagePlaceholder': 'Tell me about your project...',
    'footer.send': 'Send Message',
    'footer.sending': 'Sending...',
    'footer.success': 'Message sent successfully! I\'ll get back to you soon.',
    'footer.contactInfo': 'Contact Information',
    'footer.workTogether': 'Let\'s work together to bring your ideas to life.',
    'footer.openOpportunities': 'I\'m always open to new opportunities and collaborations.',
    'footer.emailLabel': 'Email',
    'footer.locationLabel': 'Location',
    'footer.location': 'Santa Fe, Argentina',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portfolio',
    'nav.techStack': 'Tecnologías',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': '¡Hola 👋! Mi nombre es Maxim Degtiarev',
    'hero.title': 'Desarrollador Web Full Stack',
    'hero.description': 'Desarrollador full-stack experimentado con más de 3 años de experiencia en Next.js y MERN Stack. Feliz de ayudarte con tu',
    'hero.website': 'Sitio Web.',
    'hero.seeWork': '¡Ver mi trabajo!',
    'hero.hireMe': 'Contrátame',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsCompleted': 'Proyectos Completados',
    'hero.clientSatisfaction': 'Satisfacción del Cliente',
    
    // About Me
    'about.title': 'Sobre Mí',
    'about.description': 'Desarrollador Web Full-Stack autodirigido y altamente motivado con más de 3 años involucrado en todo el ciclo de vida del desarrollo de software usando JavaScript, TypeScript, React, CSS, HTML y Node. Capacidad comprobada para gestionar proyectos de forma independiente, cumplir plazos y entregar código de alta calidad. Si bien mi experiencia ha sido principalmente freelance, estoy ansioso por hacer la transición a un entorno de equipo colaborativo donde pueda contribuir con mis habilidades, aprender de profesionales experimentados y crecer como desarrollador. Soy un aprendiz rápido con excelente memoria y la capacidad de comprender y aplicar rápidamente nuevos conceptos. Prospero en entornos desafiantes y me siento cómodo navegando el cambio. Muy interesado en aprendizaje automático, computación en la nube y programación de IA.',
    
    // Services (basado en portfolio: Node/Next.js, CMS y E-commerce, DevOps)
    'services.title': 'Mis Servicios',
    'services.subtitle': 'Me enfoco en ingeniería de software escalable, integración de IA y optimización de conversiones. Transformo arquitecturas complejas en UX fluida y herramientas de negocio rentables.',
    'services.whyChooseMe': '¿Por Qué Elegirme?',
    'services.fastDelivery.title': 'Entrega Rápida',
    'services.fastDelivery.description': 'Tiempos de entrega rápidos sin comprometer la calidad',
    'services.communication.title': 'Comunicación Clara',
    'services.communication.description': 'Actualizaciones regulares y gestión transparente de proyectos',
    'services.support.title': 'Soporte Continuo',
    'services.support.description': 'Mantenimiento y soporte post-lanzamiento incluidos',
    'services.webDesign.title': 'Frontend y Backend (Node / Next.js)',
    'services.webDesign.description': 'Next.js 14/15 (App Router), React 18/19, TypeScript. Diseño atómico, accesibilidad (WAI-ARIA), Core Web Vitals y Mobile-First. Backend con Node.js, Express, PostgreSQL, MongoDB, Redis. Auth con OAuth, JWT, RBAC y Bcrypt.',
    'services.webDesign.features': ['Next.js y React', 'TypeScript y Tailwind', 'PostgreSQL y MongoDB', 'JWT y OAuth'],
    'services.mobile.title': 'CMS y E-commerce',
    'services.mobile.description': 'Shopify: Liquid, Online Store 2.0, personalización de checkout. WordPress: temas headless y monolíticos con PHP (Strict Typing), CPTs y metadatos avanzados (ACF). Tiendas y plataformas de contenido orientadas a conversión.',
    'services.mobile.features': ['Shopify Liquid', 'WordPress y ACF', 'Temas a medida', 'SEO técnico'],
    'services.api.title': 'DevOps e Integraciones',
    'services.api.description': 'Docker, Nginx, CI/CD con Vercel. APIs de IA generativa, Cloudinary para medios y automatización de notificaciones (WhatsApp / Email). Despliegue fiable e integraciones externas para apps en producción.',
    'services.api.features': ['Docker y Vercel', 'APIs de IA', 'Cloudinary', 'WhatsApp / Email APIs'],
    
    // Portfolio
    'portfolio.title': 'Mi Portfolio',
    'portfolio.subtitle': 'Aquí hay algunos de mis proyectos recientes. Cada uno representa un desafío y solución únicos.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.node': 'Node',
    'portfolio.filter.wordpress': 'WordPress',
    'portfolio.filter.shopify': 'Shopify',
    'portfolio.viewProject': 'Ver Proyecto',
    'portfolio.viewCode': 'Ver Código',
    'portfolio.techUsed': 'Tecnologías Utilizadas:',
    'portfolio.viewLive': 'Ver en Vivo',
    'portfolio.haveProject': '¿Tienes un proyecto en mente?',
    'portfolio.passionate': 'Me apasiona crear soluciones web innovadoras que ofrezcan experiencias de usuario excepcionales.',
    'portfolio.workTogether': '¡Trabajemos juntos para dar vida a tus ideas!',
    'portfolio.letsTalk': 'Hablemos',
    
    // Portfolio Works
    'works.proj1.title': 'E-commerce de Próxima Generación',
    'works.proj1.subtitle': 'Plataforma integral de retail tecnológico con automatización de activos por IA',
    'works.proj1.description': 'Implementé Next.js 15 y React 19 para navegación instantánea. Integré la API de Claid AI en el backend administrativo para automatizar la generación de imágenes de producto de alta calidad, optimizando el flujo editorial en un 70%.',
    
    'works.proj2.title': 'SaaS de Gestión de Salud',
    'works.proj2.subtitle': 'Sistema multi-proveedor para la gestión automatizada de citas médicas',
    'works.proj2.description': 'Desarrollé un motor de disponibilidad en tiempo real que procesa slots al vuelo, integrando Upstash Redis para control de concurrencia y PostgreSQL para persistencia. Automatización de recordatorios vía WhatsApp API, reduciendo ausencias en un 40%.',
    
    'works.proj3.title': 'Booking Engine de Grado Empresarial',
    'works.proj3.subtitle': 'Plataforma Full-Stack para reserva de experiencias con lógica geoespacial',
    'works.proj3.description': 'Arquitectura Node.js/MongoDB con consultas geoespaciales (GeoJSON). Pipeline de seguridad avanzado con rate-limiting, prevención de inyecciones NoSQL y XSS, y procesamiento de imágenes en servidor con Sharp.',
    
    'works.proj4.title': 'E-commerce de Autor',
    'works.proj4.subtitle': 'Tienda premium de athleisure sostenible',
    'works.proj4.description': 'Custom Theme en Shopify (Liquid) optimizado para conversión. Búsqueda predictiva basada en API y arquitectura de componentes modulares que permite escalar el catálogo manteniendo carga inferior a 1.5s.',
    
    'works.proj5.title': 'Ecosistema Institucional de Baile Deportivo',
    'works.proj5.subtitle': 'Central de datos y gestión de competencias para la AABD',
    'works.proj5.description': 'Transformación de WordPress en aplicación de gestión de datos con Custom Post Types y metadatos extendidos. Plugin propio para mapeo dinámico de disciplinas y gestión de rankings nacionales.',
    
    'works.proj6.title': 'Plataforma de Especialidad',
    'works.proj6.subtitle': 'Digitalización de práctica clínica con enfoque en UX de bienestar',
    'works.proj6.description': 'Tema desde cero con PHP Strict Typing, fidelidad visual pixel-perfect y optimización de SEO semántico. Interfaz administrativa simplificada con ACF para autonomía total del cliente.',
    
    'works.proj7.title': 'Funnel de Conversión',
    'works.proj7.subtitle': 'Landing page estratégica para coaching inmobiliario',
    'works.proj7.description': 'Next.js 14 para entrega de contenido ultrarrápida. Diseño basado en psicología del consumidor y componentes interactivos con Framer Motion, optimizado para captación y cualificación de leads en tiempo real.',
    
    // Tech Stack (basado en portfolio)
    'techStack.title': 'Mi Stack Tecnológico',
    'techStack.subtitle': 'Tecnologías y herramientas que uso para construir productos digitales de alto rendimiento, desde frontend hasta DevOps.',
    'techStack.frontend': 'Frontend y UX',
    'techStack.backend': 'Backend y Datos',
    'techStack.tools': 'CMS, E-commerce y DevOps',
    'techStack.category1.title': 'Frontend y UX',
    'techStack.category1.description': 'Next.js 14/15 (App Router), React 18/19, TypeScript. Tailwind, Radix UI, Framer Motion. Diseño atómico, WAI-ARIA, Core Web Vitals, Mobile-First.',
    'techStack.category2.title': 'Backend y Datos',
    'techStack.category2.description': 'Node.js, Express. PostgreSQL, MongoDB, Redis. OAuth, JWT, RBAC, Bcrypt. APIs y capa de datos segura y escalable.',
    'techStack.category3.title': 'CMS, E-commerce y DevOps',
    'techStack.category3.description': 'Shopify (Liquid, Online Store 2.0). WordPress (PHP, CPTs, ACF). Docker, Nginx, Vercel CI/CD. APIs de IA, Cloudinary, WhatsApp/Email.',
    'techStack.additionalSkills': 'Habilidades y herramientas adicionales',
    'techStack.learning': 'Actualmente Aprendiendo',
    'techStack.alwaysLearning.title': 'Siempre Aprendiendo',
    'techStack.alwaysLearning.description': 'Me mantengo al día con las tendencias fullstack 2026: integración con IA, edge runtimes y herramientas modernas.',
    'techStack.alwaysLearning.tech1': 'IA y APIs LLM',
    'techStack.alwaysLearning.tech2': 'Edge Computing',
    'techStack.alwaysLearning.tech3': 'WebAssembly',
    'techStack.alwaysLearning.tech4': 'Tiempo real y streaming',
    
    // Footer
    'footer.title': 'Ponte en Contacto',
    'footer.subtitle': '¡No dudes en contactarme para cualquier consulta, oportunidades de colaboración o simplemente para saludar!',
    'footer.sendMessage': 'Envíame un mensaje',
    'footer.name': 'Nombre',
    'footer.email': 'Email',
    'footer.subject': 'Asunto',
    'footer.message': 'Mensaje',
    'footer.namePlaceholder': 'Tu nombre',
    'footer.emailPlaceholder': 'tu.email@ejemplo.com',
    'footer.subjectPlaceholder': '¿De qué se trata?',
    'footer.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'footer.send': 'Enviar Mensaje',
    'footer.sending': 'Enviando...',
    'footer.success': '¡Mensaje enviado exitosamente! Te responderé pronto.',
    'footer.contactInfo': 'Información de Contacto',
    'footer.workTogether': 'Trabajemos juntos para dar vida a tus ideas.',
    'footer.openOpportunities': 'Siempre estoy abierto a nuevas oportunidades y colaboraciones.',
    'footer.emailLabel': 'Email',
    'footer.locationLabel': 'Ubicación',
    'footer.location': 'Santa Fe, Argentina',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return typeof translation === 'string' ? translation : key;
  };

  const tArray = (key: string): string[] => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return Array.isArray(translation) ? translation : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 