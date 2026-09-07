// src/components/Hero.jsx

import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiGithubactions,
  SiReact,
  SiNodedotjs,
  SiTerraform,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "framer-motion";

function Hero() {
  const technologies = [
    {
      name: "React",
      icon: <SiReact />,
      color: "text-cyan-400",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "text-green-500",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      color: "text-blue-500",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
      color: "text-blue-600",
    },
    {
      name: "AWS",
      icon: <FaAws />,
      color: "text-orange-500",
    },
    {
      name: "Terraform",
      icon: <SiTerraform />,
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07111f] px-8 md:px-16 text-slate-100"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center max-w-[1500px] mx-auto">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 lg:pt-10"
        >

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-sm text-sm font-medium text-slate-700"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            Open to Full Stack & DevOps Opportunities
          </motion.div>


          {/* Small Label */}
          <p className="mt-8 text-sm md:text-base font-semibold tracking-[0.25em] text-teal-700">
            FULL STACK DEVELOPER
          </p>


          {/* Name */}
          <h1 className="mt-4 text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-white">
            Shashikant
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              Uikey
            </span>
          </h1>


          {/* Professional Title */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xl md:text-2xl font-semibold text-slate-200">

            <span>Full Stack Developer</span>

            <span className="text-teal-500">/</span>

            <span className="text-teal-700">
              DevOps & Cloud Engineer
            </span>

          </div>


          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-300 leading-8">
            I build modern web applications, scalable REST APIs and
            production-ready infrastructure — connecting application
            development with automation, cloud and reliable deployments.
          </p>


          {/* Engineering Flow */}
          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">

            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
              Build
            </span>

            <span className="text-teal-500">→</span>

            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
              Deploy
            </span>

            <span className="text-teal-500">→</span>

            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
              Monitor
            </span>

            <span className="text-teal-500">→</span>

            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
              Scale
            </span>

          </div>


          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              View Projects

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>


            <a
              href="/Shashikant_Uikey_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-800 bg-white/60 backdrop-blur-sm text-slate-900 font-medium hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              Download Resume
            </a>

          </div>


          {/* Social */}
          <div className="mt-9 flex items-center gap-5">

            <a
              href="https://github.com/Shashikant0187"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-700 hover:text-black hover:-translate-y-1 transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shashikant-uikey-b866463b4/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaLinkedin />
            </a>

            <span className="h-6 w-px bg-slate-400/50" />

            <span className="text-sm text-slate-500">
              Based in India
            </span>

          </div>

        </motion.div>


        {/* =====================================================
            RIGHT SIDE — ENGINEERING CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex items-center justify-center lg:pt-10"
        >

          {/* Main Glass Card */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-5 md:p-7"
          >

            {/* Card Header */}
            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />

              </div>

              <span className="text-xs font-mono text-slate-400">
                shashikant@devops ~
              </span>

            </div>


            {/* Terminal */}
            <div className="rounded-2xl bg-[#0f172a] p-5 md:p-6 shadow-2xl">

              <div className="font-mono text-sm md:text-base leading-8">

                <p className="text-slate-500">
                  $ whoami
                </p>

                <p className="text-teal-400">
                  shashikant-uikey
                </p>

                <br />

                <p className="text-slate-500">
                  $ role
                </p>

                <p className="text-white">
                  Full Stack Developer
                </p>

                <p className="text-white">
                  DevOps & Cloud Engineer
                </p>

                <br />

                <p className="text-slate-500">
                  $ focus
                </p>

                <p className="text-cyan-400">
                  scalable-systems/
                </p>

                <p className="text-cyan-400">
                  automation/
                </p>

                <p className="text-cyan-400">
                  cloud-infrastructure/
                </p>

              </div>

            </div>


            {/* Technology Grid */}
            <div className="grid grid-cols-3 gap-3 mt-5">

              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/[0.04] border border-white/10 p-4 shadow-sm hover:shadow-lg transition-all"
                >

                  <div
                    className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </div>

                  <span className="text-xs font-medium text-slate-300 text-center">
                    {tech.name}
                  </span>

                </motion.div>
              ))}

            </div>


            {/* Architecture Line */}
            <div className="mt-5 flex items-center gap-3">

              <div className="h-px flex-1 bg-slate-300" />

              <span className="text-xs text-slate-400 font-mono">
                BUILD • DEPLOY • SCALE
              </span>

              <div className="h-px flex-1 bg-slate-300" />

            </div>

          </motion.div>


          {/* Floating CI/CD Badge */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -top-6 -right-2 md:right-0 bg-[#0d1b2a]/90 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl px-4 py-3"
          >

            <div className="flex items-center gap-3">

              <SiGithubactions className="text-2xl text-purple-500" />

              <div>
                <p className="text-xs text-slate-400">
                  CI/CD
                </p>

                <p className="text-sm font-semibold text-slate-200">
                  Automated
                </p>
              </div>

            </div>

          </motion.div>


          {/* Floating Database Badge */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
            }}
            className="absolute -bottom-14 -left-3 md:left-0 bg-[#0d1b2a]/90 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl px-4 py-3"
          >

            <div className="flex items-center gap-3">

              <SiPostgresql className="text-2xl text-blue-600" />

              <div>
                <p className="text-xs text-slate-400">
                  Database
                </p>

                <p className="text-sm font-semibold text-slate-200">
                  PostgreSQL
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>


      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">
          Explore
        </span>

        <span className="text-lg">
          ↓
        </span>
      </motion.div>

    </section>
  );
}

export default Hero;