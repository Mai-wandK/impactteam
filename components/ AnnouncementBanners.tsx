import React from 'react';

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-white/80 uppercase tracking-wide">
              Preview of Preline
            </p>
            <p className="mt-1 text-sm sm:text-base font-medium text-white">
              Sign up to get unlimited updates. No credit card required.
            </p>
          </div>

          <div className="mt-3 md:mt-0">
            <a
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-50 transition duration-200"
              href="#"
            >
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
