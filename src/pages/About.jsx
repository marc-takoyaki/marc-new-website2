import React from "react"
import Header from "@/components/Header"
import { motion } from "framer-motion"

export default function About({ setPage, current }) {
  const skills = [
    "Frontend Development",
    "Responsive Web Design",
    "PHP + MySQL",
    "Figma & Prototyping",
  ]

  
  const languages = ["Java", "Python", "PHP", "JavaScript", "MySQL"]

  const experiences = [
    {
      role: "3rd Year CS Student & Web Developer Intern",
      desc: "Developed and maintained full-stack web applications using React, PHP, and MySQL. Focused on creating responsive layouts, improving backend data handling, and optimizing UI performance.",
    },
    {
      role: "Frontend & UI/UX Amateur/CS Student",
      desc: "Worked closely with developers and designers to prototype and design responsive interfaces in Figma. Implemented front-end components with HTML, CSS, and React, ensuring smooth and interactive user experiences.",
    },
    {
      role: "CS Student / Web Project Developer",
      desc: "Completed academic projects focused on PHP, MySQL, and responsive web design. Learned system design, database structuring, and user-centered development through hands-on practice and collaboration.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header current={current} setPage={setPage} />

      {/* About Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-violet-600">Me</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hello! I’m <span className="font-semibold">Marc</span>, a passionate developer and designer
              who enjoys turning complex ideas into elegant and efficient digital experiences.
              My work blends creativity and functionality, ensuring that every project feels
              human-centered and purposeful.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I’m not coding, you’ll find me exploring design trends, refining UI animations,
              or learning new technologies to improve my craft.
            </p>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white w-full max-w-sm">
              <img
                src="/images/profile.jpg"
                alt="Marc portrait"
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => (window.location.href = "../index.html")}
              />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 text-center mb-10"
          >
            Skills & Technologies
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white text-gray-800 border border-gray-100 rounded-xl shadow-sm hover:shadow-md p-4 text-center font-medium transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        
        <section className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 text-center mb-10"
          >
            Offered Skills
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-violet-50 text-violet-700 border border-violet-100 rounded-xl shadow-sm hover:shadow-md p-4 text-center font-medium transition"
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 text-center mb-12"
          >
            Experience Timeline
          </motion.h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-violet-100 rounded-full" />

            <div className="space-y-10 pl-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[0.65rem] w-4 h-4 bg-violet-500 rounded-full border-4 border-white shadow" />
                  <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
                  <p className="text-gray-600 mt-2">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
