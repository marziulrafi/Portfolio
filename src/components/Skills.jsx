import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
import { skills } from "../data/skills";
import { IoLogoVercel } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

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
  Vercel: <IoLogoVercel />,
};

const SkillCard = ({ name }) => {
  const iconRef = useRef(null);
  let animation = null;

  const handleMouseEnter = () => {
    // If already animating, do nothing
    if (animation) return;

    animation = gsap.to(iconRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 1.2,
      ease: "linear",
    });
  };

  const handleMouseLeave = () => {
    if (animation) {
      animation.kill();
      gsap.set(iconRef.current, { rotation: 0 }); // reset rotation
      animation = null;
    }
  };

  return (
    <div
      className="bg-[#1E293B] p-5 rounded-xl flex flex-col items-center shadow hover:shadow-lg transition transform hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={iconRef} className="text-4xl text-blue-400 mb-2">
        {iconMap[name]}
      </div>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
};


const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const skillElements = sectionRef.current.querySelectorAll("[data-skill]");
    gsap.from(skillElements, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="skills" className="py-16 px-6 bg-[#0F172A] text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Frontend</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.frontend.map((name, i) => (
                <SkillCard key={name} name={name} index={i} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Backend</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.backend.map((name, i) => (
                <SkillCard key={name} name={name} index={i} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Tools</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.tools.map((name, i) => (
                <SkillCard key={name} name={name} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
