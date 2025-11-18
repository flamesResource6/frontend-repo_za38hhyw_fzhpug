import React from 'react'
import { BarChart3, Rocket, Megaphone, ShoppingCart, LineChart, Wrench } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Marketplace Launch',
    desc: 'End-to-end onboarding on Amazon, Flipkart, Myntra and more — catalog, GST/brand registry, storefronts.'
  },
  {
    icon: Megaphone,
    title: 'Advertising & Promotions',
    desc: 'Full-funnel PPC and deal strategy: Sponsored Ads, coupons, Lightning Deals, festive playbooks.'
  },
  {
    icon: ShoppingCart,
    title: 'Catalog & Listing Optimization',
    desc: 'SEO-rich titles, A+ content, image/video creatives, variation strategy, keyword indexing.'
  },
  {
    icon: BarChart3,
    title: 'Operations & Compliance',
    desc: 'FBA/Smart Fulfillment, returns/SLA management, pricing/fees, account health and policy compliance.'
  },
  {
    icon: LineChart,
    title: 'Analytics & Growth',
    desc: 'Dashboards and cohort insights to drive CRR, ROAS, and contribution margin — weekly growth sprints.'
  },
  {
    icon: Wrench,
    title: 'Storefront & Brand Building',
    desc: 'Brand Stores, storefront UX, storefront analytics, reviews/ratings program and CRM workflows.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">Practical, revenue-focused marketplace operations to launch, scale, and sustain growth.</p>
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
