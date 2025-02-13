import React from "react";
import { Icon } from '@iconify/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PersonalInfo {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  level: number;
}

const personalInfo: PersonalInfo[] = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "React", level: 70 },
  { name: "JavaScript", level: 40 },
  { name: "Typescript", level: 50 },
  { name: "HeroUI", level: 50 },
];

const skills: Skill[] = [
  { name: "Creativity", level: 70 },
  { name: "Communication", level: 65 },
  { name: "Problem Solving", level: 45 },
  { name: "Teamwork", level: 85 },
];

const AboutMe: React.FC = () => {
  return (
    <div className="container bg-gray text-black font-poppins py-12 px-2 md:px- mt-12 overflow-x-hidden">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-poppins text-5xl font-bold mb-2">
            About <span className="text-blue-800">Me</span>
          </h2>
          <p className="text-gray-600">Web developer with 2+ years of experience.</p>
          
          {/* Button and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            {/* Button */}
            <button className="bg-blue-800 text-white px-6 py-2 flex items-center gap-2 font-bold">
              <a href="https://flowcv.com/resume/rt7j8wdbtu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Icon icon="fa-solid:download" /> Download CV
              </a>
            </button>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="https://www.linkedin.com/in/saara-khalid-5aba98316/" className="icon-animate">
                <Icon icon="uil:linkedin" />
              </a>
              <a href="https://github.com/saarakhalid" className="icon-animate">
                <Icon icon="uil:github" />
              </a>
            </div>
          </div>
        </div>

        <div className="font-poppins text-gray-600 max-w-lg text-1xl">
          <p>
            I’ve always been fascinated by technology and how it shapes the way we interact with the world.
            My journey into web development started with a curiosity about how websites are built and a desire
            to create something interactive and meaningful.
          </p>
          
          {/* Tech Stack Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-medium text-gray-800 mb-4 text-center">Tech Stack</h3>
            <div className="flex justify-center gap-4 md:gap-8 text-4xl text-blue-800 flex-wrap">
              {["akar-icons:html-fill", "cib:css3", "akar-icons:javascript-fill", "logos:react", "simple-icons:tailwindcss"].map((icon, index) => (
                <div key={index} className="p-3 border border-gray-400 rounded-full">
                  <Icon icon={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .icon-animate {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 24px;
          transition: transform 0.3s ease-in-out, background 0.3s;
          border: 2px solid #d1d5db;
        }

        .icon-animate:hover {
          transform: scale(1.2);
          background: #1e3a8a;
        }

        .icon-animate svg {
          color: #1e3a8a;
          transition: color 0.3s;
        }

        .icon-animate:hover svg {
          color: #ffffff;
        }
      `}</style>

      {/* About Me Content */}
      <div className="mt-10 grid md:grid-cols-2 gap-16">
        {/* Technical Skills */}
        <div className="mt-8">
          <h2 className="text-black text-xl font-semibold mb-6 text-center">
            Technical Skills
          </h2>
          {personalInfo.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <p className="text-black text-sm mb-1">{skill.name}</p>
                <p className="text-black text-sm mb-1">{skill.level}%</p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-800 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="mt-6">
          <h2 className="text-black text-xl font-semibold mb-10 text-center">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="text-center border-2 border-blue-800 p-4 rounded-lg w-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={{
                      path: { stroke: "#1E40AF" },
                      text: { fill: "#1E40AF", fontSize: "18px" },
                      trail: { stroke: "#e2e8f0" },
                    }}
                  />
                </div>
                <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
