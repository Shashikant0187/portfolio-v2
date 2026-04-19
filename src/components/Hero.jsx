// src/components/Hero.jsx

import { FaGithub, FaLinkedin, FaDocker, FaAws } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-14 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-teal-600 font-semibold text-lg">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
          Shashikant <br />
          <span className="text-teal-600">Uikey</span>
        </h1>

        <p className="mt-8 text-xl text-gray-700 leading-8 max-w-xl">
          System Integrator with 3+ years of real-world experience.
          Transitioning into DevOps with hands-on CI/CD, Docker,
          Kubernetes and cloud projects.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 text-white px-7 py-3 rounded-xl shadow-xl transition"
          >
            View Projects
          </a>

          <button className="border-2 border-slate-900 px-7 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition">
            Resume
          </button>
        </div>

        <div className="flex gap-5 mt-10 text-3xl">
          <a
            href="https://github.com/Shashikant0187"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-black transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/shashikant-uikey-b866463b4/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
          </a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 shadow-2xl flex items-center justify-center text-8xl text-white font-bold"
        >
          S
        </motion.div>

        <div className="absolute top-0 left-8 bg-white p-4 rounded-xl shadow text-3xl">
          <FaDocker className="text-blue-500" />
        </div>

        <div className="absolute bottom-10 left-0 bg-white p-4 rounded-xl shadow text-3xl">
          <SiKubernetes className="text-blue-700" />
        </div>

        <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow text-3xl">
          <FaAws className="text-orange-500" />
        </div>

        <div className="absolute bottom-0 right-10 bg-white p-4 rounded-xl shadow text-3xl">
          <SiPrometheus className="text-orange-600" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
