import React from 'react'

const logos = ['AWS', 'Azure', 'GCP', 'Cisco', 'Fortinet', 'CrowdStrike']

export default function Showcase() {
  return (
    <section aria-label="Partners" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {logos.map((name) => (
              <div key={name} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 text-sm font-medium text-white/80">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
