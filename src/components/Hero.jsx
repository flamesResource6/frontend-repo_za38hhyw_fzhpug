import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-40 pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Marketplace growth agency
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            E‑commerce marketplace growth, done right
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            We launch, optimize, and scale brands across Amazon, Flipkart, Myntra, Meesho, Nykaa, and more — from listings and ads to operations and analytics.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
              Explore services
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
