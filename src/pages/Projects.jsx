import React, { useState } from "react"
import Header from "@/components/Header"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects({ setPage, current }) {
  const [active, setActive] = useState(null)

  const toggleProject = (index) => {
    setActive(active === index ? null : index)
  }

  const projects = [
    {
      title: "HTML Project with Music and Lyrics",
      desc: "HTML base website with css and html",
      img: "/images/project_1.png",
      live: "https://marc-takoyaki.github.io/marc-cherrywine/",
      source: "https://github.com/marc-takoyaki/marc-cherrywine.git",
    },
    {
      title: "HTML Portfolio Website",
      desc: "HTML website about the compilations of my works",
      img: "/images/html_website.png",
      live: "https://marc-takoyaki.github.io/itecmidterms/about.html",
      source: "https://github.com/marc-takoyaki/compilation.git",
    },
    {
      title: "HTML Coffee Shop Website",
      desc: "HTML and CSS website for a coffee shop.",
      img: "/images/html_website_coffeeshop.png",
      live: "https://marc-takoyaki.github.io/marc-coffeemenu/",
      source: "https://github.com/marc-takoyaki/marc-coffeemenu.git",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header current={current} setPage={setPage} />

      <main className="flex-grow max-w-6xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          My <span className="text-violet-600">Works</span>
        </h2>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-gray-200 bg-white rounded-xl shadow">
              {/* Project Title */}
              <button
                onClick={() => toggleProject(i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
                <span className="text-violet-600 font-bold text-2xl">
                  {active === i ? "-" : "+"}
                </span>
              </button>

              {/* Expand Panel */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6"
                  >
                    <div className="max-h-80 overflow-y-auto rounded-lg">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full rounded-lg border"
                      />
                    </div>

                    <div className="flex gap-3 mt-4">
                      <a
                        href={p.live}
                        target="_blank"
                        className="px-4 py-2 rounded-lg bg-violet-500 text-white font-medium hover:bg-violet-600"
                      >
                        Visit Website
                      </a>
                      <a
                        href={p.source}
                        target="_blank"
                        className="px-4 py-2 rounded-lg border border-violet-500 text-violet-600 font-medium hover:bg-violet-50"
                      >
                        Source Code
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
