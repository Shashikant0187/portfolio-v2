// src/components/About.jsx

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full Stack",
      text: "Modern web applications & REST APIs",
    },
    {
      icon: <FaServer />,
      title: "Production",
      text: "Real-world IT operations & troubleshooting",
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Cloud",
      text: "Containers, automation & infrastructure",
    },
    {
      icon: <FaTools />,
      title: "Engineering",
      text: "Build, deploy, monitor & improve",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#07111f] px-8 md:px-16 py-24 text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* Section Header */}
        <div className="max-w-5xl">

          <p className="text-teal-400 font-semibold tracking-[0.2em] text-sm">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold mt-4 leading-[1.05] tracking-tight">
            From Application Development
            <span className="block text-slate-400">
              to Production Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Alongside my professional experience, I build full-stack
            applications and work across backend development, databases,
            containers, CI/CD, cloud infrastructure and monitoring.
          </p>

        </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 mt-14">

          {/* LEFT — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 md:p-9"
          >

            <div className="flex items-center gap-3 mb-7">

              <span className="w-2 h-2 rounded-full bg-teal-400" />

              <span className="text-sm font-mono text-slate-500">
                /engineering-journey
              </span>

            </div>


            <p className="text-lg text-slate-300 leading-8">
              I currently work as a{" "}
              <strong className="text-white">
                System Integrator
              </strong>{" "}
              with 3+ years of hands-on experience in deployments,
              troubleshooting, infrastructure support, production operations
              and enterprise environments.
            </p>


            <p className="mt-6 text-lg text-slate-300 leading-8">
              Alongside my professional experience, I have been building
              full-stack applications and developing strong capabilities
              across backend development, databases, containers, CI/CD,
              cloud infrastructure and monitoring.
            </p>


            <p className="mt-6 text-lg text-slate-300 leading-8">
              My approach is simple:{" "}
              <strong className="text-teal-400">
                build it, automate it, deploy it and understand how it
                behaves in production.
              </strong>
            </p>


            {/* Engineering Flow */}
            <div className="mt-9 pt-7 border-t border-white/10">

              <div className="flex flex-wrap items-center gap-3">

                {[
                  "Develop",
                  "Containerize",
                  "Automate",
                  "Deploy",
                  "Monitor",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-slate-300">
                      {item}
                    </span>

                    {index < 4 && (
                      <span className="text-teal-500">
                        →
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>

          </motion.div>


          {/* RIGHT — Engineering Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >

            {/* Experience Card */}
            <div className="rounded-3xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-400/10 p-7">

              <p className="text-sm font-mono text-slate-500">
                /experience
              </p>

              <div className="flex items-end gap-3 mt-3">

                <span className="text-5xl font-bold text-teal-400">
                  3+
                </span>

                <span className="text-slate-400 pb-1">
                  years
                </span>

              </div>

              <p className="mt-2 text-slate-300">
                Hands-on IT operations & infrastructure experience
              </p>

            </div>


            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">

              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.05] hover:border-teal-400/20 transition-all"
                >

                  <div className="text-2xl text-teal-400 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-6">
                    {item.text}
                  </p>

                </motion.div>
              ))}

            </div>


            {/* Labs / Deployments */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">

                <p className="text-3xl font-bold text-cyan-400">
                  15+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Labs & Deployments
                </p>

              </div>


              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">

                <p className="text-3xl font-bold text-teal-400">
                  24/7
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Operations Mindset
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;