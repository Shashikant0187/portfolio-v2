// src/components/Skills.jsx

import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiGit,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      number: "01",
      description: "Modern interfaces and responsive web applications.",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
          color: "text-cyan-400",
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          color: "text-yellow-400",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          color: "text-orange-500",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-cyan-400",
        },
      ],
    },

    {
      title: "Backend",
      number: "02",
      description: "Server-side applications and APIs built for reliability.",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "text-green-400",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "text-slate-300",
        },
        {
          name: "REST APIs",
          icon: "API",
          color: "text-teal-400",
        },
      ],
    },

    {
      title: "Databases",
      number: "03",
      description: "Application data, persistence and caching technologies.",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "text-blue-400",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "text-green-400",
        },
        {
          name: "Redis",
          icon: <SiRedis />,
          color: "text-red-400",
        },
      ],
    },

    {
      title: "DevOps & Cloud",
      number: "04",
      featured: true,
      description:
        "Containers, automation, cloud infrastructure and production deployments.",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker />,
          color: "text-blue-400",
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes />,
          color: "text-blue-400",
        },
        {
          name: "AWS",
          icon: <FaAws />,
          color: "text-orange-400",
        },
        {
          name: "Terraform",
          icon: <SiTerraform />,
          color: "text-purple-400",
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions />,
          color: "text-purple-400",
        },
        {
          name: "Jenkins",
          icon: <SiJenkins />,
          color: "text-red-400",
          level: "Knowledge",
        },
        {
          name: "Nginx",
          icon: <SiNginx />,
          color: "text-green-400",
        },
        {
          name: "Linux",
          icon: <FaLinux />,
          color: "text-yellow-400",
        },
      ],
    },

    {
      title: "Monitoring",
      number: "05",
      description:
        "Observability and visibility into application infrastructure.",
      skills: [
        {
          name: "Prometheus",
          icon: <SiPrometheus />,
          color: "text-orange-400",
        },
        {
          name: "Grafana",
          icon: <SiGrafana />,
          color: "text-orange-400",
        },
      ],
    },

    {
      title: "Programming & Tools",
      number: "06",
      description:
        "Programming fundamentals and development workflow.",
      skills: [
        {
          name: "C++",
          icon: "C++",
          color: "text-blue-400",
        },
        {
          name: "Python",
          icon: "Py",
          color: "text-yellow-400",
        },
        {
          name: "Git",
          icon: <SiGit />,
          color: "text-orange-400",
        },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#07111f] px-8 md:px-16 py-24 text-white"
    >
      {/* Ambient Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* Header */}
        <div className="max-w-4xl">

          <p className="text-teal-400 font-semibold tracking-[0.2em] text-sm">
            TECHNOLOGY STACK
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-4 tracking-tight">
            Tools I Build With
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8 max-w-3xl">
            A full-stack engineering toolkit covering application
            development, backend systems, databases, cloud infrastructure,
            automation, deployment and observability.
          </p>

        </div>


        {/* Categories */}
        <div className="grid lg:grid-cols-3 gap-6 mt-14">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className={`
                group relative overflow-hidden rounded-3xl
                border p-7
                transition-all duration-300
                ${
                  category.featured
                    ? "lg:col-span-2 bg-gradient-to-br from-teal-400/[0.08] to-cyan-400/[0.03] border-teal-400/20 shadow-[0_20px_60px_rgba(20,184,166,0.08)]"
                    : "bg-white/[0.03] border-white/10 hover:border-teal-400/20 hover:bg-white/[0.045]"
                }
              `}
            >

              {/* Featured Glow */}
              {category.featured && (
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
              )}


              {/* Top */}
              <div className="relative flex items-start justify-between">

                <div>

                  <span className="text-sm font-mono text-teal-400">
                    /{category.number}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 text-white">
                    {category.title}
                  </h3>

                </div>

                <span className="text-5xl font-bold text-white/[0.04] group-hover:text-teal-400/[0.08] transition-colors">
                  {category.number}
                </span>

              </div>


              {/* Description */}
              <p className="relative mt-4 text-sm text-slate-400 leading-6 max-w-xl">
                {category.description}
              </p>


              {/* Skills */}
              <div className="relative flex flex-wrap gap-3 mt-7">

                {category.skills.map((skill) => (

                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04 }}
                    className="
                      flex items-center gap-2
                      px-3.5 py-2.5
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      hover:bg-white/[0.07]
                      hover:border-teal-400/20
                      transition-all
                    "
                  >

                    <span className={`text-xl ${skill.color}`}>
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium text-slate-300">
                      {skill.name}
                    </span>

                    {skill.level && (
                      <span className="ml-1 text-[10px] uppercase tracking-wide text-slate-500 border border-white/10 rounded-full px-2 py-0.5">
                        {skill.level}
                      </span>
                    )}

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>


        {/* Engineering Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            mt-14
            rounded-3xl
            border border-white/10
            bg-gradient-to-r from-white/[0.04] to-white/[0.02]
            px-7 md:px-10
            py-8
            flex flex-col md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >

          <div>

            <p className="text-teal-400 text-sm font-semibold tracking-[0.2em]">
              ENGINEERING APPROACH
            </p>

            <p className="mt-2 text-xl md:text-2xl font-semibold text-white">
              Build applications. Automate infrastructure. Monitor everything.
            </p>

          </div>

          <div className="flex items-center gap-2 text-sm font-mono text-slate-500 whitespace-nowrap">

            <span className="text-teal-400">
              ●
            </span>

            Full Stack + DevOps

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default Skills;