import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 sm:p-16 shadow-inner">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Ready to grow your marketplace sales?</h3>
          <p className="mt-4 text-white/70">Tell us about your catalog and current channels. We’ll share a quick audit and a growth plan.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:contact@swcybernetics.in" className="inline-flex items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
              Email us
            </a>
            <a href="#" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90">
              Download company profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
