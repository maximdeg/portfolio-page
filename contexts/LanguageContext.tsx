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
    'hero.description': 'Full-stack developer with 4+ years building production apps with Next.js, React, TypeScript and Node — from booking platforms and online stores to subscription video products. Happy to help you with your',
    'hero.website': 'Website.',
    'hero.seeWork': 'See my work!',
    'hero.hireMe': 'Hire Me',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsCompleted': 'Projects Shipped',
    'hero.countries': 'Countries (US & AR)',

    // About Me
    'about.title': 'About Me',
    'about.description': 'Full-Stack Web Developer with more than 4 years of freelance experience owning the whole software life cycle — discovery, design, build, testing and deployment — for clients in the United States and Argentina. I build with TypeScript, React, Next.js, React Router and Node.js on top of PostgreSQL, MongoDB and Supabase, and integrate the services real businesses need: payments (Stripe, Mercado Pago), WhatsApp and email notifications, authentication and media pipelines. I work test-first with Vitest and Playwright, document domain language and architecture decisions (ADRs), and use AI-assisted engineering with Claude Code to ship faster without giving up code quality. I also deliver Shopify and WordPress work when that is the right tool. Fluent in English, Spanish and Russian, and open to joining a product team where I can contribute and keep growing.',
    
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
    'services.webDesign.description': 'Next.js 15/16 (App Router), React Router 7, React 19, TypeScript. Accessibility (WAI-ARIA), Core Web Vitals and Mobile-First. Backend with Node.js, Express, PostgreSQL (Drizzle), MongoDB and Supabase. Auth with NextAuth, JWT, RBAC and Bcrypt. Payments with Stripe and Mercado Pago.',
    'services.webDesign.features': ['Next.js & React Router', 'TypeScript & Tailwind', 'PostgreSQL, MongoDB & Supabase', 'Stripe & Mercado Pago'],
    'services.mobile.title': 'CMS & E-commerce',
    'services.mobile.description': 'Shopify: Liquid, Online Store 2.0, checkout customization. WordPress: headless and monolithic themes with PHP (Strict Typing), Custom Post Types and advanced metadata (ACF). Conversion-focused stores and content platforms.',
    'services.mobile.features': ['Shopify Liquid', 'WordPress & ACF', 'Custom themes', 'Technical SEO'],
    'services.api.title': 'DevOps & Integrations',
    'services.api.description': 'Docker, CI/CD with Vercel. WhatsApp Cloud API and email notifications, payment webhooks, Cloudinary media and generative AI APIs. Automated tests (Vitest, Playwright) so integrations keep working after every release.',
    'services.api.features': ['Docker & Vercel', 'WhatsApp / Email APIs', 'Payment webhooks', 'Vitest & Playwright'],

    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Client work and personal projects — from full-stack web apps to stores and marketing sites.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.webapps': 'Web Apps',
    'portfolio.filter.sites': 'Landing & Sites',
    'portfolio.badge.inProgress': 'In progress',
    'portfolio.badge.personal': 'Personal project',
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
    
    'works.proj2.title': 'Dermatology Booking Platform',
    'works.proj2.subtitle': 'Online appointments and automated WhatsApp reminders for a medical practice',
    'works.proj2.description': 'Patients book online and the doctor manages everything from a dashboard. I built the availability engine (per visit type, 10-minute grid, back-to-back slots, booking limits per patient), NextAuth v5 authentication and WhatsApp reminders through the Meta Cloud API, which improved appointment confirmations by 80%. Covered by Vitest unit tests and Playwright visual regression, with 6 documented architecture decisions.',

    'works.proj3.title': 'Natourex — Tour Booking API',
    'works.proj3.subtitle': 'RESTful API and server-rendered site with geospatial search',
    'works.proj3.description': 'Node.js/Express/MongoDB MVC app with GeoJSON geospatial queries and aggregation pipelines, JWT auth with password reset and roles, and a security layer with rate-limiting, NoSQL-injection and XSS prevention. Server-side image processing with Sharp and transactional emails.',
    
    'works.proj4.title': 'Author E-commerce',
    'works.proj4.subtitle': 'Premium sustainable athleisure store',
    'works.proj4.description': 'Custom Shopify theme (Liquid) built for conversion. I implemented API-based predictive search and a modular component architecture that lets the client scale the catalog while keeping load under 1.5s.',
    
    'works.proj5.title': 'Sports Federation Data Platform',
    'works.proj5.subtitle': 'Competition and national rankings hub for the Argentine Dance Sport Association',
    'works.proj5.description': 'Turned WordPress into a data management app with Custom Post Types and extended metadata. Built a custom plugin for dynamic discipline mapping and national rankings management.',
    
    'works.proj6.title': 'Specialty Platform',
    'works.proj6.subtitle': 'Clinical practice digitization with wellness-focused UX',
    'works.proj6.description': 'Theme built from scratch with PHP Strict Typing, pixel-perfect fidelity and semantic SEO. Simplified admin interface with ACF for full client autonomy.',
    
    'works.proj7.title': 'Conversion Funnel',
    'works.proj7.subtitle': 'Strategic landing page for real estate coaching',
    'works.proj7.description': 'Next.js 14 for ultra-fast content delivery. Design based on consumer psychology and interactive components with Framer Motion, optimized for real-time lead capture and qualification.',

    'works.proj8.title': 'Video Course Streaming Platform',
    'works.proj8.subtitle': 'Subscription e-learning platform for an online dance school',
    'works.proj8.description': 'Public site live on Next.js 16; the subscriber platform is being built with React Router 7, Effect and PostgreSQL (Drizzle). Role-based access (Super Admin / Admin / Subscriber), tiered paywall per course, session limits, Stripe webhooks and bilingual ES/EN content. Tested with Vitest against in-memory PGLite and delivered through 50+ reviewed pull requests.',

    'works.proj9.title': 'Content Agency Site & Digital Store',
    'works.proj9.subtitle': 'Website, admin panel and downloadable-products shop for Luz Roja Contenidos',
    'works.proj9.description': 'Next.js 15 with Supabase (Postgres, Auth, Storage). An admin panel to manage products and testimonials, Mercado Pago checkout with webhook-driven order states, and signed, expiring download links sent by email. Repository pattern with in-memory adapters makes the store logic fully unit-tested with Vitest.',

    'works.proj10.title': 'Marketing Agency Landing',
    'works.proj10.subtitle': 'One-page site for Simply Healthy Marketing (USA)',
    'works.proj10.description': 'Hand-coded HTML, CSS and vanilla JS built from the client wireframe and brand system. Flodesk lead-magnet opt-in, Calendly booking, testimonial and results sections, and a privacy policy page — fast, responsive and easy to maintain.',

    'works.proj11.title': 'Real Estate Website Components',
    'works.proj11.subtitle': 'Custom sections for Calenda Real Estate Group, Southwest Florida',
    'works.proj11.description': 'Responsive featured-listings and neighborhood sections embedded into the brokerage real-estate platform. Fluid layouts with CSS Grid and clamp(), image optimization and consistent styling across the site.',

    'works.proj12.title': 'Therapy Practice Website',
    'works.proj12.subtitle': 'WordPress development and maintenance for Ryan Ginn, couples therapist (USA)',
    'works.proj12.description': 'Ongoing work on a WordPress site with a Pro child theme: layout and content updates, SEO (Yoast), caching and performance, login security, events calendar and full-site backups and migrations.',

    // Tech Stack (based on portfolio)
    'techStack.title': 'My Tech Stack',
    'techStack.subtitle': 'Technologies and tools I use to build high-performance digital products, from frontend to DevOps.',
    'techStack.frontend': 'Frontend & UX',
    'techStack.backend': 'Backend & Data',
    'techStack.tools': 'CMS, E-commerce & DevOps',
    'techStack.testing': 'Testing & AI Workflow',
    'techStack.category1.title': 'Frontend & UX',
    'techStack.category1.description': 'Next.js 15/16 (App Router), React Router 7, React 19, TypeScript. Tailwind, Radix UI, Framer Motion. WAI-ARIA, Core Web Vitals, Mobile-First.',
    'techStack.category2.title': 'Backend & Data',
    'techStack.category2.description': 'Node.js, Express, Effect. PostgreSQL (Drizzle), MongoDB, Supabase. NextAuth, JWT, RBAC, Bcrypt. Stripe and Mercado Pago webhooks.',
    'techStack.category3.title': 'CMS, E-commerce & DevOps',
    'techStack.category3.description': 'Shopify (Liquid, Online Store 2.0). WordPress (PHP, CPTs, ACF). Docker, Vercel CI/CD. Cloudinary, WhatsApp Cloud API, email.',
    'techStack.category4.title': 'Testing & AI Workflow',
    'techStack.category4.description': 'Test-first with Vitest and Testing Library, Playwright visual regression. AI-assisted engineering with Claude Code, documented with domain glossaries and ADRs.',
    'techStack.additionalSkills': 'Additional Skills & Tools',
    'techStack.learning': 'How I Work',
    'techStack.alwaysLearning.title': 'AI-Assisted, Test-First Engineering',
    'techStack.alwaysLearning.description': 'I pair with AI coding agents for the mechanical work and keep the judgment: every feature starts from a shared domain glossary, gets tests first, and lands through a reviewed pull request.',
    'techStack.alwaysLearning.tech1': 'Claude Code',
    'techStack.alwaysLearning.tech2': 'TDD with Vitest',
    'techStack.alwaysLearning.tech3': 'Playwright visual tests',
    'techStack.alwaysLearning.tech4': 'ADRs & domain docs',
    
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
    'hero.description': 'Desarrollador full-stack con más de 4 años construyendo aplicaciones en producción con Next.js, React, TypeScript y Node — desde plataformas de turnos y tiendas online hasta productos de video por suscripción. Feliz de ayudarte con tu',
    'hero.website': 'Sitio Web.',
    'hero.seeWork': '¡Ver mi trabajo!',
    'hero.hireMe': 'Contrátame',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsCompleted': 'Proyectos Entregados',
    'hero.countries': 'Países (EE.UU. y AR)',

    // About Me
    'about.title': 'Sobre Mí',
    'about.description': 'Desarrollador Web Full-Stack con más de 4 años de experiencia freelance a cargo de todo el ciclo de vida del software — relevamiento, diseño, desarrollo, testing y despliegue — para clientes de Estados Unidos y Argentina. Trabajo con TypeScript, React, Next.js, React Router y Node.js sobre PostgreSQL, MongoDB y Supabase, e integro los servicios que los negocios reales necesitan: pagos (Stripe, Mercado Pago), notificaciones por WhatsApp y email, autenticación y gestión de medios. Trabajo con tests primero usando Vitest y Playwright, documento el lenguaje de dominio y las decisiones de arquitectura (ADRs), y uso ingeniería asistida por IA con Claude Code para entregar más rápido sin resignar calidad de código. También desarrollo en Shopify y WordPress cuando es la herramienta adecuada. Hablo inglés, español y ruso, y estoy abierto a sumarme a un equipo de producto donde pueda aportar y seguir creciendo.',
    
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
    'services.webDesign.description': 'Next.js 15/16 (App Router), React Router 7, React 19, TypeScript. Accesibilidad (WAI-ARIA), Core Web Vitals y Mobile-First. Backend con Node.js, Express, PostgreSQL (Drizzle), MongoDB y Supabase. Auth con NextAuth, JWT, RBAC y Bcrypt. Pagos con Stripe y Mercado Pago.',
    'services.webDesign.features': ['Next.js y React Router', 'TypeScript y Tailwind', 'PostgreSQL, MongoDB y Supabase', 'Stripe y Mercado Pago'],
    'services.mobile.title': 'CMS y E-commerce',
    'services.mobile.description': 'Shopify: Liquid, Online Store 2.0, personalización de checkout. WordPress: temas headless y monolíticos con PHP (Strict Typing), CPTs y metadatos avanzados (ACF). Tiendas y plataformas de contenido orientadas a conversión.',
    'services.mobile.features': ['Shopify Liquid', 'WordPress y ACF', 'Temas a medida', 'SEO técnico'],
    'services.api.title': 'DevOps e Integraciones',
    'services.api.description': 'Docker, CI/CD con Vercel. WhatsApp Cloud API y notificaciones por email, webhooks de pago, Cloudinary para medios y APIs de IA generativa. Tests automatizados (Vitest, Playwright) para que las integraciones sigan funcionando en cada release.',
    'services.api.features': ['Docker y Vercel', 'WhatsApp / Email APIs', 'Webhooks de pago', 'Vitest y Playwright'],

    // Portfolio
    'portfolio.title': 'Mi Portfolio',
    'portfolio.subtitle': 'Trabajos para clientes y proyectos personales — desde aplicaciones web full-stack hasta tiendas y sitios de marketing.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.webapps': 'Apps Web',
    'portfolio.filter.sites': 'Landings y Sitios',
    'portfolio.badge.inProgress': 'En desarrollo',
    'portfolio.badge.personal': 'Proyecto personal',
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
    
    'works.proj2.title': 'Plataforma de Turnos para Dermatología',
    'works.proj2.subtitle': 'Turnos online y recordatorios automáticos por WhatsApp para un consultorio médico',
    'works.proj2.description': 'Los pacientes reservan online y la doctora gestiona todo desde un panel. Construí el motor de disponibilidad (por tipo de visita, grilla de 10 minutos, turnos consecutivos, límite de turnos por paciente), autenticación con NextAuth v5 y recordatorios por WhatsApp con la Meta Cloud API, que mejoraron la confirmación de turnos en un 80%. Cubierto con tests unitarios en Vitest y regresión visual con Playwright, con 6 decisiones de arquitectura documentadas.',

    'works.proj3.title': 'Natourex — API de Reserva de Tours',
    'works.proj3.subtitle': 'API RESTful y sitio renderizado en servidor con búsqueda geoespacial',
    'works.proj3.description': 'App MVC en Node.js/Express/MongoDB con consultas geoespaciales (GeoJSON) y pipelines de agregación, autenticación JWT con recuperación de contraseña y roles, y una capa de seguridad con rate-limiting y prevención de inyecciones NoSQL y XSS. Procesamiento de imágenes en servidor con Sharp y emails transaccionales.',
    
    'works.proj4.title': 'E-commerce de Autor',
    'works.proj4.subtitle': 'Tienda premium de athleisure sostenible',
    'works.proj4.description': 'Custom Theme en Shopify (Liquid) optimizado para conversión. Búsqueda predictiva basada en API y arquitectura de componentes modulares que permite escalar el catálogo manteniendo carga inferior a 1.5s.',
    
    'works.proj5.title': 'Plataforma de Datos para Federación Deportiva',
    'works.proj5.subtitle': 'Central de competencias y rankings nacionales para la Asociación Argentina de Baile Deportivo',
    'works.proj5.description': 'Transformación de WordPress en aplicación de gestión de datos con Custom Post Types y metadatos extendidos. Plugin propio para mapeo dinámico de disciplinas y gestión de rankings nacionales.',
    
    'works.proj6.title': 'Plataforma de Especialidad',
    'works.proj6.subtitle': 'Digitalización de práctica clínica con enfoque en UX de bienestar',
    'works.proj6.description': 'Tema desde cero con PHP Strict Typing, fidelidad visual pixel-perfect y optimización de SEO semántico. Interfaz administrativa simplificada con ACF para autonomía total del cliente.',
    
    'works.proj7.title': 'Funnel de Conversión',
    'works.proj7.subtitle': 'Landing page estratégica para coaching inmobiliario',
    'works.proj7.description': 'Next.js 14 para entrega de contenido ultrarrápida. Diseño basado en psicología del consumidor y componentes interactivos con Framer Motion, optimizado para captación y cualificación de leads en tiempo real.',

    'works.proj8.title': 'Plataforma de Streaming de Cursos',
    'works.proj8.subtitle': 'Plataforma e-learning por suscripción para una escuela de baile online',
    'works.proj8.description': 'Sitio público en producción con Next.js 16; la plataforma de suscriptores se construye con React Router 7, Effect y PostgreSQL (Drizzle). Acceso por roles (Super Admin / Admin / Suscriptor), paywall por niveles de curso, límite de sesiones, webhooks de Stripe y contenido bilingüe ES/EN. Testeado con Vitest sobre PGLite en memoria y entregado mediante más de 50 pull requests revisados.',

    'works.proj9.title': 'Sitio y Tienda Digital para Agencia de Contenidos',
    'works.proj9.subtitle': 'Sitio web, panel de administración y tienda de descargables para Luz Roja Contenidos',
    'works.proj9.description': 'Next.js 15 con Supabase (Postgres, Auth, Storage). Panel de administración para productos y testimonios, checkout con Mercado Pago con estados de pedido controlados por webhooks y links de descarga firmados y con vencimiento enviados por email. Patrón repositorio con adaptadores en memoria para que la lógica de la tienda esté totalmente testeada con Vitest.',

    'works.proj10.title': 'Landing para Agencia de Marketing',
    'works.proj10.subtitle': 'Sitio one-page para Simply Healthy Marketing (EE.UU.)',
    'works.proj10.description': 'HTML, CSS y JavaScript vanilla escritos a mano a partir del wireframe y el sistema de marca del cliente. Opt-in de lead magnet con Flodesk, reservas con Calendly, secciones de testimonios y resultados, y página de política de privacidad — rápido, responsivo y fácil de mantener.',

    'works.proj11.title': 'Componentes Web para Inmobiliaria',
    'works.proj11.subtitle': 'Secciones a medida para Calenda Real Estate Group, sudoeste de Florida',
    'works.proj11.description': 'Secciones responsivas de propiedades destacadas y barrios integradas en la plataforma inmobiliaria del cliente. Layouts fluidos con CSS Grid y clamp(), optimización de imágenes y estilos consistentes en todo el sitio.',

    'works.proj12.title': 'Sitio para Consultorio de Terapia',
    'works.proj12.subtitle': 'Desarrollo y mantenimiento WordPress para Ryan Ginn, terapeuta de parejas (EE.UU.)',
    'works.proj12.description': 'Trabajo continuo sobre un sitio WordPress con child theme de Pro: actualizaciones de diseño y contenido, SEO (Yoast), caché y rendimiento, seguridad de login, calendario de eventos y backups y migraciones completas.',

    // Tech Stack (basado en portfolio)
    'techStack.title': 'Mi Stack Tecnológico',
    'techStack.subtitle': 'Tecnologías y herramientas que uso para construir productos digitales de alto rendimiento, desde frontend hasta DevOps.',
    'techStack.frontend': 'Frontend y UX',
    'techStack.backend': 'Backend y Datos',
    'techStack.tools': 'CMS, E-commerce y DevOps',
    'techStack.testing': 'Testing y Flujo con IA',
    'techStack.category1.title': 'Frontend y UX',
    'techStack.category1.description': 'Next.js 15/16 (App Router), React Router 7, React 19, TypeScript. Tailwind, Radix UI, Framer Motion. WAI-ARIA, Core Web Vitals, Mobile-First.',
    'techStack.category2.title': 'Backend y Datos',
    'techStack.category2.description': 'Node.js, Express, Effect. PostgreSQL (Drizzle), MongoDB, Supabase. NextAuth, JWT, RBAC, Bcrypt. Webhooks de Stripe y Mercado Pago.',
    'techStack.category3.title': 'CMS, E-commerce y DevOps',
    'techStack.category3.description': 'Shopify (Liquid, Online Store 2.0). WordPress (PHP, CPTs, ACF). Docker, Vercel CI/CD. Cloudinary, WhatsApp Cloud API, email.',
    'techStack.category4.title': 'Testing y Flujo con IA',
    'techStack.category4.description': 'Tests primero con Vitest y Testing Library, regresión visual con Playwright. Ingeniería asistida por IA con Claude Code, documentada con glosarios de dominio y ADRs.',
    'techStack.additionalSkills': 'Habilidades y herramientas adicionales',
    'techStack.learning': 'Cómo Trabajo',
    'techStack.alwaysLearning.title': 'Ingeniería Asistida por IA y con Tests Primero',
    'techStack.alwaysLearning.description': 'Trabajo junto a agentes de IA para la parte mecánica y me quedo con el criterio: cada funcionalidad parte de un glosario de dominio compartido, se escribe con tests primero y se integra mediante un pull request revisado.',
    'techStack.alwaysLearning.tech1': 'Claude Code',
    'techStack.alwaysLearning.tech2': 'TDD con Vitest',
    'techStack.alwaysLearning.tech3': 'Tests visuales con Playwright',
    'techStack.alwaysLearning.tech4': 'ADRs y docs de dominio',
    
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