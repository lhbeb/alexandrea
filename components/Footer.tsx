import Image from 'next/image'
import Link from 'next/link'

export default function Footer() { return <footer className="site-footer"><div><Link className="brand" href="/" aria-label="Alexandrea Roach home"><Image src="/logo56.svg" alt="Alexandrea Roach" width={213} height={53} className="brand-logo" /></Link><p>Contemporary landscape painting and Open Impressionism.</p></div><div className="footer-links"><Link href="/collections">Shop the work</Link><Link href="/about">About Alexandrea</Link><Link href="/events">Events</Link><Link href="/contact">Contact</Link></div><p className="footer-small">© {new Date().getFullYear()} Alexandrea Roach Studio</p></footer> }
