import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header({ current, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const tabs = [
    { label: "About", page: "about" },
    { label: "Works", page: "projects" },
    { label: "Contact", page: "contact" },
  ]

  return (
    <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage("about")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-sm font-semibold text-gray-800">Marc</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {tabs.map((t) => (
            <button
              key={t.page}
              onMouseEnter={() => setPage(t.page)}
              onClick={() => setPage(t.page)}
              className={`relative text-sm font-medium transition-colors ${
                current === t.page
                  ? "text-violet-600"
                  : "text-gray-600 hover:text-violet-600"
              }`}
            >
              {t.label}
              {current === t.page && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 h-0.5 bg-violet-400 bottom-[-10px] rounded"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Connect button (desktop only) */}
          <Button
            variant="ghost"
            className="hidden sm:inline-flex text-violet-600 border border-violet-200"
            onClick={() => setPage("contact")}
          >
            Connect
          </Button>

          {/* Socials (desktop) */}
          <div className="hidden sm:flex gap-3 ml-2">
            {/* Gmail */}
            <a
              href="mailto:marcthis7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
              className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs hover:bg-red-200 transition"
            >
              G
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/bandai456"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs hover:bg-blue-200 transition"
            >
              F
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/@zeezmarc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs hover:bg-pink-200 transition"
            >
              I
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden ml-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {tabs.map((t) => (
                <button
                  key={t.page}
                  onClick={() => {
                    setPage(t.page)
                    setMenuOpen(false)
                  }}
                  className={`text-left text-base font-medium ${
                    current === t.page
                      ? "text-violet-600"
                      : "text-gray-700 hover:text-violet-600"
                  }`}
                >
                  {t.label}
                </button>
              ))}

              <Button
                onClick={() => {
                  setPage("contact")
                  setMenuOpen(false)
                }}
                className="bg-violet-600 hover:bg-violet-700 text-white w-full mt-2"
              >
                Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
