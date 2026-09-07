// src/components/Contact.jsx

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#050d18] px-8 md:px-16 py-24 text-white"
    >

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />


      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* Header */}
        <div className="max-w-4xl">

          <p className="text-teal-400 font-semibold tracking-[0.2em] text-sm">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-4 tracking-tight">
            Let's Build Something
            <span className="block text-slate-500">
              Reliable Together.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8 max-w-2xl">
            I'm open to opportunities involving full-stack development,
            DevOps, cloud infrastructure and production engineering.
            Let's connect and build systems that actually work in production.
          </p>

        </div>


        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-14">


          {/* Left — CTA Card */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-teal-400/15
              bg-gradient-to-br
              from-teal-400/[0.08]
              via-white/[0.03]
              to-cyan-400/[0.04]
              p-8 md:p-10
            "
          >

            {/* Decorative Glow */}
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />


            <div className="relative">

              {/* Terminal Label */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500">

                <span className="w-2 h-2 rounded-full bg-teal-400" />

                <span>/availability</span>

              </div>


              <h3 className="text-3xl md:text-4xl font-bold mt-8">
                Open to opportunities
              </h3>


              <p className="mt-5 text-slate-400 leading-7 max-w-xl">
                Whether it's a full-stack role, DevOps position,
                cloud engineering opportunity or a technical collaboration,
                I'm always interested in solving meaningful engineering problems.
              </p>


              {/* Availability */}
              <div className="flex items-center gap-3 mt-8">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400" />

                </span>

                <span className="text-sm font-medium text-slate-300">
                  Currently available for opportunities
                </span>

              </div>


              {/* CTA */}
              <a
                href="mailto:shashikantuikey18@gmail.com"
                className="
                  group
                  inline-flex items-center gap-3
                  mt-10
                  px-7 py-3.5
                  rounded-xl
                  bg-teal-400
                  text-[#06101d]
                  font-semibold
                  shadow-lg shadow-teal-400/10
                  hover:bg-cyan-300
                  hover:shadow-teal-400/20
                  transition-all duration-300
                "
              >

                Start a Conversation

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

              </a>

            </div>

          </div>


          {/* Right — Contact Details */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-8">

            <p className="text-xs font-mono text-slate-500">
              /connect
            </p>


            <h3 className="text-2xl font-bold mt-3">
              Find me online
            </h3>


            <div className="space-y-3 mt-8">


              {/* Email */}
              <a
                href="mailto:shashikantuikey18@gmail.com"
                className="
                  group flex items-center gap-4
                  p-4 rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  hover:border-teal-400/30
                  hover:bg-teal-400/[0.05]
                  transition-all
                "
              >

                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-teal-400 text-lg">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">

                  <p className="text-xs text-slate-500 font-mono">
                    EMAIL
                  </p>

                  <p className="text-sm md:text-base text-slate-300 truncate group-hover:text-teal-300 transition-colors">
                    shashikantuikey18@gmail.com
                  </p>

                </div>

              </a>


              {/* GitHub */}
              <a
                href="https://github.com/Shashikant0187"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex items-center gap-4
                  p-4 rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  hover:border-teal-400/30
                  hover:bg-teal-400/[0.05]
                  transition-all
                "
              >

                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-white text-lg">
                  <FaGithub />
                </div>

                <div>

                  <p className="text-xs text-slate-500 font-mono">
                    GITHUB
                  </p>

                  <p className="text-sm md:text-base text-slate-300 group-hover:text-teal-300 transition-colors">
                    Shashikant0187
                  </p>

                </div>

              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shashikant-uikey-b866463b4/"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex items-center gap-4
                  p-4 rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  hover:border-teal-400/30
                  hover:bg-teal-400/[0.05]
                  transition-all
                "
              >

                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 text-blue-400 text-lg">
                  <FaLinkedin />
                </div>

                <div>

                  <p className="text-xs text-slate-500 font-mono">
                    LINKEDIN
                  </p>

                  <p className="text-sm md:text-base text-slate-300 group-hover:text-teal-300 transition-colors">
                    shashikant-uikey
                  </p>

                </div>

              </a>

            </div>


            {/* Resume */}
            <a
              href="/Shashikant_Uikey_Resume.pdf"
              download
              className="
                flex items-center justify-between
                mt-6
                px-5 py-4
                rounded-2xl
                border border-white/10
                bg-white/[0.025]
                hover:border-teal-400/30
                hover:bg-teal-400/[0.05]
                transition-all
              "
            >

              <div>

                <p className="text-xs text-slate-500 font-mono">
                  DOCUMENT
                </p>

                <p className="font-semibold mt-1">
                  Download Resume
                </p>

              </div>

              <FaArrowRight className="text-teal-400" />

            </a>

          </div>

        </div>


        {/* Footer */}
        <div className="mt-20 pt-7 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-sm text-slate-500 font-mono">
            BUILD → DEPLOY → OBSERVE → IMPROVE
          </p>

          <p className="text-sm text-slate-600">
            © 2026 Shashikant Uikey
          </p>

        </div>

      </div>

    </motion.section>
  );
}

export default Contact;