import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg sticky top-0 ">
        <div className="flex-1 flex justify-between items-center"></div>
        <label className="cursor-pointer md:hidden block"></label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0 pr-24">
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#hero"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#about-me"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#my-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#tech-stack"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-3 px-0 block  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  href="#footer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </header>
  );
};

export default Header;
