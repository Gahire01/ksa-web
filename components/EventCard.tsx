import Link from "next/link";
import { formatEventDate, getDateParts } from "@/lib/format";
import type { EventItem } from "@/lib/types";

export default function EventCard({ event }: { event: EventItem }) {
  const date = getDateParts(event.startDate);
  return (
    <article className="event-card">
      <div className="event-date-block" aria-hidden="true">
        <strong>{date.day}</strong>
        <span>{date.month}</span>
      </div>
      <div className="event-card-body">
        <div className="event-card-top">
          <span className={`pill pill-format-${event.format.toLowerCase().replace(/\s/g, "-")}`}>{event.format}</span>
          <span className="event-focus">{event.focus}</span>
        </div>
        <h3><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
        <p>{event.summary}</p>
        <ul className="event-meta">
          <li>{formatEventDate(event)}</li>
          <li>{event.startTime}–{event.endTime} {event.timezone}</li>
          <li>{event.location}</li>
          <li><strong>{event.price}</strong></li>
        </ul>
        <div className="event-card-foot">
          {event.registrationOpen && typeof event.seatsRemaining === "number" ? (
            <span className="seat-note">{event.seatsRemaining} places remaining</span>
          ) : (
            <span className="seat-note is-closed">Registration closed</span>
          )}
          <Link className="text-link" href={`/events/${event.slug}`}>
            {event.registrationOpen ? "View event & register" : "View event summary"} <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
