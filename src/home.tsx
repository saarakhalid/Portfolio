import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import AboutMe from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skill from "./pages/skills";

const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleHireMeClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCvFile(event.target.files[0]);
    }
  };

  return (
    <div className="container font-poppins mx-auto pt-20 md:pt-0 ">
      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between h-auto md:py-32 p-6 md:p-16 max-w-full mx-auto gap-12 md:gap-20 ">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-600">Hello I'm</h1>
          <p className="text-xl md:text-2xl text-gray-800">
            <span className="text-blue-800 font-semibold">Saara Khalid</span>
            <br /> A front-end web developer
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={handleHireMeClick}
              className="bg-blue-800 text-white px-6 py-2 text-lg hover:bg-blue-700 transition "
            >
              Hire Me
            </button>
            <label
              htmlFor="cv-upload"
              className="bg-blue-800 text-white px-5 py-2 text-lg flex items-center gap-2 hover:bg-blue-700 transition cursor-pointer "
            >
              Download CV <Icon icon="uil:file" className="text-xl" />
            </label>
            <input
              type="file"
              id="cv-upload"
              className="hidden"
              onChange={handleCvUpload}
            />
          </div>
          {cvFile && <p className="mt-2 text-gray-600">Uploaded: {cvFile.name}</p>}

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://www.linkedin.com/in/saara-khalid-5aba98316/" className="icon-animate">
              <Icon icon="uil:linkedin" />
            </a>
            <a href="https://github.com/saarakhalid" className="icon-animate">
              <Icon icon="uil:github" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src="mec.png" // Replace with actual image source
            alt="Profile"
            className="floating-image max-w-full w-[320px] md:w-[450px] lg:w-[500px] lg:h-[320px] rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Additional Sections */}
      <Skill />
      <AboutMe />
      <div >
      <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Styles */}
      <style>{`
        .floating-image {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

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
            left: 0;
          }
          25% {
            left: 15px;
          }
          50% {
            left: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;