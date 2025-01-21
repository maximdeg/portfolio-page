import React from "react";

const TechStack = () => {
  return (
    <section className="py-10 md:py-16" id="tech-stack">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-violet-600 text-3xl md:text-5xl mb-5">
          Tech Stack
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the technologies I have worked with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default TechStack;
