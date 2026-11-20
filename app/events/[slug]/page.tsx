import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import { formatEventDate, getDateParts, isUpcoming } from "@/lib/format";
import { getEvent, getAllEvents, getUpcomingEvents } from "@/lib/api";

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.summary,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: `${event.title} | Kigali Safety Academy`,
      description: event.summary,
      url: `/events/${event.slug}`,
      images: [{ url: event.image, alt: event.title }],
    },
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  const date = getDateParts(event.startDate);
  const eventIsUpcoming = isUpcoming(event.startDate);
  const otherEvents = (await getUpcomingEvents()).filter((item) => item.slug !== event.slug).slice(0, 3);

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: `${event.startDate}T${event.startTime}:00+02:00`,
    endDate: `${event.endDate ?? event.startDate}T${event.endTime}:00+02:00`,
    eventAttendanceMode:
      event.format === "Online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.format === "Hybrid"
          ? "https://schema.org/MixedEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
    location:
      event.format === "Online"
        ? { "@type": "VirtualLocation", url: "https://kigalisafetyacademy.rw/events" }
        : { "@type": "Place", name: event.location, address: "Kigali, Rwanda" },
    organizer: { "@type": "Organization", name: "Kigali Safety Academy" },
    offers: event.registrationOpen
      ? { "@type": "Offer", price: event.price === "Free" ? "0" : event.price.replace(/[^\d]/g, ""), priceCurrency: "RWF", availability: "https://schema.org/InStock" }
      : undefined,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <section className="event-detail-hero">
        <div className="site-container event-detail-hero-inner">
          <div className="event-detail-date">
            <strong>{date.day}</strong>
            <span>{date.month}</span>
            <small>{date.weekday}</small>
          </div>
          <div className="event-detail-copy">
            <div className="event-detail-kicker">
              <span className={`pill pill-format-${event.format.toLowerCase().replace(/\s/g, "-")}`}>{event.format}</span>
              <span>{event.focus}</span>
            </div>
            <h1>{event.title}</h1>
            <p>{event.summary}</p>
            <div className="detail-hero-actions">
              {event.registrationOpen && eventIsUpcoming ? (
                <Link className="button button-orange" href="#register">Register your place</Link>
              ) : (
                <span className="pill pill-closed">Registration closed</span>
              )}
              <Link className="button button-outline-light" href="/events">All events</Link>
            </div>
          </div>
          <div className="event-detail-media">
            <img src={event.image} alt={`${event.title} training session`} width="440" height="300" />
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: event.title }]} />

      <section className="site-container page-section detail-layout">
        <div className="detail-main">
          <section aria-labelledby="event-about">
            <h2 id="event-about">About this event</h2>
            <p>{event.description}</p>
            <p>
              {event.format === "Online"
                ? "Join from anywhere with a stable internet connection. A joining link and simple preparation notes are shared after registration."
                : "The session takes place at the location shown. Please arrive a few minutes early for check-in and the safety briefing."}
            </p>
          </section>

          <section aria-labelledby="event-highlights">
            <h2 id="event-highlights">What you will take away</h2>
            <ul className="check-list">
              {event.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </section>

          <section aria-labelledby="event-agenda">
            <h2 id="event-agenda">Session outline</h2>
            <ol className="agenda-list">
              {event.agenda.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section className="info-note" aria-labelledby="event-practical">
            <h2 id="event-practical">Practical information</h2>
            <p>
              {event.format === "Online"
                ? "You will need a quiet space, a stable connection, and a notebook. The session includes time for questions."
                : "Wear closed shoes and comfortable clothing suitable for practical activity. Water and materials are provided; please tell us about any access needs in the registration form."}
            </p>
            <p>Places are confirmed by the academy team. If you can no longer attend, please let us know as early as possible so the place can be offered to someone else.</p>
          </section>
        </div>

        <aside className="detail-sidebar" aria-label="Event details">
          <div className="sidebar-card">
            <h2>Event details</h2>
            <dl className="fact-list">
              <div><dt>Date</dt><dd>{formatEventDate(event)}</dd></div>
              <div><dt>Time</dt><dd>{event.startTime}–{event.endTime}</dd></div>
              <div><dt>Timezone</dt><dd>{event.timezone}</dd></div>
              <div><dt>Format</dt><dd>{event.format}</dd></div>
              <div><dt>Location</dt><dd>{event.location}</dd></div>
              <div><dt>Price</dt><dd>{event.price}</dd></div>
              {typeof event.seatsRemaining === "number" ? <div><dt>Places left</dt><dd>{event.seatsRemaining} of {event.seats}</dd></div> : null}
            </dl>
            {event.registrationOpen && eventIsUpcoming ? (
              <Link className="form-submit sidebar-cta" href="#register">Register for this event</Link>
            ) : (
              <p className="sidebar-note is-strong">Registration is closed for this event.</p>
            )}
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Questions about the event?</h2>
            <p>Contact the academy team for help with registration, access needs, or group bookings.</p>
            <Link className="text-link" href="/contact">Contact us <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>

      {event.registrationOpen && eventIsUpcoming ? (
        <section className="band-soft" id="register" aria-labelledby="register-title">
          <div className="site-container registration-layout">
            <div className="registration-copy">
              <span className="eyebrow">SAVE YOUR PLACE</span>
              <h2 id="register-title">Register for {event.title}</h2>
              <p>Complete the form and the academy team will confirm your place. For group bookings or access requirements, you can also contact us directly.</p>
              <ul className="contact-mini-list">
                <li><strong>Date:</strong> {formatEventDate(event)}</li>
                <li><strong>Time:</strong> {event.startTime}–{event.endTime} {event.timezone}</li>
                <li><strong>Format:</strong> {event.format}</li>
                <li><strong>Price:</strong> {event.price}</li>
              </ul>
            </div>
            <EventRegistrationForm slug={event.slug} title={event.title} />
          </div>
        </section>
      ) : null}

      {otherEvents.length ? (
        <section className="site-container page-section page-section-tight" aria-labelledby="other-events">
          <div className="section-head">
            <div>
              <span className="eyebrow">ALSO COMING UP</span>
              <h2 id="other-events">More training events</h2>
            </div>
            <Link className="outline-button" href="/events">All events</Link>
          </div>
          <div className="event-list three-up">
            {otherEvents.map((item) => (
              <article className="mini-event" key={item.slug}>
                <span>{formatEventDate(item)}</span>
                <h3><Link href={`/events/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.format} · {item.price}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
