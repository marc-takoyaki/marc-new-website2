import React, { useState } from "react"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      {page === "home" && <Home setPage={setPage} current={page} />}
      {page === "projects" && <Projects setPage={setPage} current={page} />}
      {page === "about" && <About setPage={setPage} current={page} />}
      {page === "contact" && <Contact setPage={setPage} current={page} />}

      {/* Back Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => (window.location.href = "../index.html")}
          className="px-4 py-2 mt-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300"
        >
          ← Back to Landing Page
        </button>
      </div>
    </>
  )
}
