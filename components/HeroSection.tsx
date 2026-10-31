'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const artworks = [
    { src: '/erin-hanson/Erin_Hanson_Cypress_Water.jpg', alt: 'Cypress Water landscape painting by Alexandrea Roach', position: 'center 45%' },
    { src: '/erin-hanson/sunflowers-impressionism-by-Erin-Hanson.jpg', alt: 'Sunflowers landscape painting by Alexandrea Roach', position: 'center' },
    { src: '/erin-hanson/erin_hanson_saguaro_sunset.jpg', alt: 'Saguaro Sunset landscape painting by Alexandrea Roach', position: 'center' },
]

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (motionQuery.matches) return

        const rotate = window.setInterval(() => {
            setActiveIndex(current => (current + 1) % artworks.length)
        }, 7000)

        return () => window.clearInterval(rotate)
    }, [])

    return (
        <section aria-label="A rotating selection of artworks by Alexandrea Roach" className="artist-hero">
            <div className="artist-hero-slides" aria-live="polite">
                {artworks.map((artwork, index) => <Image key={artwork.src} src={artwork.src} alt={index === activeIndex ? artwork.alt : ''} fill priority={index === 0} sizes="100vw" style={{ objectPosition: artwork.position }} className={`artist-hero-image ${index === activeIndex ? 'is-active' : ''}`} />)}
            </div>
        </section>
    )
}

