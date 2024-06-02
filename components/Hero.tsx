import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white py-20 px-5 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Power <span className="text-gradient">Government AI</span> With Your Data
        </h1>
        <p className="text-lg mb-8">
          Make the best models with the best data. Scale Data Engine leverages your enterprise data, and with Scale GenAI Platform, safely unlocks the value of AI.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="btn btn-primary">
            Book a Demo →
          </a>
          <a href="#" className="btn btn-secondary">
            Build AI →
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full opacity-75 blur-xl filter"></div>
        <div className="w-72 h-72 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full opacity-75 blur-xl filter"></div>
      </div>
    </div>
  );
};

export default Hero;
