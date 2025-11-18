import React from 'react'
import { Shield, Cloud, Lock, Code, Search, Network } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Security Audits',
    desc: 'End-to-end assessments, threat modeling and remediation plans that harden your stack.'
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Design and migration to scalable, resilient cloud-native infrastructure.'
  },
  {
    icon: Lock,
    title: 'AppSec & DevSecOps',
    desc: 'Secure SDLC pipelines, SAST/DAST integration and policy-as-code.'
  },
  {
    icon: Code,
    title: 'Product Engineering',
    desc: 'Modern web and mobile apps built with performance and accessibility in mind.'
  },
  {
    icon: Search,
    title: 'Vulnerability Research',
    desc: 'Continuous scanning, pentesting and real-time monitoring with clear reporting.'
  },
  {
    icon: Network,
    title: 'Enterprise Networking',
    desc: 'Zero-trust networks, VPN, SSO, identity and access management at scale.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">Practical, well-documented solutions delivered with a minimalist, polished touch.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
