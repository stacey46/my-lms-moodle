import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-gray-700 p-4 mt-4 text-center">
      <p>© {year} Stacey Jepkemoi | Student ID: 21887929</p>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
    </footer>
  );
};

export default Footer;
