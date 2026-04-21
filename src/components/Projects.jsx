// src/components/Projects.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiPrometheus,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "DevOps CI/CD Pipeline",
      desc: "Automated build, push and deployment pipeline using GitHub Actions, Docker and Kubernetes.",
      tech: ["GitHub Actions", "Docker", "Kubernetes"],
      icon: <SiGithubactions />,
    },
    {
      title: "Monitoring Stack",
      desc: "Built Prometheus + Grafana monitoring dashboards with alerting for workloads.",
      tech: ["Prometheus", "Grafana", "Monitoring"],
      icon: <SiPrometheus />,
    },
    {
      title: "Portfolio Auto Deploy",
      desc: "React portfolio connected to GitHub and auto deployed on Vercel.",
      tech: ["React", "Vercel", "CI/CD"],
      icon: <FaExternalLinkAlt />,
    },
    {
      title: "Dockerized App Deployment",
      desc: "Containerized applications using Docker and deployed efficiently.",
      tech: ["Docker", "Linux"],
      icon: <SiDocker />,
    },
    {
      title: "Kubernetes Scaling Lab",
      desc: "Worked on replicas, rolling updates and Kubernetes service exposure.",
      tech: ["Kubernetes", "Scaling"],
      icon: <SiKubernetes />,
    },
    {
      title: "Linux Server Operations",
      desc: "Hands-on Linux operations, troubleshooting and infrastructure support.",
      tech: ["Linux", "Ops"],
      icon: <FaGithub />,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="px-8 md:px-16 py-24 bg-[#0f172a] text-white"
    >
      <p className="text-teal-400 font-semibold tracking-wide">
        PROJECTS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Featured Work
      </h2>

      <p className="mt-5 text-lg text-gray-300 max-w-2xl leading-8">
        Hands-on projects focused on DevOps automation,
        deployment, cloud and monitoring systems.
      </p>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mt-14">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-slate-800 rounded-2xl p-7 border border-slate-700 shadow-xl"
          >
            <div className="text-4xl text-teal-400 mb-5">
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-slate-700 text-teal-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-7 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl font-semibold transition"
        >
          {showAll ? "Show Less ↑" : "View More Projects →"}
        </button>
      </div>
    </section>
  );
}

export default Projects;
