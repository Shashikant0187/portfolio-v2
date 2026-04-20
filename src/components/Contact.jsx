// src/components/Contact.jsx

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-8 md:px-16 py-24 bg-white snap-start"
    >
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <div>
          <p className="text-teal-600 font-semibold tracking-wide">
            CONTACT
          </p>

          {/* Availability Badge */}
          <p className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            Open to Opportunities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Let’s Build Reliable Systems Together
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8 max-w-xl">
            I’m open to DevOps, Cloud, Infrastructure and IT opportunities.
            If you're hiring or would like to collaborate, feel free to connect.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-br from-[#d9f5f3] to-white border border-teal-100 rounded-3xl p-8 shadow-xl">

          <div className="space-y-6">

            {/* Email */}
            <a
              href="mailto:shashikantuikey18@gmail.com"
              className="flex items-center gap-4 text-lg hover:text-teal-600 transition"
            >
              <FaEnvelope className="text-2xl" />
              shashikantuikey18@gmail.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shashikant0187"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg hover:text-teal-600 transition"
            >
              <FaGithub className="text-2xl" />
              github.com/Shashikant0187
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shashikant-uikey-b866463b4/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg hover:text-teal-600 transition"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
              linkedin.com/in/shashikant-uikey
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="mailto:shashikantuikey18@gmail.com"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Send Email
            </a>

            <a
              href="/Shashikant_Uikey_Resume.pdf"
              download
              className="inline-block border-2 border-slate-900 px-7 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t mt-20 pt-8 text-center text-gray-500 text-sm">
        © 2026 Shashikant Uikey. Built with React & Tailwind CSS.
      </div>
    </motion.section>
  );
}

export default Contact;
