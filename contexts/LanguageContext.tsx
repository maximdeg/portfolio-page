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
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'I\'m a passionate full-stack developer with expertise in modern web technologies. From concept to deployment, I\'m here to make your vision a reality.',
    'services.whyChooseMe': 'Why Choose Me?',
    'services.fastDelivery.title': 'Fast Delivery',
    'services.fastDelivery.description': 'Quick turnaround times without compromising quality',
    'services.communication.title': 'Clear Communication',
    'services.communication.description': 'Regular updates and transparent project management',
    'services.support.title': 'Ongoing Support',
    'services.support.description': 'Post-launch maintenance and support included',
    'services.webDesign.title': 'Website Design and Development',
    'services.webDesign.description': 'I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals. I can also help you with your ready-made design. Whether it\'s a landing page or a business card website, I will make it look great and work smoothly on any device.',
    'services.webDesign.features': ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Modern UI/UX'],
    'services.mobile.title': 'Mobile App Development',
    'services.mobile.description': 'Reach your customers wherever they are. I craft engaging and user-friendly iOS and Android apps that seamlessly integrate with your business needs. From concept to deployment, I can guide you through the entire process, ensuring a smooth and successful mobile app launch.',
    'services.mobile.features': ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
    'services.api.title': 'API Development',
    'services.api.description': 'We specialize in designing and developing applications using a microservices architecture. Our expertise lies in crafting robust and efficient APIs that seamlessly integrate with your existing systems, enabling a flexible and future-proof technology stack for your business.',
    'services.api.features': ['RESTful APIs', 'GraphQL', 'Microservices', 'Database Design'],
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Here are some of my recent projects. Each one represents a unique challenge and solution.',
    'portfolio.filter.all': 'All',
    'portfolio.filter.web': 'Web',
    'portfolio.filter.mobile': 'Mobile',
    'portfolio.filter.api': 'API',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewCode': 'View Code',
    'portfolio.techUsed': 'Technologies Used:',
    'portfolio.viewLive': 'View Live',
    'portfolio.haveProject': 'Have a project in mind?',
    'portfolio.passionate': 'I\'m passionate about creating innovative web solutions that deliver exceptional user experiences.',
    'portfolio.workTogether': 'Let\'s work together to bring your ideas to life!',
    'portfolio.letsTalk': 'Let\'s Talk',
    
    // Portfolio Works
    'works.startup.title': 'Start-up computer company',
    'works.startup.subtitle': 'Start-up website design and development',
    'works.startup.description': 'A modern computer requirements website for a startup, built with a Figma-designed interface and a robust Next.js/React framework for optimal performance and scalability.',
    
    'works.booking.title': 'Appointment Booking System',
    'works.booking.subtitle': 'Client and Admin appointment administration',
    'works.booking.description': 'Designed and built an efficient appointment booking platform for both clients and administrators, leveraging Next.js for a smooth user experience, Redux for robust state management, and a secure PostgreSQL database on AWS RDS accessed via a RESTful API.',
    
    'works.natourex.title': 'Natourex',
    'works.natourex.subtitle': 'Tours e-commerce website',
    'works.natourex.description': 'Website coded using SSR and implementing self-made RESTful API with NodeJs. Routing and middlewares with Express. CRUD operations, data modeling, population, geospatial data using mongoose and MongoDB Atlas. JWT authentication and cookies implementation. Stripe payment integration.',
    
    'works.slack.title': 'Slack Clone',
    'works.slack.subtitle': 'Community chat app',
    'works.slack.description': 'Developed a real-time chat application using the MERN stack, featuring user authentication, direct messaging updates, group channels, and message persistence.',
    
    // Tech Stack
    'techStack.title': 'My Tech Stack',
    'techStack.subtitle': 'Technologies and tools I use to bring ideas to life',
    'techStack.frontend': 'Frontend',
    'techStack.backend': 'Backend',
    'techStack.tools': 'Tools & Others',
    'techStack.learning': 'Currently Learning',
    'techStack.alwaysLearning.title': 'Always Learning',
    'techStack.alwaysLearning.description': 'I\'m constantly learning and staying up-to-date with the latest technologies and best practices.',
    'techStack.alwaysLearning.kubernetes': 'Kubernetes',
    'techStack.alwaysLearning.machineLearning': 'Machine Learning',
    'techStack.alwaysLearning.microservices': 'Microservices',
    'techStack.alwaysLearning.web3': 'Web3',
    
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
    'footer.emailLabel': 'Email',
    'footer.locationLabel': 'Location',
    'footer.location': 'Argentina',
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
    
    // Services
    'services.title': 'Mis Servicios',
    'services.subtitle': 'Soy un desarrollador full-stack apasionado con experiencia en tecnologías web modernas. Desde el concepto hasta el despliegue, estoy aquí para hacer realidad tu visión.',
    'services.whyChooseMe': '¿Por Qué Elegirme?',
    'services.fastDelivery.title': 'Entrega Rápida',
    'services.fastDelivery.description': 'Tiempos de entrega rápidos sin comprometer la calidad',
    'services.communication.title': 'Comunicación Clara',
    'services.communication.description': 'Actualizaciones regulares y gestión transparente de proyectos',
    'services.support.title': 'Soporte Continuo',
    'services.support.description': 'Mantenimiento y soporte post-lanzamiento incluidos',
    'services.webDesign.title': 'Diseño y Desarrollo de Sitios Web',
    'services.webDesign.description': 'Puedo diseñar tu sitio web desde cero. Creo diseños modernos, simples y fáciles de usar que coinciden con tu marca y objetivos. También puedo ayudarte con tu diseño ya hecho. Ya sea una página de aterrizaje o un sitio web de tarjeta de presentación, lo haré verse genial y funcionar suavemente en cualquier dispositivo.',
    'services.webDesign.features': ['Diseño Responsivo', 'Optimizado para SEO', 'Enfoque en Rendimiento', 'UI/UX Moderno'],
    'services.mobile.title': 'Desarrollo de Aplicaciones Móviles',
    'services.mobile.description': 'Llega a tus clientes donde sea que estén. Creo aplicaciones iOS y Android atractivas y fáciles de usar que se integran perfectamente con las necesidades de tu negocio. Desde el concepto hasta el despliegue, puedo guiarte a través de todo el proceso, asegurando un lanzamiento de aplicación móvil suave y exitoso.',
    'services.mobile.features': ['Multiplataforma', 'Rendimiento Nativo', 'Listo para App Store', 'Notificaciones Push'],
    'services.api.title': 'Desarrollo de APIs',
    'services.api.description': 'Nos especializamos en diseñar y desarrollar aplicaciones usando una arquitectura de microservicios. Nuestra experiencia radica en crear APIs robustas y eficientes que se integran perfectamente con tus sistemas existentes, permitiendo una pila tecnológica flexible y preparada para el futuro para tu negocio.',
    'services.api.features': ['APIs RESTful', 'GraphQL', 'Microservicios', 'Diseño de Base de Datos'],
    
    // Portfolio
    'portfolio.title': 'Mi Portfolio',
    'portfolio.subtitle': 'Aquí hay algunos de mis proyectos recientes. Cada uno representa un desafío y solución únicos.',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.web': 'Web',
    'portfolio.filter.mobile': 'Móvil',
    'portfolio.filter.api': 'API',
    'portfolio.viewProject': 'Ver Proyecto',
    'portfolio.viewCode': 'Ver Código',
    'portfolio.techUsed': 'Tecnologías Utilizadas:',
    'portfolio.viewLive': 'Ver en Vivo',
    'portfolio.haveProject': '¿Tienes un proyecto en mente?',
    'portfolio.passionate': 'Me apasiona crear soluciones web innovadoras que ofrezcan experiencias de usuario excepcionales.',
    'portfolio.workTogether': '¡Trabajemos juntos para dar vida a tus ideas!',
    'portfolio.letsTalk': 'Hablemos',
    
    // Portfolio Works
    'works.startup.title': 'Empresa de computadoras startup',
    'works.startup.subtitle': 'Diseño y desarrollo de sitio web para startup',
    'works.startup.description': 'Un sitio web moderno de requisitos de computadoras para una startup, construido con una interfaz diseñada en Figma y un robusto framework Next.js/React para un rendimiento y escalabilidad óptimos.',
    
    'works.booking.title': 'Sistema de Reserva de Citas',
    'works.booking.subtitle': 'Administración de citas para clientes y administradores',
    'works.booking.description': 'Diseñé y construí una plataforma eficiente de reserva de citas tanto para clientes como para administradores, aprovechando Next.js para una experiencia de usuario fluida, Redux para una gestión de estado robusta, y una base de datos PostgreSQL segura en AWS RDS accedida a través de una API RESTful.',
    
    'works.natourex.title': 'Natourex',
    'works.natourex.subtitle': 'Sitio web de comercio electrónico de tours',
    'works.natourex.description': 'Sitio web codificado usando SSR e implementando API RESTful propia con NodeJs. Enrutamiento y middlewares con Express. Operaciones CRUD, modelado de datos, población, datos geoespaciales usando mongoose y MongoDB Atlas. Implementación de autenticación JWT y cookies. Integración de pagos con Stripe.',
    
    'works.slack.title': 'Clon de Slack',
    'works.slack.subtitle': 'Aplicación de chat comunitario',
    'works.slack.description': 'Desarrollé una aplicación de chat en tiempo real usando el stack MERN, con autenticación de usuarios, actualizaciones de mensajería directa, canales grupales y persistencia de mensajes.',
    
    // Tech Stack
    'techStack.title': 'Mi Stack Tecnológico',
    'techStack.subtitle': 'Tecnologías y herramientas que uso para dar vida a las ideas',
    'techStack.frontend': 'Frontend',
    'techStack.backend': 'Backend',
    'techStack.tools': 'Herramientas y Otros',
    'techStack.learning': 'Actualmente Aprendiendo',
    'techStack.alwaysLearning.title': 'Siempre Aprendiendo',
    'techStack.alwaysLearning.description': 'Me mantengo constantemente aprendiendo y actualizado con las últimas tecnologías y mejores prácticas.',
    'techStack.alwaysLearning.kubernetes': 'Kubernetes',
    'techStack.alwaysLearning.machineLearning': 'Machine Learning',
    'techStack.alwaysLearning.microservices': 'Microservicios',
    'techStack.alwaysLearning.web3': 'Web3',
    
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
    'footer.emailLabel': 'Email',
    'footer.locationLabel': 'Ubicación',
    'footer.location': 'Argentina',
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