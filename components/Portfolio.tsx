import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-10 md:py-16" id="portfolio">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 pr-16">
            <h1 className="font-medium text-violet-600 text-3xl md:text-5xl mb-5">
              Portfolio
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              I have brought here my biggest and favorite works as a
              professional.
            </p>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6">
              <div className="w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden">
                <img
                  className="w-full object-cover"
                  src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/ycdirectory_lwzasu.png"
                  alt="My Image"
                />
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-5/12">
                <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5">
                  StartMaxUp
                </h1>
                <h6>StartUp&apos;s Directory</h6>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  A web application built on a RESTful API architecture to
                  provide users with complete control over their personal
                  finances. Includes: Automated generation of expense summaries,
                  secure user authentication and email verification for enhanced
                  data protection.
                </p>
                <span className="font-normal text-violet-500 text-sm md:text-base">
                  Technologies:{" "}
                </span>
                <span>
                  Next.js, React, TypeScript, Lucide, Sanity, Next-Auth, Vercel,
                  React Dom, Tailwind CSS, Figma, Jest, VS Code, Markdown, Git,
                  Github
                </span>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden">
                <Link
                  href="https://bancax.vercel.app"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-full object-cover h-full"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475215/bancax_ybo6xo.png"
                    alt="My Image"
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-5/12">
                <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5">
                  Bancax
                </h1>
                <h6>Accounting app</h6>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  A web application built on a RESTful API architecture to
                  provide users with complete control over their personal
                  finances. Includes: Automated generation of expense summaries,
                  secure user authentication and email verification for enhanced
                  data protection.
                </p>
                <span className="font-normal text-violet-500 text-sm md:text-base">
                  Technologies:{" "}
                </span>
                <span>
                  React, Node, Express, MongoDB, JWT, Mongoose, BCrypt,
                  Nodemailer, Cloudinary, RESTfull API, Figma, Vite, Vercel,
                  Jest, VS Code, Github
                </span>
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden">
                <Link
                  href="https://slack-clone-macks-v2.vercel.app/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-full object-contain"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/slack_y5oila.png"
                    alt="My Image"
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-5/12">
                <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5">
                  Slack Clone
                </h1>
                <h6>Accounting App</h6>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  Developed a real-time chat application using the MERN stack,
                  featuring user authentication, direct messaging updates, group
                  channels, and message persistence.
                </p>
                <span className="font-normal text-violet-500 text-sm md:text-base">
                  Technologies:{" "}
                </span>
                <span>
                  React, Node, Express, MongoDB, JWT, Mongoose, BCrypt, RESTfull
                  API, Figma, Vite, Vercel, VS Code, Jest, Firebase, Github
                </span>
              </div>
            </div>

            <div className="flex space-x-6">
              <div className="w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden">
                <Link
                  href="https://notourex.onrender.com/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-full object-cover"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475215/natourex_qeaqao.png"
                    alt="My Image"
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-5/12">
                <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5">
                  Natourex
                </h1>
                <h6>Tours e-commerce website</h6>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  Website coded using SSR and implementing self-made RESTful API
                  with NodeJs. Routing and middlewares with Express. CRUD
                  operations, data modeling, population, geospatial data using
                  mongoose and MongoDB Atlas. JWT authentication and cookies
                  implementation
                </p>
                <span className="font-normal text-violet-500 text-sm md:text-base">
                  Technologies:{" "}
                </span>
                <span>
                  PUG, HTML5, CSS3, JavaScript ES6, Node, Express, Axios,
                  Bcrypt, Helmet, PUG, Nodemailer, Slugify, Leaflet, MondoDB,
                  Mongoose, JWT, Netlify, Sprint, Babel, Cypress, RESTFull API,
                  Postman, VS Code, Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
