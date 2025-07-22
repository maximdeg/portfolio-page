"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Description = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-5 md:pt-56" id="about-me">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-medium text-violet-600 text-4xl md:text-5xl mb-5 pb-11">
            {t('about.title')}
          </h1>

          <p className="font-normal text-gray-400 text-md md:text-md mb-20">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
