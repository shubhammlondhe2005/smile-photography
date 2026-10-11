'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { gallery } from '../../data/gallery'
import Lightbox from '../../components/Lightbox'

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Portrait', 'Event', 'Baby', 'Maternity']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'All' ? gallery : gallery.filter((img) => img.category === selectedCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="pt-20">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Our Gallery
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A collection of our favorite moments captured through the lens.
            </p>
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-serif text-lg">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
          onNext={() => setCurrentImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
        />
      )}
    </div>
  )
}
