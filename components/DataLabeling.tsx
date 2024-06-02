import React from 'react';

const DataLabeling: React.FC = () => {
  return (
    <div className="bg-black text-white py-20 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Data Labeling</h2>
          <p className="text-lg mb-6">
            The best quality data to fuel the best performing models
          </p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">3D</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Image</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Mapping</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Text</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-full">Audio</button>
          </div>
          <p className="mb-6">
            Scale has pioneered in the data labeling industry by combining AI-based techniques with human-in-the-loop, delivering labeled data at unprecedented quality, scalability, and efficiency.
          </p>
          <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-200">
            Label My Data →
          </a>
        </div>
        <div className="flex-1">
          <img src="/path/to/your/image.png" alt="Data Labeling Visualization" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default DataLabeling;
