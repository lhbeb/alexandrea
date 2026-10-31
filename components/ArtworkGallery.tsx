import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
import { publishedArtworks } from '@/lib/erin-content'

export default function ArtworkGallery() {
  return (
    <section id="work" className="artwork-gallery">
      <div className="section-heading">
        <div><p className="eyebrow">Published artwork</p><h2>Paintings to spend time with.</h2></div>
        <p className="section-note">Browse a selection of Alexandrea Roach’s published work and download images for personal reference.</p>
      </div>
      <div className="artwork-grid">
        {publishedArtworks.map((artwork) => (
          <article className="artwork-card" key={artwork.slug}>
            <div className="artwork-image"><Image src={artwork.image} alt={artwork.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
            <div className="artwork-meta"><div><p className="eyebrow">{artwork.subject}</p><h3>{artwork.title}</h3><p>{artwork.description}</p></div><div className="artwork-actions"><a className="text-link" href={artwork.image} download><Download size={16} aria-hidden="true" /> Download image</a><Link className="icon-link" href={`/collections#${artwork.slug}`} aria-label={`View ${artwork.title}`}><ArrowUpRight size={20} aria-hidden="true" /></Link></div></div>
          </article>
        ))}
      </div>
    </section>
  )
}
