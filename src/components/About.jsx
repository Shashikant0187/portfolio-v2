// src/components/About.jsx

import { motion } from "framer-motion";

function About() {
return (
<motion.section id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration:
  0.7 }} viewport={{ once: true }} className="px-8 md:px-16 py-24 bg-[#0f172a] text-white grid md:grid-cols-2 gap-16">
  {/* Left */}
  <div>
    <p className="text-teal-600 font-semibold tracking-wide">
      ABOUT
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
      Turning Real-World IT Experience Into DevOps Expertise
    </h2>
  </div>

  {/* Right */}
  <div>
    <p className="text-lg text-gray-300 leading-8">
      I currently work as a <strong>System Integrator</strong> with 3+ years of hands-on experience in deployments,
      troubleshooting, infrastructure support, production operations, and enterprise environments. </p>

    <p className="text-lg text-gray-300 leading-8 mt-6">
      Alongside my professional role, I have been actively transitioning into DevOps by building real-world projects
      using <strong>GitHub Actions, Docker, Kubernetes, Prometheus, Grafana</strong>, and cloud technologies. </p>

    <p className="text-lg text-gray-300 leading-8 mt-6">
      My goal is to combine operational reliability with automation, CI/CD, and scalable cloud infrastructure to deliver
      efficient modern systems. </p>

    {/* Quick Highlights */}
    <div className="grid sm:grid-cols-2 gap-4 mt-10">
      <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl">
        <p className="text-3xl font-bold text-teal-600">3+</p>
        <p className="text-gray-300 mt-1">Years Experience</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl">
        <p className="text-3xl font-bold text-teal-600">15+</p>
        <p className="text-gray-300 mt-1">Labs & Deployments</p>
      </div>
      <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl">
        <p className="text-3xl font-bold text-teal-600">24/7</p>
        <p className="text-gray-300 mt-1">Operations Mindset</p>
      </div>
    </div>
  </div>
</motion.section>
);
}

export default About;
