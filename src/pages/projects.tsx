

// Project Data
const projects = [
  {
    image: "mec.png",
    name: "Mosahl Engineering Consultants",
    description: "MEC delivers innovative planning, engineering, and construction management solutions to meet the infrastructure needs of today and tomorrow.",
    demoLink: "https://mosahlengineering.com/",
  },
  {
    image: "just.png",
    name: "More Than Justice",
    description: "Creating a fair and just society by advocating for systemic change, supporting affected communities, and providing resources to promote justice and equality.",
    demoLink: "https://morethanjustice.org/",
  },
  {
    image: "cw.png",
    name: "Citadel Women Initiatives",
    description: "Empowering women through education, skill development, and community support. The organization provides resources and opportunities to help women become self-reliant and contribute meaningfully to society.",
    demoLink: "https://citadelwomeninitiatives.co.ke/",
  },
  {
    image: "piv.png",
    name: "Pivot Home Care",
    description: "Helping individuals live their best lives at home by providing compassionate, person-centered care through licensed and certified caregivers you can trust.",
    demoLink: "https://www.pivothomecareagency.com/",
  },
];

// Project Card Component
const ProjectCard = ({
  image,
  name,
  description,
  demoLink,
}: {
  image: string;
  name: string;
  description: string;
  demoLink: string;
}) => {
  return (
    <div className="bg-white  shadow-lg p-4 font-poppins">
      <img src={image} alt={name} className="w-full h-56 object-contain " />
      <div className="flex flex-col justify-between items-center mt-4">
        <div>
          <h3 className="font-bold text-lg mb-3">{name}</h3>
          <p className="text-gray-600 text-justify">{description}</p>
        </div>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-lg font-semibold text-white bg-blue-800 py-2 px-6 hover:bg-blue-700 transition "
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

// Project Grid Component
const ProjectGrid = () => {
  return (
    <div className="text-center py-8 px-4">
      <h2 className="text-3xl font-bold mb-12">SELECT YOUR PROJECT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 justify-center">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
