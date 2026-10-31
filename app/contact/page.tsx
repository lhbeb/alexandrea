import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle, ShoppingBag } from 'lucide-react'

export const metadata = {
    title: 'Contact Alexandrea Roach',
    description: 'Contact visual artist Alexandrea Roach about artwork, editions, or your order.',
}

const creatorUrl = 'mailto:infos@alexandrearoach.art'
const contactEmail = 'infos@alexandrearoach.art'

export default function ContactPage() {
    return <main className="min-h-screen">
        <section className="border-b border-[var(--line)] bg-[var(--paper-bright)]"><div className="mx-auto max-w-5xl px-6 py-16 sm:py-20"><h1 className="max-w-3xl font-display text-3xl font-semibold leading-snug sm:text-4xl">Contact Alexandrea Roach</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted-text)]">For artwork questions, edition details, or a note about the studio, email Alexandrea directly.</p></div></section>
        <section className="mx-auto grid max-w-5xl gap-5 px-6 py-14 sm:grid-cols-2 sm:py-20">
            <a href={`mailto:${contactEmail}`} className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><Mail size={22} className="mb-5 text-[var(--cobalt)]" /><h2 className="break-all font-display text-xl font-semibold group-hover:text-[var(--cobalt)]">{contactEmail}</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">For questions about artworks, prints, or orders.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Send an email <ArrowUpRight size={15} /></span></a>
            <a href={creatorUrl} className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><MessageCircle size={22} className="mb-5 text-[var(--cobalt)]" /><h2 className="font-display text-xl font-semibold group-hover:text-[var(--cobalt)]">Write to the studio</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">Send a direct note about a work, commission, or order.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Open email <ArrowUpRight size={15} /></span></a>
            <a href="/collections" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--coral)]"><ShoppingBag size={22} className="mb-5 text-[var(--coral)]" /><h2 className="font-display text-xl font-semibold group-hover:text-[var(--coral)]">Visit the shop</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">See current paintings, prints, and available work.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Browse artworks <ArrowUpRight size={15} /></span></a>
        </section>
        <div className="mx-auto max-w-5xl px-6 pb-16"><Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cobalt)] hover:underline">Meet Alexandrea Roach <ArrowUpRight size={15} /></Link></div>
    </main>
}


