import React from "react";

const PortfolioCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white h-3/3 relative mt-18">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-200 "></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-68 h-68 rounded-full overflow-hidden border-8 border-white ">
          <img
            src="1.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-light mt-6">
          Hello I'm <span className="font-bold text-blue-800">Saara Khalid</span>
        </h1>
        <p className="text-gray-600 text-[14px] mt-3 max-w-lg">
          A front-end web developer with expertise in creating responsive, user-friendly interfaces. I bring designs to life with HTML, CSS, JavaScript, and React, ensuring seamless and engaging user experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          {/* Wrap the button in an anchor tag to handle smooth scrolling */}
          <a href="#contact" className="bg-blue-800 text-white px-6 py-2 text-lg hover:bg-blue-700 transition">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
