import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 mt-8 border-t border-gray-300 dark:border-gray-600">
      <div className="container mx-auto text-center">
        <div className="space-y-2">
          <p className="font-semibold">© {year} Stacey Jepkemoi</p>
          <p className="text-sm">Student ID: 21887929</p>
          <p className="text-sm">La Trobe University</p>
          <p className="text-sm">{currentDate}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
