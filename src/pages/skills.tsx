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
    <div className="bg-gray text-black font-poppins py-12 px-6 md:px-20 mt-12">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        <div>
          <h2 className="font-poppins text-5xl font-bold mb-2">
            About <span className="text-blue-800">Me</span>
          </h2>
          <p className="text-gray-600 mb-22">Web developer with 2+ years of experience.</p>
        </div>

        <div className="font-poppins text-gray-600 max-w-lg text-1xl">
          <p>
            I’ve always been fascinated by technology and how it shapes the way we interact with the world.
            My journey into web development started with a curiosity about how websites are built and a desire
            to create something interactive and meaningful, and it has evolved into a full-fledged passion for front-end technologies like React, JavaScript, and Tailwind CSS.
          </p>

          
          <div className="mt-10">
            <h3 className="text-2xl font-medium text-gray-800 mb-4 text-center">Tech Stack</h3>
            <div className="flex justify-center gap-8 text-4xl text-blue-800">
              <div className="p-3 border border-gray-400 rounded-full">
                <Icon icon="akar-icons:html-fill" />
              </div>
              <div className="p-3 border border-gray-400 rounded-full">
                <Icon icon="cib:css3" />
              </div>
              <div className="p-3 border border-gray-400 rounded-full">
                <Icon icon="akar-icons:javascript-fill" />
              </div>
              <div className="p-3 border border-gray-400 rounded-full">
                <Icon icon="logos:react" />
              </div>
              <div className="p-3 border border-gray-400 rounded-full">
                <Icon icon="simple-icons:tailwindcss" />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Button and Social Icons Section - Below Tech Stack */}
      <div className="flex justify-start gap-4 mt-0 ">
  <button className="bg-blue-800 text-white px-6 py-2 flex items-center gap-2 font-bold">
    <Icon icon="fa-solid:download" /> Download CV
  </button>

  <div className="flex gap-4">
    <a href="https://www.linkedin.com/in/saara-khalid-5aba98316/" className="icon-animate">
      <Icon icon="uil:linkedin" />
    </a>
    <a href="https://github.com/saarakhalid" className="icon-animate">
      <Icon icon="uil:github" />
    </a>
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
    position: relative;
    transition: background 0.3s;
    border: 2px solid #d1d5db; /* gray-400 */
    animation: iconSlide 4s infinite alternate;
  }

  .icon-animate svg {
    color: #1e3a8a; /* blue-800 */
  }

  @keyframes iconSlide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(15px);
    }
    100% {
      transform: translateX(30px);
    }
  }
`}</style>


      {/* About Me Content */}
      <div className="mt-10 grid md:grid-cols-2 gap-16 ">
        {/* Personal Info */}
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

        {/* Skills Section with Circular Progress */}
        <div className="mt-6">
          <h2 className="text-black text-xl font-semibold mb-10 text-center">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center border-2 border-blue-800 p-4 rounded-lg">
                <div className="w-20 h-20 mx-auto">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={{
                      path: { stroke: "#1E40AF" }, // blue-800
                      text: { fill: "#1E40AF", fontSize: "22px" }, // blue-800
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
