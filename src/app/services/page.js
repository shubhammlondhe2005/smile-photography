'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { services } from '../../data/services'
import { site } from '../../data/site'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Photography For Every Special Moment
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Explore our photography services designed to capture the moments that matter most.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted text-lg mb-6">{service.description}</p>
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">What the session includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="text-muted flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Smile Photography, I would like to discuss ${service.title} services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Discuss Your Requirements
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
