import Link from 'next/link'
import ArtworkGallery from '@/components/ArtworkGallery'
import ArtistIntroSection from '@/components/ArtistIntroSection'
import HeroSection from '@/components/HeroSection'
import PrintShopSection from '@/components/PrintShopSection'
import SupportSection from '@/components/SupportSection'
import { artistCopy } from '@/lib/erin-content'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ArtistIntroSection />
      <section className="practice-section"><div><p className="eyebrow">A contemporary landscape practice</p><h2>Color first. Detail where it matters.</h2></div><div className="practice-copy"><p>{artistCopy.openImpressionism}</p><Link className="text-link" href="/about">Read about Open Impressionism <span aria-hidden="true">↗</span></Link></div></section>
      <ArtworkGallery />
      <PrintShopSection />
      <section className="shop-callout"><p className="eyebrow">Collect the work</p><h2>Find originals, prints and books from the studio.</h2><Link className="button button-dark" href="/collections">Visit the shop</Link></section>
      <SupportSection />
    </main>
  )
}
