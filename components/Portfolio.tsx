import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const works = [
    {
      title: "Start-up computer conmpany",
      subtitle: "Start-up website design and development",
      description: `A modern computer requirements website for a startup, built 
      with a Figma-designed interface and a robust Next.js/React framework 
      for optimal performance and scalability.`,
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1745942260/Screenshot_2025-04-29_125508_mljyks.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Computer conmpany website hero",
      link: "https://jm99-website.vercel.app/",
      tech: `Next.js, React, TypeScript, Lucide, Shadcn, Vercel,
                  React Dom, Tailwind CSS, Figma, VS Code, Git,
                  Github`,
    },
    {
      title: "Appointment Booking System",
      subtitle: "Client and Admin appointment administration",
      description: `Designed and built an efficient appointment booking platform 
      for both clients and administrators, leveraging Next.js for a smooth user 
      experience, Redux for robust state management, and a secure PostgreSQL 
      database on AWS RDS accessed via a RESTful API.`,
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1745942475/Screenshot_2025-04-29_130055_shybj5.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Booking form",
      link: "https://maraxo-app.vercel.app/",
      tech: `Next.js, React, TypeScript, AWS RDS, Shadcn, Vercel, Redux,
            PostrgeSQL, React Query, Tailwind CSS, Figma, VS Code, Git,
            Github, Zod, Jest`,
    },
    {
      title: "Natourex",
      subtitle: "Tours e-commerce website",
      description: `Website coded using SSR and implementing self-made RESTful API
                  with NodeJs. Routing and middlewares with Express. CRUD
                  operations, data modeling, population, geospatial data using
                  mongoose and MongoDB Atlas. JWT authentication and cookies
                  implementation. Stripe payment integration.`,
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1737561821/natourex_cjd61s.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Natourex by Maxim Degtiarev",
      link: "https://slack-clone-macks-v2.vercel.app/",
      tech: `PUG, HTML5, CSS3, JavaScript ES6, Node, Express, Axios,
                  Bcrypt, Helmet, PUG, Nodemailer, Slugify, Leaflet, MondoDB,
                  Mongoose, JWT, Netlify, Stripe, Babel, Cypress, RESTFull API,
                  Postman, VS Code, Github`,
    },
    // {
    //   title: "Bancax",
    //   subtitle: "StartUp&apos;s Directory",
    //   description: `A web application built on a RESTful API architecture to
    //               provide users with complete control over their personal
    //               finances. Includes: Automated generation of expense summaries,
    //               secure user authentication and email verification for enhanced
    //               data protection.`,
    //   image:
    //     "https://res.cloudinary.com/djdnlogf1/image/upload/v1737475215/bancax_ybo6xo.png",
    //   image_width: 600,
    //   image_height: 400,
    //   image_alt: "Bancax website By Maxim Degtiarev",
    //   link: "https://bancax.vercel.app",
    //   tech: `React, Node, Express, MongoDB, JWT, Mongoose, BCrypt,
    //               Nodemailer, Cloudinary, RESTfull API, Figma, Vite, Vercel,
    //               Jest, VS Code, Github`,
    // },
    {
      title: "Slack Clone",
      subtitle: "Community chat app",
      description: `Developed a real-time chat application using the MERN stack,
                  featuring user authentication, direct messaging updates, group
                  channels, and message persistence.`,
      image:
        "https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/slack_y5oila.png",
      image_width: 600,
      image_height: 400,
      image_alt: "Slack Clone By Macks",
      link: "https://slack-clone-macks-v2.vercel.app/",
      tech: `React, Node, Express, MongoDB, JWT, Mongoose, BCrypt, RESTfull
                  API, Figma, Vite, Vercel, VS Code, Jest, Firebase, Github`,
    },
  ];

  return (
    <section className="py-10 md:py-16" id="portfolio">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between animation">
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
            {works.map(work => (
              <div
                key={work.title}
                className="flex md:space-x-6 flex-col md:flex-row object"
              >
                <div className="md:w-1/2 h-auto md:h-[55%] outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden hover:scale-125 ease-in-out duration-300">
                  <Link
                    href={work.link}
                    className="cursor-pointer"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="w-full object-cover"
                      src={work.image}
                      alt={work.image_alt}
                      width={work.image_width}
                      height={work.image_height}
                    />
                  </Link>
                </div>

                <span className="w-1/12 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

                <div className="md:w-5/12">
                  <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5 mt-5 md:mt-0">
                    {work.title}
                  </h1>
                  <h6>{work.subtitle}</h6>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    {work.description}
                  </p>
                  <span className="font-normal text-violet-500 text-md md:text-base">
                    Technologies:{" "}
                  </span>
                  <span>{work.tech}</span>
                </div>
              </div>
            ))}
            {/* <div className="flex md:space-x-6 flex-col md:flex-row">
              <div className="md:w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden hover:scale-125 ease-in-out duration-300">
                <Image
                  className="w-full object-cover"
                  src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/ycdirectory_lwzasu.png"
                  alt="YCDirectory Next.js Course"
                  width={600}
                  height={400}
                />
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

              <div className="md:w-5/12">
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

            <div className="flex md:space-x-6 flex-col md:flex-row">
              <div className="md:w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden  hover:scale-125 ease-in-out duration-300">
                <Link
                  href="https://bancax.vercel.app"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-full object-cover h-full"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475215/bancax_ybo6xo.png"
                    alt="Bancax website By Maxim Degtiarev"
                    width={600}
                    height={400}
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

              <div className="md:w-5/12">
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

            <div className="flex md:space-x-6 flex-col md:flex-row">
              <div className="md:w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden  hover:scale-125 ease-in-out duration-300">
                <Link
                  href="https://slack-clone-macks-v2.vercel.app/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-full object-contain"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737475216/slack_y5oila.png"
                    alt="Slack Clone By Macks"
                    width={600}
                    height={400}
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

              <div className="md:w-5/12">
                <h1 className="font-normal text-blue-500 text-3xl md:text-4xl mb-5">
                  Slack Clone
                </h1>
                <h6>Community chat app</h6>

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

            <div className="flex md:space-x-6 flex-col md:flex-row">
              <div className="md:w-1/2 h-52 outline rounded-sm outline-[.2rem] outline-offset-[.1rem] outline-blue-500 overflow-hidden hover:scale-125 ease-in-out duration-300">
                <Link
                  href="https://notourex.onrender.com/"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-full object-contain"
                    src="https://res.cloudinary.com/djdnlogf1/image/upload/v1737561821/natourex_cjd61s.png"
                    alt="Natourex by Maxim Degtiarev"
                    width={600}
                    height={400}
                  />
                </Link>
              </div>

              <span className="w-1/12 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

              <div className="md:w-5/12">
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
                  Mongoose, JWT, Netlify, Stripe, Babel, Cypress, RESTFull API,
                  Postman, VS Code, Github
                </span>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
