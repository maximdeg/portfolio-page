import React from "react";
import { PiDevicesBold } from "react-icons/pi";
import { FiCodesandbox } from "react-icons/fi";
import { TbApi } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section className="my-10 sm:my-60" id="my-services">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-violet-600 text-3xl md:text-5xl mb-5">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mx-auto flex  items-center justify-center ">
            <div className="w-full rounded-md bg-gradient-to-r from-violet-600 via-blue-500 to-blue-300 p-1">
              <div className="flex h-full w-full flex-col items-center justify-center px-8 py-10 bg-gray-800 back">
                <div className="py-6 px-6 flex justify-center rounded-md mb-4 border-2 border-gray-900">
                  <PiDevicesBold className="w-12 h-12" />
                </div>
                <h4 className="font-medium text-blue-500 text-lg mb-4">
                  Website Design and Development
                </h4>{" "}
                <p className="font-normal text-gray-500 text-md">
                  I can design your website from scratch. I create modern,
                  simple, and user- friendly designs that match your brand and
                  goals. I can also help you with your ready-made design.
                  Whether it's a landing page or a business card website, I will
                  make it look great and work smoothly on any device.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex  items-center justify-center ">
            <div className="w-full rounded-md bg-gradient-to-r from-violet-600 via-blue-500 to-blue-300 p-1">
              <div className="flex h-full w-full flex-col items-center justify-center px-8 py-10 bg-gray-800 back">
                <div className="py-6 px-6 flex justify-center rounded-md mb-4 border-2 border-gray-900">
                  <FiCodesandbox className="w-12 h-12 hover:text-black hover:bg-white" />
                </div>
                <h4 className="font-medium text-blue-500 text-lg mb-4">
                  Mobile App Development
                </h4>{" "}
                <p className="font-normal text-gray-500 text-md">
                  Reach your customers wherever they are. I craft engaging and
                  user-friendly iOS and Android apps that seamlessly integrate
                  with your business needs. From concept to deployment, I can
                  guide you through the entire process, ensuring a smooth and
                  successful mobile app launch.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex  items-center justify-center ">
            <div className="w-full rounded-md bg-gradient-to-r from-violet-600 via-blue-500 to-blue-300 p-1">
              <div className="flex h-full w-full flex-col items-center justify-center px-8 py-10 bg-gray-800 back">
                <div className="py-6 px-6 flex justify-center rounded-md mb-4 border-2 border-gray-900">
                  <TbApi className="w-12 h-12" />
                </div>
                <h4 className="font-medium text-blue-500 text-lg mb-4">
                  API Development
                </h4>{" "}
                <p className="font-normal text-gray-500 text-md">
                  We specialize in designing and developing applications using a
                  microservices architecture. Our expertise lies in crafting
                  robust and efficient APIs that seamlessly integrate with your
                  existing systems, enabling a flexible and future-proof
                  technology stack for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
