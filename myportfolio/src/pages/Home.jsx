import React, { useState } from "react"
import Header from "@/components/Header"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home({ setPage, current }) {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Header current={current} setPage={setPage} />

      {/* Hero Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Section */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Building digital{" "}
              <span className="text-black">products</span>,{" "}
              <span className="text-black">brands</span> &{" "}
              <span className="text-violet-600">experience.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-xl leading-relaxed"
            >
              a <span className="font-semibold text-gray-900">Student Programmer</span> and{" "}
              <span className="font-semibold text-gray-900">Junior Developer</span> I specialized myself in python, im open to progressively learn
              more about coding and programming, i made websites using HTML and JavaScripts in my free time.  
              
            </motion.p>

            {/* Email form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `mailto:youremail@example.com?subject=Contact&body=Hi! My email is ${email}`
              }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <Button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all"
              >
                Connect With Me
              </Button>
            </motion.form>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="object-cover w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
