import Image from 'next/image'

export default function PrintShopSection() {
    return (
        <section className="print-shop-section">
            <div>
                <p className="eyebrow">Printable paintings</p>
                <h2>Bring a painting into your space.</h2>
                <p>Browse printable paintings in the Buy Me a Coffee shop. Each purchase helps support new work, studio time, and the next painting.</p>
            </div>
            <a href="https://buymeacoffee.com/alexandrearoach/extras" target="_blank" rel="noopener noreferrer" className="bmc-button print-shop-bmc" aria-label="Browse printable paintings on Buy Me a Coffee">
                <Image src="/buymeacoffeelogo2.png" alt="Buy Me a Coffee" width={1090} height={306} className="bmc-button-image" />
            </a>
        </section>
    )
}
