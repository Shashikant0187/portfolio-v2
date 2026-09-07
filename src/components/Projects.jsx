// src/components/Projects.jsx

import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiPrometheus,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      number: "01",
      title: "DeployNow",
      category: "FULL STACK + DEVOPS",
      desc: "A full-stack deployment platform that connects application development with automated deployment workflows, containerization and real-time deployment logs.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "Docker",
        "GitHub Actions",
        "Socket.IO",
      ],
      icon: <SiDocker />,
      featured: true,
    },

    {
      number: "02",
      title: "Monitoring Stack",
      category: "OBSERVABILITY",
      desc: "Built Prometheus and Grafana monitoring dashboards with alerting for infrastructure and workloads.",
      tech: ["Prometheus", "Grafana", "Monitoring"],
      icon: <SiPrometheus />,
    },

    {
      number: "03",
      title: "Portfolio Auto Deploy",
      category: "WEB + CI/CD",
      desc: "React portfolio connected to GitHub with automated deployment through Vercel.",
      tech: ["React", "Vercel", "CI/CD"],
      icon: <FaExternalLinkAlt />,
    },

    {
      number: "04",
      title: "Dockerized App Deployment",
      category: "CONTAINERS",
      desc: "Containerized applications using Docker with a focus on repeatable deployment and Linux-based environments.",
      tech: ["Docker", "Linux"],
      icon: <SiDocker />,
    },

    {
      number: "05",
      title: "Kubernetes Scaling Lab",
      category: "ORCHESTRATION",
      desc: "Hands-on Kubernetes work involving replicas, rolling updates and service exposure.",
      tech: ["Kubernetes", "Scaling"],
      icon: <SiKubernetes />,
    },

    {
      number: "06",
      title: "Linux Server Operations",
      category: "INFRASTRUCTURE",
      desc: "Hands-on Linux operations, troubleshooting and infrastructure support in production-oriented environments.",
      tech: ["Linux", "Operations"],
      icon: <FaLinux />,
    },
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07111f] px-8 md:px-16 py-24 text-white"
    >

      {/* Background Glows */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />


      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* Header */}

        <div className="max-w-4xl">

          <p className="text-teal-400 font-semibold tracking-[0.2em] text-sm">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-4 tracking-tight">
            Featured Engineering Work
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8 max-w-3xl">
            Hands-on projects focused on application development,
            automation, deployment, infrastructure and observability.
          </p>

        </div>


        {/* Project Grid */}

        <div className="grid lg:grid-cols-2 gap-6 mt-14">

          {visibleProjects.map((project, index) => (

            <motion.article
              key={project.number}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -6,
              }}

              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-7
                md:p-8
                transition-all
                duration-300

                ${
                  project.featured
                    ? "lg:col-span-2 bg-gradient-to-br from-teal-400/[0.08] via-white/[0.03] to-cyan-400/[0.04] border-teal-400/20"
                    : "bg-white/[0.03] border-white/10 hover:border-teal-400/20 hover:bg-white/[0.045]"
                }
              `}
            >

              {/* Featured Glow */}

              {project.featured && (
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
              )}


              <div className="relative">

                {/* Top Row */}

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <span className="font-mono text-sm text-teal-400">
                      /{project.number}
                    </span>

                    <span className="h-px w-8 bg-white/10" />

                    <span className="text-[11px] tracking-[0.15em] text-slate-500">
                      {project.category}
                    </span>

                  </div>


                  {/* Project Status */}

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">

                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />

                    HANDS-ON

                  </div>

                </div>


                {/* Project Content */}

                <div
                  className={
                    project.featured
                      ? "grid md:grid-cols-[1fr_auto] gap-8 items-start mt-8"
                      : "mt-8"
                  }
                >

                  {/* Project Information */}

                  <div>

                    <div className="flex items-center gap-4">

                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-2xl text-teal-400">
                        {project.icon}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>

                    </div>


                    <p className="mt-5 text-slate-400 leading-7 max-w-2xl">
                      {project.desc}
                    </p>


                    {/* Technologies */}

                    <div className="flex flex-wrap gap-2.5 mt-6">

                      {project.tech.map((item) => (

                        <span
                          key={item}
                          className="
                            px-3
                            py-1.5
                            rounded-lg
                            bg-white/[0.04]
                            border
                            border-white/10
                            text-sm
                            text-slate-300
                            group-hover:border-teal-400/15
                            transition-colors
                          "
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* DeployNow Architecture */}

                  {project.featured && (

                    <div className="hidden md:block w-72">

                      <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-5 font-mono text-xs">

                        {/* Terminal Header */}

                        <div className="flex items-center gap-2 mb-5">

                          <span className="w-2 h-2 rounded-full bg-red-400/70" />

                          <span className="w-2 h-2 rounded-full bg-yellow-400/70" />

                          <span className="w-2 h-2 rounded-full bg-green-400/70" />

                          <span className="ml-auto text-slate-600">
                            deploynow
                          </span>

                        </div>


                        {/* Architecture Flow */}

                        <div className="space-y-3">

                          <div className="flex items-center justify-between">

                            <span className="text-slate-500">
                              frontend
                            </span>

                            <span className="text-cyan-400">
                              React
                            </span>

                          </div>


                          <div className="text-teal-400 text-center">
                            ↓
                          </div>


                          <div className="flex items-center justify-between">

                            <span className="text-slate-500">
                              backend
                            </span>

                            <span className="text-green-400">
                              Node.js
                            </span>

                          </div>


                          <div className="text-teal-400 text-center">
                            ↓
                          </div>


                          <div className="flex items-center justify-between">

                            <span className="text-slate-500">
                              container
                            </span>

                            <span className="text-blue-400">
                              Docker
                            </span>

                          </div>


                          <div className="text-teal-400 text-center">
                            ↓
                          </div>


                          <div className="flex items-center justify-between">

                            <span className="text-slate-500">
                              deployment
                            </span>

                            <span className="text-purple-400">
                              CI/CD
                            </span>

                          </div>


                          <div className="text-teal-400 text-center">
                            ↓
                          </div>


                          <div className="flex items-center justify-between">

                            <span className="text-slate-500">
                              logs
                            </span>

                            <span className="text-teal-400">
                              Socket.IO
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>

                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* View More Button */}

        <div className="flex justify-center mt-12">

          <button
            onClick={() => setShowAll(!showAll)}
            className="
              group
              flex
              items-center
              gap-3
              px-7
              py-3
              rounded-xl
              bg-white/[0.04]
              border
              border-white/10
              text-slate-200
              font-semibold
              hover:bg-teal-400/10
              hover:border-teal-400/30
              hover:text-teal-300
              transition-all
            "
          >

            {showAll
              ? "Show Less"
              : "View More Projects"}

            <span className="group-hover:translate-x-1 transition-transform">
              {showAll ? "↑" : "→"}
            </span>

          </button>

        </div>


        {/* Bottom Engineering Statement */}

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-7">

          <p className="text-sm text-slate-500 font-mono">
            BUILD → DEPLOY → OBSERVE → IMPROVE
          </p>

          <p className="text-sm text-slate-600">
            Full Stack + DevOps Engineering
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;