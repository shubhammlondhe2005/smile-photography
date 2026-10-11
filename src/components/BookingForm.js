'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from '../data/site'
import { bookingWhatsAppMessage, openWhatsApp } from '../lib/whatsapp'
import { Send, MessageCircle, Phone } from 'lucide-react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsApp = () => {
    const msg = bookingWhatsAppMessage(formData)
    openWhatsApp(msg)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="section-label">Booking</span>
        <h2 className="section-title">Let&apos;s Capture Your Story</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Tell us about your special moment and we&apos;ll get back to you soon.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="bg-secondary/50 rounded-3xl p-8 md:p-12 border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Event Type *</label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Pre-Wedding">Pre-Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Baby">Baby</option>
                  <option value="Maternity">Maternity</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Photography Service *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select service</option>
                  <option value="Photography">Photography</option>
                  <option value="Cinematic Video">Cinematic Video</option>
                  <option value="Photography + Video">Photography + Video</option>
                  <option value="Studio Shoot">Studio Shoot</option>
                  <option value="Photo Printing">Photo Printing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Event Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter event location"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-primary flex-1 justify-center">
                <Send size={18} />
                Send Inquiry
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Continue on WhatsApp
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary/50 rounded-3xl p-12 text-center border border-white/5"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-bold mb-4">Thank You!</h3>
            <p className="text-muted text-lg mb-8 max-w-md mx-auto">
              Thank you for contacting Smile Photography. We&apos;ll get back to you soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${site.phone}`} className="btn-primary">
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello Smile Photography, I just submitted a booking inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
