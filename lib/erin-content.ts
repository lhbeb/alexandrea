export type PublishedArtwork = {
  slug: string
  title: string
  subject: string
  image: string
  alt: string
  description: string
}

export const artistCopy = {
  name: 'Alexandrea Roach',
  shortIntro: 'Contemporary landscape paintings built from direct color, visible brushwork and the feeling of being outside.',
  openImpressionism: 'Open Impressionism is Alexandrea Roach’s approach to the landscape: bold marks placed side by side, a luminous limited palette and enough open ground for the scene to breathe.',
  about: 'Alexandrea Roach is a contemporary landscape artist and the creator of Open Impressionism. Working primarily in oil, she paints quickly and directly, translating deserts, coastlines, wildflowers and open country into energetic fields of color.',
}

export const publishedArtworks: PublishedArtwork[] = [
  { slug: 'cypress-water', title: 'Cypress Water', subject: 'Coastal landscape', image: '/erin-hanson/cypress-water-alexandrea.webp', alt: 'A vivid coastal painting with cypress trees, mountains and water by Alexandrea Roach', description: 'A bright, textural shoreline where wind-shaped cypress trees meet layered water, mountain air and a sky in constant motion.' },
  { slug: 'open-impressionism', title: 'Open Impressionism', subject: 'Studio study', image: '/erin-hanson/Erin-Hanson-painting-in-Open-Impressionism-style.jpg', alt: 'Alexandrea Roach painting in her studio', description: 'A look at the direct, textural process behind Alexandrea Roach’s signature style.' },
  { slug: 'sunflowers', title: 'Sunflowers', subject: 'Floral landscape', image: '/erin-hanson/sunflowers-impressionism-by-Erin-Hanson.jpg', alt: 'Sunflowers in a colorful contemporary impressionist landscape', description: 'Warm blooms and open atmosphere held together by a restrained, glowing palette.' },
  { slug: 'living-greys', title: 'Living Greys', subject: 'Interior study', image: '/erin-hanson/04-LivingGreysWoodFireplace-August_Pasco.jpg', alt: 'A quiet interior painting with a fireplace by Alexandrea Roach', description: 'A quiet interior translated through soft atmosphere, texture and shifting light.' },
  { slug: 'studio-notes', title: 'Studio Notes', subject: 'Artist at work', image: '/erin-hanson/3D6A9460.jpg', alt: 'Alexandrea Roach working in her studio', description: 'A behind-the-scenes glimpse into the practice behind the finished paintings.' },
  { slug: 'desert-light', title: 'Desert Light', subject: 'Western landscape', image: '/erin-hanson/erin_hanson_saguaro_sunset.jpg', alt: 'A desert sunset painting with saguaro silhouettes by Alexandrea Roach', description: 'Desert forms and late light distilled into broad, saturated passages of paint.' },
  { slug: 'the-path-home', title: 'The Path Home', subject: 'Garden landscape', image: '/erin-hanson/the-path-home.jpg', alt: 'A colorful garden path leading through a flowering landscape by Alexandrea Roach', description: 'A winding garden path disappears into dense, sunlit growth, built from expressive green, coral, blue and rose brushwork.' },
  { slug: 'radiant-sky', title: 'Radiant Sky', subject: 'Mountain landscape', image: '/erin-hanson/radiant-sky.jpg', alt: 'A radiant sky over a warm mountain landscape by Alexandrea Roach', description: 'Light breaks across a wide mountain valley in pale blues, warm ochres and lavender shadows, turning the horizon into an open field of color.' },
  { slug: 'coastal-poppies', title: 'Coastal Poppies', subject: 'Floral landscape', image: '/erin-hanson/coastal-poppies.jpg', alt: 'A coastal field of poppies beneath a pastel sky by Alexandrea Roach', description: 'A coastal meadow of red poppies and yellow flowers opens toward the water beneath a soft, rose-streaked sky.' },
]
