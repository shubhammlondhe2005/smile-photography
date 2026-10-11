'use client'

import { site } from '../data/site'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello Smile Photography, I would like to know more about your photography services.')
  const url = `https://wa.me/${site.whatsapp}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  )
}
