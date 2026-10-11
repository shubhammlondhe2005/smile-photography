import { site } from '../data/site'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Create Something Beautiful.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-secondary/50 rounded-2xl p-6 border border-white/5">
              <h3 className="font-serif text-2xl font-bold mb-6">Smile Photography</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone / WhatsApp</p>
                    <a href={`tel:${site.phone}`} className="text-white font-semibold hover:text-accent transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a href={`mailto:${site.email}`} className="text-white font-semibold hover:text-accent transition-colors break-all">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Our Location</p>
                    <p className="text-white">{site.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`tel:${site.phone}`} className="btn-primary">
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello Smile Photography, I would like to know more about your photography services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/5">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smile Photography Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
