import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [project.screenshots]);

  return (
    <div className="group [perspective:1000px]">
      <div className="relative w-full h-[360px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front */}
        <div className="absolute w-full h-full bg-[#33415c] rounded-xl p-4 shadow-md [backface-visibility:hidden]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">{project.name}</h3>
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
          <p className="text-gray-300 text-center">{project.description}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-[#0F172A] rounded-xl p-4 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
          <h4 className="text-md text-blue-400 font-bold mb-2">Preview</h4>
          <div className="h-32 overflow-hidden rounded relative">
            {project.screenshots.map((ss, i) => (
              <img
                key={i}
                src={ss}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                alt={`screenshot ${i}`}
              />
            ))}
          </div>

          <h4 className="text-sm text-blue-400 font-semibold mt-4">Challenges</h4>
          <p className="text-xs text-gray-300 mb-2">{project.challenges}</p>

          <h4 className="text-sm text-blue-400 font-semibold">Future Improvements</h4>
          <p className="text-xs text-gray-300">{project.improvements}</p>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition duration-300 text-sm"
            >
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-300 text-sm"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
