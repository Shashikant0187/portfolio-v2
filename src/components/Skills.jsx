// src/components/Skills.jsx

import { motion } from "framer-motion";
import { FaDocker, FaAws, FaLinux } from "react-icons/fa";
import {
  SiKubernetes,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiGit,
  SiNginx,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Prometheus", icon: <SiPrometheus /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "Networking", icon: "🌐" },
    { name: "Troubleshooting", icon: "🛠️" },
    { name: "CI/CD", icon: "🚀" },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-8 md:px-16 py-24"
    >
      <p className="text-teal-600 font-semibold tracking-wide">
        SKILLS
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Tools & Technologies
      </h2>

      <p className="mt-5 text-lg text-gray-700 max-w-2xl leading-8">
        Practical tools I use for automation, deployment, monitoring,
        cloud infrastructure and production support.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
          >
            <div className="text-4xl mb-4 text-teal-600">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
