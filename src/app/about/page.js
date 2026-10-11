'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              About Smile Photography
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/2nd page image.png"
                  alt="Smile Photography studio"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Smile Photography is a photography studio based in Nanded, Maharashtra, focused on capturing
                important personal and family moments through photography and cinematic visuals.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                From weddings and pre-weddings to family events, portraits, and more, we aim to deliver
                beautiful photographs that you can cherish forever. Every click is an opportunity to tell
                a unique story.
              </p>
              <Link href="/booking" className="btn-primary">
                Book a Session
              </Link>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Choose Smile Photography?
            </h3>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We are committed to delivering exceptional photography services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Professional photography',
              'Creative visual storytelling',
              'Personalized sessions',
              'High-quality image delivery',
              'Wedding and event coverage',
              'Studio photography',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-6 border border-white/5"
              >
                <p className="text-white font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
