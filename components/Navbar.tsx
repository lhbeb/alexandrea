import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Alexandrea Roach home">
        <Image src="/logo56.svg" alt="Alexandrea Roach" width={213} height={53} priority className="brand-logo" />
      </Link>
      <div className="header-actions">
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/collections">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a
          className="bmc-cup-link"
          href="https://buymeacoffee.com/alexandrearoach"
          target="_blank"
          rel="noreferrer"
          aria-label="Support Alexandrea Roach on Buy Me a Coffee"
        >
          <Image src="/BMC1.png" alt="Buy Me a Coffee" width={64} height={64} className="bmc-cup-icon" />
        </a>
      </div>
    </header>
  )
}
