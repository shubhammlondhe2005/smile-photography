'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gallery } from '../data/gallery'
import Lightbox from './Lightbox'

const categories = ['All', 'Baby', 'Portrait', 'Pre-Wedding', 'Maternity', 'Haldi Event', 'Passport']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'All'
    ? gallery
    : gallery.filter((img) => {
        if (selectedCategory === 'Weddings') return img.category === 'Wedding'
        if (selectedCategory === 'Pre-Wedding') return img.category === 'Pre-Wedding'
        if (selectedCategory === 'Portraits') return ['Portrait', 'Maternity'].includes(img.category)
        if (selectedCategory === 'Events') return img.category === 'Event'
        if (selectedCategory === 'Baby') return img.category === 'Baby'
        if (selectedCategory === 'Maternity') return img.category === 'Maternity'
        if (selectedCategory === 'Haldi Event') return img.category === 'Haldi Event'
        if (selectedCategory === 'Passport') return img.category === 'Passport'
        return false
      })

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            A Few Stories We&apos;ve Captured
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-primary'
                  : 'bg-white/5 text-muted hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-serif text-lg">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
          onNext={() => setCurrentImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
        />
      )}
    </section>
  )
}
