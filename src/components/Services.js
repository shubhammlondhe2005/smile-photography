'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Photography For Every
            <span className="text-accent"> Beautiful Moment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-primary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {service.video ? (
                  <video
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              </div>
              <div className="p-6 relative -mt-20">
                <h3 className="font-serif text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <Link href="/services" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  View More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
