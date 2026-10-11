import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import VisitorCounter from '../components/VisitorCounter'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Smile Photography Nanded | Wedding & Event Photography',
  description: 'Smile Photography Nanded – Professional wedding, pre-wedding, portrait, baby, maternity and event photography in Nanded, Maharashtra.',
  keywords: ['Smile Photography Nanded', 'Photography in Nanded', 'Wedding Photographer Nanded', 'Pre Wedding Photography Nanded', 'Candid Photography Nanded', 'Event Photography Nanded', 'Studio Photography Nanded'],
  authors: [{ name: 'Smile Photography' }],
  openGraph: {
    title: 'Smile Photography Nanded',
    description: 'Professional wedding, pre-wedding, portrait, baby, maternity and event photography in Nanded, Maharashtra.',
    url: 'https://smilephotography.com',
    siteName: 'Smile Photography',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smile Photography Nanded',
    description: 'Professional wedding, pre-wedding, portrait, baby, maternity and event photography in Nanded, Maharashtra.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyStudio',
  name: 'Smile Photography',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '58F6+VX5, Baba Nagar Road, Harsha Nagar, Baba Nagar',
    addressLocality: 'Nanded',
    addressRegion: 'Maharashtra',
    postalCode: '431602',
    addressCountry: 'IN',
  },
  telephone: '+91 86982 59731',
  email: 'slondhe362@gmail.com',
  sameAs: [
    'https://www.instagram.com/smile_photography_nanded',
    'https://youtube.com/@slphotography05',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-primary text-white font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <VisitorCounter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
