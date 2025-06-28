import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-7">
            Hello! I'm <span className="font-semibold text-white">K M Marziul Karim</span>, a passionate web developer currently pursuing my Computer Science degree. My journey into programming began with curiosity and a desire to create meaningful digital experiences — from small websites to complex, user-driven applications.
            <br /><br />
            I love working on both frontend and backend using technologies like React, Node.js, and Firebase. I enjoy building responsive, accessible, and clean interfaces that users love.
            <br /><br />
            Beyond coding, I enjoy photography, watching football, and exploring new tech ideas. I believe in continuous learning, and I'm always looking for opportunities to grow and contribute.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;