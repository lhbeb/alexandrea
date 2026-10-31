import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://alexandrearoach.art'),
  title: 'Alexandrea Roach | Contemporary Landscape Artist',
  description: 'Explore contemporary landscape paintings by Alexandrea Roach, creator of Open Impressionism, alongside published work and studio notes.',
  keywords: 'Alexandrea Roach, contemporary landscape artist, Open Impressionism, landscape paintings, art prints',
  alternates: { canonical: '/' },
  icons: { icon: '/logo56.svg', shortcut: '/logo56.svg', apple: '/logo56.svg' },
  openGraph: { title: 'Alexandrea Roach | Contemporary Landscape Artist', description: 'Contemporary landscape paintings and Open Impressionism by Alexandrea Roach.', url: '/', siteName: 'Alexandrea Roach', type: 'website' },
  twitter: { card: 'summary', title: 'Alexandrea Roach | Contemporary Landscape Artist', description: 'Contemporary landscape paintings and Open Impressionism by Alexandrea Roach.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>
}
