import Contact from "./pages/contact";
import Projects from "./pages/projects";

import PortfolioCard from "./pages/port";
import AboutMe from "./pages/AboutMe";

const Home: React.FC = () => {
  return (
    <div className="container font-poppins mx-auto pt-20 md:pt-0 ">
      <div id="home">
      <PortfolioCard />
      </div>
     
      <div id="about">
        < AboutMe/>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
