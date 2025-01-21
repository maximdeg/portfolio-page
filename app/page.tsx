import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Description from "@/components/Description";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <AboutMe />
      <Portfolio />
      <TechStack />
      <Footer />
    </>
  );
}
