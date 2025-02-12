
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skill from "./pages/skills";
import PortfolioCard from "./pages/port";

const Home: React.FC = () => {


  return (
    <div className="container font-poppins mx-auto pt-20 md:pt-0 ">
      {/* Main Section */}
   

      {/* Additional Sections */}
      <PortfolioCard/>
      <Skill />
      {/* <AboutMe /> */}
      <div >
      <Projects />
      </div>
      <div >
        <Contact />
      </div>

      
    </div>
  );
};

export default Home;