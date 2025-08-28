import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About
        </h1>
      </div>

      {/* Student Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Student ID</h3>
            <p className="text-gray-900 dark:text-white font-mono text-xl">21887929</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</h3>
            <p className="text-gray-900 dark:text-white text-xl">Stacey Jepkemoi</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">University</h3>
            <p className="text-gray-900 dark:text-white text-xl">La Trobe University</p>
          </div>
        </div>
      </div>

      {/* How to Use This Website Link */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">
          How to Use This Website
        </h2>
        <p className="text-blue-700 dark:text-blue-300 mb-4">
          Learn how to navigate and use the LTU LMS HTML5 Code Generator
        </p>
        <a 
          href="/demo.mp4" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Watch Demo Video
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
