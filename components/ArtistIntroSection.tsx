import Image from 'next/image'
import Link from 'next/link'

export default function ArtistIntroSection() {
  return (
    <section className="artist-intro-section">
      <div className="artist-intro-image">
        <Image
          src="/erin-hanson/artist-at-work.jpg"
          alt="Alexandrea Roach painting in her studio"
          width={878}
          height={1216}
          sizes="(max-width: 800px) 100vw, 42vw"
        />
      </div>
      <div>
        <p className="eyebrow">The artist</p>
        <h2>Painted in the studio, shared with you.</h2>
        <p>Meet Alexandrea Roach, the artist behind these contemporary landscapes and the Open Impressionism practice.</p>
        <Link className="text-link" href="/about">Meet Alexandrea Roach <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
