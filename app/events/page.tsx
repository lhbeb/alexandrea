import Link from 'next/link'

type Event = {
  title: string
  date: string
  location: string
  type: string
  description: string
}

const events: Event[] = [
  {
    title: 'Cruise the Rhine with Alexandrea Roach',
    date: 'Tuesday, October 13th, 2026',
    location: 'The Netherlands',
    type: 'Travel and exhibition',
    description: 'Join Alexandrea Roach in the Netherlands and follow in Van Gogh’s footsteps during a cruise down the Rhine.',
  },
  {
    title: 'The Four Seasons Las Vegas Presents: Alexandrea Roach',
    date: 'April 16th to October 27th, 2026',
    location: 'The Four Seasons Las Vegas, 3960 S Las Vegas Blvd, Las Vegas, NV 89119',
    type: 'Exhibition',
    description: 'Explore the Four Seasons Las Vegas and discover Alexandrea Roach’s paintings celebrating national parks across the United States.',
  },
  {
    title: 'Alexandrea Roach’s Open Impressionism Workshop',
    date: 'November 2nd to November 5th, 2026',
    location: 'The Alexandrea Roach Gallery',
    type: 'Workshop',
    description: 'A four-day, in-person workshop for artists who want to study the techniques and ideas behind Open Impressionism.',
  },
  {
    title: 'La Quinta Art Celebration: Encore',
    date: 'November 12th to November 15th, 2026',
    location: 'La Quinta, California',
    type: 'Art fair',
    description: 'Meet Alexandrea in person and see a selection of work at the La Quinta Art Celebration Encore event.',
  },
  {
    title: 'Alexandrea Roach: The Gold Leaf Show',
    date: 'Saturday, November 21st, 2026',
    location: 'The Alexandrea Roach Gallery, McMinnville, Oregon',
    type: 'Opening exhibition',
    description: 'Celebrate the release of a new show featuring original paintings made with luminous gold leaf.',
  },
  {
    title: '20th Anniversary of Open Impressionism',
    date: 'Saturday, December 12th, 2026',
    location: 'The Alexandrea Roach Gallery, McMinnville, Oregon',
    type: 'Special exhibition',
    description: 'A one-day exhibition celebrating twenty years of the Open Impressionism movement and its evolving landscape vocabulary.',
  },
  {
    title: 'La Quinta Art Celebration: Spring 2027',
    date: 'March 4th to March 7th, 2027',
    location: 'La Quinta, California',
    type: 'Art fair',
    description: 'See Alexandrea’s work and meet the artist at the spring edition of the La Quinta Art Celebration.',
  },
]

export default function EventsPage() {
  return (
    <main className="events-page">
      <section className="page-intro events-intro">
        <p className="eyebrow">Exhibitions, workshops and studio gatherings</p>
        <h1>Events</h1>
        <p>Meet Alexandrea Roach through exhibitions, workshops and art fairs. This is where new paintings leave the studio and enter the world.</p>
      </section>

      <section className="events-list" aria-labelledby="upcoming-events-title">
        <div className="events-list-heading">
          <div>
            <p className="eyebrow">The calendar</p>
            <h2 id="upcoming-events-title">Upcoming events</h2>
          </div>
          <p className="events-note">Dates and locations are subject to change. Contact the studio for the latest details about an exhibition or workshop.</p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <article className="event-card" key={`${event.title}-${event.date}`}>
              <div className="event-card-top">
                <span className="event-number">{String(index + 1).padStart(2, '0')}</span>
                <span>{event.type}</span>
              </div>
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
              <Link className="text-link" href="/contact">Ask about this event <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="events-cta">
        <div>
          <p className="eyebrow">Stay close to the work</p>
          <h2>Get new exhibition dates and studio news in your inbox.</h2>
        </div>
        <Link className="button button-dark" href="/contact">Contact the studio</Link>
      </section>
    </main>
  )
}
