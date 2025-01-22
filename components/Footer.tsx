import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52" id="footer">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-medium text-violet-600 text-4xl md:text-5xl mb-5">
            Contact
          </h1>

          <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
            Feel free to reach out to me for any inquiries or collaboration
          </p>

          <div className="flex items-center justify-center space-x-8">
            <Link
              href="https://www.linkedin.com/in/maxim-degtiarev"
              className="w-20 h-20 flex items-center justify-center rounded-full bg-white overflow-hidden hover:bg-violet-800 transition ease-in-out duration-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/djdnlogf1/image/upload/v1734111395/image-10_hvmuhb.png"
                alt="Linked In Logo"
                className="object-scale-down"
                width={50}
                height={50}
              />
            </Link>

            <Link
              href="https://github.com/maximdeg"
              className="w-20 h-20 flex items-center justify-center rounded-full bg-white overflow-hidden hover:bg-violet-800 transition ease-in-out duration-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/djdnlogf1/image/upload/v1734111845/github-logo_cy33sg.png"
                alt="Github Logo"
                className="object-scale-down "
                width={60}
                height={60}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
