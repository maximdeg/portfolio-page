"use client";

import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <HiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      )}
    </>
  );
};

export default BackToTop; 