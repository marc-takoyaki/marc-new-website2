import React from "react"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa"

export default function Contact({ setPage, current }) {
  const contacts = [
    {
      name: "Google",
      icon: <FaGoogle className="text-red-500 text-3xl" />,
      link: "mailto:yourname@gmail.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      link: "https://facebook.com/yourprofile",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      link: "https://instagram.com/yourprofile",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header current={current} setPage={setPage} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Get in <span className="text-violet-600">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 max-w-xl mb-10"
        >
          Feel free to reach out through any of the platforms below. I’d love to connect
          and collaborate with you!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-2xl px-8 py-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
            >
              {c.icon}
              <span className="mt-3 text-lg font-semibold text-gray-800">
                {c.name}
              </span>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  )
}
