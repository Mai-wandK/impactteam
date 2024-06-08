import React from 'react';
import Logo from "@/public/ImpactTeamLogo.png"
import Image from 'next/image'
const MockupWithText: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-neutral-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <Image
            src={Logo}
            className="dark:hidden w-[272px] h-[572px]"
            alt="Light mockup"
          />
          <Image
            src={Logo}
            className="hidden dark:block w-[272px] h-[572px]"
            alt="Dark mockup"
          />
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-10 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          Experience the Future
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Our innovative technology brings you the best experience. Sign up to stay updated and explore the endless possibilities. No credit card required.
        </p>
        <a
          href="#"
          className="mt-6 inline-block py-2 px-4 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MockupWithText;
