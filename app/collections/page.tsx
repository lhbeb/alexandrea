import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { publishedArtworks } from '@/lib/erin-content'

export default function CollectionsPage() {
  return <main className="archive-page"><header className="page-intro"><p className="eyebrow">Artwork archive</p><h1>Published work by Alexandrea Roach.</h1><p>Explore selected paintings from the Open Impressionism archive. Each image is available to download for personal reference.</p></header><section className="archive-grid" aria-label="Published artworks">{publishedArtworks.map((artwork) => <article id={artwork.slug} className="archive-card" key={artwork.slug}><div className="archive-image"><Image src={artwork.image} alt={artwork.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><p className="eyebrow">{artwork.subject}</p><h2>{artwork.title}</h2><p>{artwork.description}</p><a className="text-link" href={artwork.image} download><Download size={16} aria-hidden="true" /> Download image</a></article>)}</section><section className="archive-footer"><h2>Looking for the original?</h2><p>For current availability, prints, books and studio questions, contact Alexandrea Roach’s studio.</p><Link className="button button-dark" href="/contact">Contact the studio</Link></section></main>
}
