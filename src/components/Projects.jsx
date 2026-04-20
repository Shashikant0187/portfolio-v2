// src/components/Projects.jsx

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGithubactions,
  SiPrometheus,
} from "react-icons/si";

function Projects() {
const projects = [
  {
    title: "DevOps CI/CD Pipeline",
    desc:
      "Designed and implemented an automated CI/CD pipeline using GitHub Actions to build Docker images and deploy applications on Kubernetes, reducing manual deployment effort and ensuring faster release cycles.",
    tech: ["GitHub Actions", "Docker", "Kubernetes"],
    icon: <SiGithubactions />,
    link: "https://github.com/Shashikant0187",
    highlight: "Automated build → deploy pipeline",
  },
  {
    title: "Kubernetes Monitoring Stack",
    desc:
      "Built a monitoring and observability stack using Prometheus and Grafana to track application performance, visualize metrics, and enable proactive issue detection.",
    tech: ["Prometheus", "Grafana", "Kubernetes"],
    icon: <SiPrometheus />,
    link: "https://github.com/Shashikant0187",
    highlight: "Real-time monitoring & alerting",
  },
  {
    title: "Portfolio Auto Deployment",
    desc:
      "Developed a responsive portfolio with React and integrated CI/CD for automatic deployment using GitHub and Vercel, ensuring continuous delivery on every code push.",
    tech: ["React", "Tailwind", "Vercel"],
    icon: <FaExternalLinkAlt />,
    link: "https://github.com/Shashikant0187",
    highlight: "Auto deployment pipeline",
  },
];
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-8 md:px-16 py-24 bg-[#0f172a] text-white"
    >
      <p className="text-teal-400 font-semibold tracking-wide">
        PROJECTS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Featured Work
      </h2>

      <p className="mt-5 text-lg text-gray-300 max-w-2xl leading-8">
        Real hands-on projects focused on DevOps practices,
        automation, monitoring and deployment workflows.
      </p>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mt-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-800 rounded-2xl p-7 border border-slate-700 shadow-xl"
          >
            {/* Icon */}
            <div className="text-4xl text-teal-400 mb-5">
              {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>
<p className="mt-2 text-sm text-teal-400 font-medium">
  {project.highlight}
</p>
            {/* Desc */}
            <p className="mt-5 text-gray-300 leading-8">
              {project.desc}
            </p>

            {/* Tags */}
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

            {/* Links */}
            <div className="flex gap-5 mt-7 text-lg">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-teal-400 transition"
              >
                <FaGithub />
                Code
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-teal-400 transition"
              >
                <FaExternalLinkAlt />
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
