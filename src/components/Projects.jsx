import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, onDetailsClick }) => {
  return (
    <div className="bg-[#33415c] rounded-xl p-4 shadow-md">
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
      <p className="text-gray-300 text-center text-sm mb-3">{project.description}</p>
      <div className="flex justify-center">
        <button
          onClick={() => onDetailsClick(project)}
          className="px-4 py-2 rounded bg-[#006daa] hover:bg-[#004e89] text-white text-sm cursor-pointer transition"
        >
          Details
        </button>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 2000);

    const show = setTimeout(() => setVisible(true), 10);
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(show);
    };
  }, [project]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div
        className={`bg-[#0F172A] max-w-md w-full rounded-lg p-6 relative text-white shadow-lg overflow-y-auto max-h-[90vh] transform transition-all duration-500 ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
      >
        <button
          className="absolute cursor-pointer top-3 right-4 text-xl text-gray-300 hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">{project.name}</h3>

        <div className="h-48 rounded relative mb-4 overflow-hidden">
          {project.screenshots.map((ss, i) => (
            <img
              key={i}
              src={ss}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 rounded ${i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              alt={`screenshot ${i}`}
            />
          ))}
        </div>

        <h4 className="text-md font-bold text-blue-400 mb-1">Challenges</h4>
        <p className="text-sm text-gray-300 mb-3">{project.challenges}</p>

        <h4 className="text-md font-bold text-blue-400 mb-1">Future Improvements</h4>
        <p className="text-sm text-gray-300">{project.improvements}</p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition text-sm"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition text-sm"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) return;

    const anim = gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-[#1E293B] text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onDetailsClick={setSelectedProject} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects;
