import { site } from '../data/site'

export default function MapSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">
            Find Us in Nanded
          </h2>
        </div>

        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/5">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Smile Photography Location Map"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
