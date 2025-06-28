import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Skills", to: "#skills" },
  { name: "Education", to: "#education" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-[#0F172A] text-white shadow z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        <h1 className="text-xl font-semibold tracking-wider text-blue-400">MK</h1>

        <div className="hidden md:flex flex-1 justify-center gap-6">
          {links.map(link => (
            <a
              key={link.name}
              href={link.to}
              className="hover:text-blue-400 transition duration-300">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0F172A]">
          {links.map(link => (
            <a
              key={link.name}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className="block hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block mt-2 text-center bg-blue-500 text-white px-3 py-2 rounded text-sm"
          >
            Download Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
