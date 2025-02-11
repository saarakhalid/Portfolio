import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white flex flex-col md:flex-row items-center md:justify-around sm:justify-between  px-4 md:px-10 py-10 md:py-16 mt-18 md:mb-18">
      {/* Content Section */}
      <div className="max-w-md space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-black">Me</span>
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-black">
          Web Developer with 2+ years of experience!
        </h3>

        <p className="text-gray-300 max-w-[800px] text-justify">
          A passionate and detail-oriented front-end web developer with hands-on experience in building visually appealing and responsive websites. Proficient in HTML, CSS, JavaScript, and React, with a solid understanding of UI/UX principles to create seamless user experiences. Skilled in transforming design concepts into interactive, mobile-first applications. Continuously exploring new technologies and trends to enhance coding practices and design skills, with a strong commitment to clean, maintainable code. Enthusiastic about collaborating in teams to deliver innovative solutions while staying updated with industry advancements.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-2 md:mt-0 md:ml-8"> {/* Added margin-left for tablets */}
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-[250px] md:h-[250px]"> {/* Adjusted image size for tablet */}
          <img
            src="mec.png"
            alt="About Me"
            className="rounded-full border-4 border-black shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
