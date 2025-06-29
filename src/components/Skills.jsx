import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { skills } from "../data/skills";

const iconMap = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  "Express.js": <SiExpress />,
  Firebase: <SiFirebase />,
  Git: <FaGitAlt />,
  Figma: <FaFigma />,
  Vercel: <IoLogoVercel />,
  "VS Code": <VscCode />,
};

const SkillItem = ({ name }) => (
  <div className="flex flex-col items-center justify-center mx-4 min-w-[120px] hover:scale-110 transition duration-300">
    <div className="text-4xl text-blue-400 mb-2">{iconMap[name]}</div>
    <p className="text-sm text-white">{name}</p>
  </div>
);

const Skills = () => {
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];

  return (
    <section id="skills" className="py-16 px-6 bg-[#0F172A] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">Skills</h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
            {allSkills.map((name, index) => (
              <SkillItem key={index} name={name} />
            ))}
           
            {allSkills.map((name, index) => (
              <SkillItem key={`copy-${index}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
