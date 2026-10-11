'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="section-label">Welcome to Smile Photography</span>
          <h2 className="section-title">
            Every Moment Deserves
            <br />
            To Be Remembered.
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            At Smile Photography, we believe every smile tells a story. Based in Nanded, Maharashtra,
            we specialize in capturing your most precious moments through professional photography
            and cinematic visual storytelling. From weddings to birthdays, we turn fleeting moments
            into timeless memories.
          </p>
          <Link href="/about" className="btn-primary">
            Discover Our Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/2nd page image.png"
              alt="Photographer at work"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
