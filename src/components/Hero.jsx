import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 pt-24 md:pt-32 bg-[#0F172A]  text-white"
    >
      <motion.div
        className="md:w-1/2 space-y-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">K M Marziul Karim</span>
        </h2>
        <p className="text-xl text-gray-300">Full Stack Web Developer</p>
        <p className="text-gray-400">
          I build responsive and dynamic web apps using React, Node, and more.
          <br />
          Let's build something amazing together!
        </p>

        <div className="flex gap-4 text-2xl text-gray-300 mt-2">
          <a href="https://github.com/marziulrafi" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/marziulkarim" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={40} />
          </a>
          <a href="https://facebook.com/marziulkarim" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebook size={40} />
          </a>
        </div>
      </motion.div>


      <motion.div
        className="md:w-1/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>


    </section>
  );
};

export default Hero;