"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Description from "@/components/Description";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <Description />
      <AboutMe />
      <Portfolio />
      <TechStack />
      <Footer />
      <BackToTop />
    </>
  );
}
