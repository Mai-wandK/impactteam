import React from 'react';

const AISection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glassy-background">
          <h3 className="text-sm font-semibold mb-2">SCALE DONOVAN</h3>
          <h2 className="text-3xl font-bold mb-4">AI-Powered Decision-Making for Defense</h2>
          <p className="text-lg mb-6">
            AI-powered decision-making support: plan, analyze, and act in minutes.
          </p>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <img src="/path/to/your/first-image.png" alt="Decision Making" className="rounded-lg" />
            </div>
          </div>
          <p className="mb-6">
            Donovan, put any known foreign ship movements over the past 48 hours on the map, and flag any out-of-pattern activity.
          </p>
        </div>
        <div className="glassy-background">
          <h3 className="text-sm font-semibold mb-2">SCALE ENTERPRISE GENAI PLATFORM</h3>
          <h2 className="text-3xl font-bold mb-4">AI for the Enterprise</h2>
          <p className="text-lg mb-6">
            Transform your data into customized enterprise-ready Generative AI applications.
          </p>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <img src="/path/to/your/second-image.png" alt="Enterprise AI" className="rounded-lg" />
            </div>
          </div>
          <p className="mb-6">
            A list of all models that are available to use in active deployments. This includes models delivered by Scale as well as base models.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISection;
