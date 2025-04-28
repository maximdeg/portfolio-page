import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col justify-center mx-auto px-10 sm:py-12 lg:py-15 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-lg mb-3 sm:mb-4">
            Hi👋! My name is Maxim Degtiarev
          </p>
          <h1 className="text-4xl font-bold leading-none sm:text-8xl">
            Full Stack <span className="dark:text-violet-600">Developer</span>
          </h1>
          <p className="mt-2 mb-2 text-lg sm:mb-12">
            Experienced full-stack developer with 3+ years of expertise in
            Next.js, MERN Stack, and some React Native experience.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="#portfolio"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              See my work!
            </Link>
            <Link
              href="#footer"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 lg:mt-0 ">
          <div className=" w-full mt-11 pt-8">
            <Image
              className=" z-10 rounded-full sm:max-w-[75%] md:max-w-[70%] lg:max-w-[75%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-violet-600"
              src="https://res.cloudinary.com/djdnlogf1/image/upload/v1745878815/DSC_9974-12_zqvpfd.jpg"
              alt="Maxim Degtiarev"
              width={1300}
              height={1300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
