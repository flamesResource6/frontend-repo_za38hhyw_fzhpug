import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <CTA />
        <footer className="border-t border-white/10 py-8 text-center text-white/60">
          © {new Date().getFullYear()} SW Cybernetics. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
