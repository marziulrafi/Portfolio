import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Skills", to: "#skills" },
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

       <img src="/marziul.png" className="lg:mt-2 w-10 h-10 lg:ml-20" alt="" />

        <div className="hidden md:flex flex-1 justify-center gap-6 mr-14">
          {links.map(link => (
            <a
              key={link.name}
              href={link.to}
              className="hover:text-blue-400 transition duration-300">
              {link.name}
            </a>
          ))}
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
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0F172A] ">
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
         
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
