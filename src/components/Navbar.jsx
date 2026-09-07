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
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = "";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPos >= top &&
            scrollPos < top + height
          ) {
            current = link.id;
          }
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}

      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          z-[100]
          px-8
          md:px-16
          py-4
          backdrop-blur-xl
          bg-[#07111f]/90
          border-b
          border-white/10
        "
      >

        <div className="flex justify-between items-center">

          {/* Logo */}

          <a
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-teal-400"
          >
            Shashikant
          </a>


          {/* Desktop Navigation */}

          <div className="hidden md:flex gap-8 items-center text-sm font-medium">

            {links.map((link) => (

              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  transition-colors
                  ${
                    active === link.id
                      ? "text-teal-400"
                      : "text-white hover:text-teal-300"
                  }
                `}
              >

                {link.label}

                {active === link.id && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-[2px]
                      bg-teal-400
                      rounded-full
                    "
                  />
                )}

              </a>

            ))}


            {/* Hire Me */}

            <a
              href="mailto:shashikantuikey18@gmail.com"
              className="
                bg-gradient-to-r
                from-teal-500
                to-cyan-500
                px-5
                py-2
                rounded-xl
                text-white
                hover:scale-105
                transition
              "
            >
              Hire Me
            </a>

          </div>


          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-white
              text-xl
              hover:bg-teal-400/10
              hover:border-teal-400/30
              transition
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </nav>


      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              top-[73px]
              left-0
              right-0
              z-[90]
              md:hidden
              bg-[#07111f]/98
              backdrop-blur-xl
              border-b
              border-white/10
              shadow-2xl
            "
          >

            <div className="px-8 py-6 space-y-2">

              {links.map((link) => (

                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3.5
                    rounded-xl
                    transition

                    ${
                      active === link.id
                        ? "bg-teal-400/10 text-teal-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-teal-300"
                    }
                  `}
                >

                  <span>
                    {link.label}
                  </span>

                  {active === link.id && (
                    <span className="text-teal-400">
                      ●
                    </span>
                  )}

                </a>

              ))}


              {/* Mobile Hire Me */}

              <a
                href="mailto:shashikantuikey18@gmail.com"
                onClick={closeMenu}
                className="
                  block
                  mt-4
                  bg-gradient-to-r
                  from-teal-500
                  to-cyan-500
                  text-white
                  text-center
                  py-3.5
                  rounded-xl
                  font-semibold
                "
              >
                Hire Me
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Navbar;