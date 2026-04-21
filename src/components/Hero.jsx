// src/components/Hero.jsx

import { FaGithub, FaLinkedin, FaDocker, FaAws, FaLinux, FaGitAlt } from "react-icons/fa";
import {
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
  SiNginx
} from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen px-8 md:px-16 py-10 grid md:grid-cols-2 gap-14 items-center bg-[#d9f5f3] snap-start">

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

        <h2 className="text-2xl md:text-3xl font-semibold mt-5 text-slate-800">
          DevOps Engineer | System Integrator
        </h2>

        <p className="mt-7 text-xl text-gray-700 leading-8 max-w-xl">
          3+ years of real-world IT operations experience. Building scalable CI/CD pipelines, container platforms, monitoring systems and cloud deployments.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-3 mt-7">
          {["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-7 py-3 rounded-xl shadow-xl hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/Shashikant_Uikey_Resume.pdf"
            download
            className="border-2 border-slate-900 px-7 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-5 mt-10 text-3xl">
          <a href="https://github.com/Shashikant0187" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
          </a>
        </div>

        {/* Scroll Down */}
        <p className="mt-10 text-sm text-gray-500 animate-bounce">
          ↓ Scroll to Explore
        </p>
      </motion.div>

      {/* Right */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center h-[500px]"
>
  {/* Center Sphere */}
  <motion.div
    animate={{
      y: [0, -12, 0],
      boxShadow: [
        "0 0 30px rgba(20,184,166,0.25)",
        "0 0 60px rgba(20,184,166,0.45)",
        "0 0 30px rgba(20,184,166,0.25)",
      ],
    }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="w-150 h-150 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 flex items-center justify-center text-8xl text-white font-bold"
  >
    S
  </motion.div>

  {/* Floating Icons */}

  {[
    {
      icon: <FaDocker className="text-blue-500" />,
      cls: "top-0 left-16",
    },
    {
      icon: <SiKubernetes className="text-blue-700" />,
      cls: "bottom-12 left-0",
    },
    {
      icon: <FaAws className="text-orange-500" />,
      cls: "top-10 right-0",
    },
    {
      icon: <SiPrometheus className="text-orange-600" />,
      cls: "bottom-0 right-10",
    },
    {
      icon: <FaLinux className="text-yellow-500" />,
      cls: "top-36 left-0",
    },
    {
      icon: <SiGithubactions className="text-purple-500" />,
      cls: "top-28 right-24",
    },
    {
      icon: <SiGrafana className="text-orange-400" />,
      cls: "bottom-24 right-28",
    },
    {
      icon: <SiNginx className="text-green-600" />,
      cls: "bottom-24 left-24",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      animate={{ y: [0, -8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2 + i * 0.4,
      }}
      className={`absolute ${item.cls} bg-white p-4 rounded-xl shadow-xl text-3xl`}
    >
      {item.icon}
    </motion.div>
  ))}
</motion.div>
    </section>
  );
}

export default Hero;
