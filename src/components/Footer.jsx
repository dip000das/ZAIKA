import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center w-full h-20 gap-1 font-semibold text-center bg-gray-300 shadow-md">
      <span> © {currentYear} All Rights Reserved </span>
      <a
        href="https://github.com/dip000das"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dip Kumar Das
      </a>
    </div>
  );
};

export default Footer;
