import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import { skills } from "../data/skills";
import { SiFirebase, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Icon Map
const iconMap = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  "VS Code": <VscCode />,
  Git: <FaGitAlt />,
  Figma: <FaFigma />,
};

const SkillCard = ({ name }) => (
  <div className="bg-[#1E293B] p-5 rounded-xl flex flex-col items-center shadow hover:shadow-lg transition transform hover:-translate-y-1">
    <div className="text-4xl text-blue-400 mb-2">{iconMap[name]}</div>
    <p className="text-white text-sm">{name}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Frontend</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.frontend.map(name => (
                <SkillCard key={name} name={name} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Backend</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.backend.map(name => (
                <SkillCard key={name} name={name} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Tools</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.tools.map(name => (
                <SkillCard key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
