import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import EventCard from "@/components/EventCard";
import EventsExplorer from "@/components/EventsExplorer";
import SectionHead from "@/components/SectionHead";
import { getPastEvents, getUpcomingEvents } from "@/lib/api";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Join Kigali Safety Academy webinars, workshops, and practical drills on first aid, fire safety, construction safety, rigging, and workplace safety.",
  alternates: { canonical: "/events" },
};

export default async function EventsPage() {
  const [upcoming, past] = await Promise.all([getUpcomingEvents(), getPastEvents()]);

  return (
    <main>
      <PageHero
        eyebrow="EVENTS & WORKSHOPS"
        title="Upcoming training events"
        intro="Join a webinar, practice a skill, or bring your team to a workshop. Events are updated regularly, and practical sessions have limited places."
        actions={
          <>
            <Link className="button button-orange" href="#upcoming-events">See upcoming events</Link>
            <Link className="button button-blue" href="/contact">Ask about group dates</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            <li><strong>{upcoming.length}</strong><span>Upcoming events</span></li>
            <li><strong>{upcoming.filter((event) => event.format !== "Online").length}</strong><span>In-person sessions</span></li>
            <li><strong>Free</strong><span>Selected webinars</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Events" }]} />

      <section className="site-container page-section" id="upcoming-events" aria-labelledby="upcoming-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">UPCOMING</span>
            <h2 id="upcoming-title">Choose your next session</h2>
            <p>Filter by format or search by topic, place, or event name.</p>
          </div>
        </div>
        {upcoming.length ? <EventsExplorer events={upcoming} /> : (
          <div className="empty-state">
            <h3>No events are scheduled right now</h3>
            <p>New dates are added throughout the year. Contact us to ask about the next session.</p>
            <Link className="button-inline" href="/contact">Ask about upcoming dates</Link>
          </div>
        )}
      </section>

      <section className="band-soft" id="past" aria-labelledby="past-title">
        <div className="site-container page-section">
          <SectionHead
            eyebrow="PAST EVENTS"
            title="Recent sessions"
            intro="A record of recent workshops and clinics. Resources from some sessions are available in the safety library."
            id="past-title"
            action={<Link className="outline-button" href="/resources">Safety resources</Link>}
          />
          {past.length ? (
            <div className="event-list">
              {past.map((event) => <EventCard key={event.slug} event={event} />)}
            </div>
          ) : (
            <div className="empty-state"><h3>No past events yet</h3><p>Upcoming events will appear here after they take place.</p></div>
          )}
        </div>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Host a training event for your team</h2>
          <p>We can organize practical sessions at your site or at the academy training room.</p>
        </div>
        <Link className="button button-orange" href="/business">Plan a team session</Link>
      </section>
    </main>
  );
}
