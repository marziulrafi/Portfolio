import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="py-16 px-6 bg-[#1E293B] text-white">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#0F172A]  rounded-xl p-4 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                        >

                            <div className="overflow-hidden rounded-md mb-4">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-white text-center">
                                {project.name}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-2 mb-3">
                                {project.tech?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex justify-center gap-4">
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
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;