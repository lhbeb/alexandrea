import Image from 'next/image'
import Link from 'next/link'
import { artistCopy } from '@/lib/erin-content'

export default function AboutPage() {
  return <main className="about-page"><section className="about-hero"><div><p className="eyebrow">About the artist</p><h1>{artistCopy.name}</h1><p className="about-lede">{artistCopy.about}</p></div><div className="about-image"><Image src="/erin-hanson/artist-at-work.jpg" alt="Alexandrea Roach painting in her studio" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section><section className="about-grid"><div><p className="eyebrow">The method</p><h2>Open Impressionism</h2></div><div><p>{artistCopy.openImpressionism}</p><p>Rather than building a scene through endless layers, Alexandrea works with intention and lets the physical brushwork stay visible. The result is contemporary landscape painting that feels immediate, spacious and rooted in a real place.</p><Link className="text-link" href="/collections">Browse the artwork archive <span aria-hidden="true">↗</span></Link></div></section></main>
}
