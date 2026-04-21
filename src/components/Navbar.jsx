// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

useEffect(() => {
  const sections = links
    .map((link) => document.getElementById(link.id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      let maxRatio = 0;
      let visibleId = "";

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > maxRatio
        ) {
          maxRatio = entry.intersectionRatio;
          visibleId = entry.target.id;
        }
      });

      if (visibleId) {
        setActive(visibleId);
      }
    },
    {
      threshold: [0.2, 0.4, 0.6, 0.8],
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <>
      <nav className="sticky top-0 z-50 px-8 md:px-16 py-4 backdrop-blur-md bg-[#0f172a]/85 border-b border-white/10">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-teal-400">
            Shashikant
          </a>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative transition ${
                  active === link.id
                    ? "text-teal-400"
                    : "text-white hover:text-teal-300"
                }`}
              >
                {link.label}

                {active === link.id && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-teal-400 rounded-full"></span>
                )}
              </a>
            ))}

            <a
              href="mailto:shashikantuikey18@gmail.com"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2 rounded-xl text-white hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden bg-[#0f172a] text-white px-8 py-6 space-y-5"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="mailto:shashikantuikey18@gmail.com"
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
