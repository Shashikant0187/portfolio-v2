// src/components/Navbar.jsx

import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="px-8 md:px-16 py-4 flex justify-between items-center bg-[#0f172a]/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-wide text-teal-400"
        >
          Shashikant
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#about" className="hover:text-teal-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-teal-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-teal-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>

          <a
            href="mailto:shashikantuikey18@gmail.com"
            className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-xl transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0f172a] text-white px-8 py-6 space-y-5 shadow-xl"
          >
            <a
              href="#about"
              onClick={closeMenu}
              className="block hover:text-teal-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="block hover:text-teal-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="block hover:text-teal-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="block hover:text-teal-400"
            >
              Contact
            </a>

            <a
              href="mailto:shashikantuikey18@gmail.com"
              onClick={closeMenu}
              className="block bg-teal-500 text-center py-3 rounded-xl"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;



