import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="font-poppins bg-white py-6">
      <div className="container mx-auto flex flex-col items-center text-gray-700 overflow-x-hidden sm:overflow-x-visible">
        {/* Navigation Links */}
        <nav className="flex space-x-6 mb-4">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-3xl mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="text-blue-800 hover:text-indigo-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="text-blue-800 hover:text-indigo-600" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          copyright © <span className="text-indigo-600">Saara Khalid</span> All rights reserved 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
