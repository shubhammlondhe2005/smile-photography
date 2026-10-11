'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'
import { site } from '../data/site'

export default function SocialSection() {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Follow Our Journey</span>
          <h2 className="section-title">
            Follow Our Stories
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Stay connected with us on social media for the latest work and updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-8">
              <Instagram size={48} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold">Instagram</h3>
                <p className="text-muted">@smile_photography_nanded</p>
              </div>
              <span className="text-accent font-semibold group-hover:underline">Follow on Instagram</span>
            </div>
          </motion.a>

          <motion.a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-orange-900/40" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-8">
              <Youtube size={48} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold">YouTube</h3>
                <p className="text-muted">SL Photography 05</p>
              </div>
              <span className="text-accent font-semibold group-hover:underline">Watch on YouTube</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
