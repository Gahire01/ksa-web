"use client";

import { useMemo, useState } from "react";
import EventCard from "@/components/EventCard";
import type { EventItem } from "@/lib/types";

const formats = ["All formats", "In person", "Online", "Hybrid"];

export default function EventsExplorer({ events }: { events: EventItem[] }) {
  const [format, setFormat] = useState("All formats");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return events.filter((event) => {
      const matchesFormat = format === "All formats" || event.format === format;
      const matchesQuery =
        !normalized ||
        event.title.toLowerCase().includes(normalized) ||
        event.summary.toLowerCase().includes(normalized) ||
        event.focus.toLowerCase().includes(normalized) ||
        event.location.toLowerCase().includes(normalized);
      return matchesFormat && matchesQuery;
    });
  }, [events, format, query]);

  return (
    <div className="events-explorer">
      <div className="catalog-controls">
        <div className="catalog-search">
          <label className="sr-only" htmlFor="events-search">Search events</label>
          <input
            id="events-search"
            type="search"
            placeholder="Search events by topic or place"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filter-chips" role="group" aria-label="Filter events by format">
          {formats.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-chip${format === item ? " is-active" : ""}`}
              aria-pressed={format === item}
              onClick={() => setFormat(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="catalog-summary"><span>{filtered.length} upcoming event{filtered.length === 1 ? "" : "s"}</span></div>
      </div>

      {filtered.length ? (
        <div className="event-list">
          {filtered.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No upcoming events match that filter</h3>
          <p>Try another format or search term. New events are added throughout the year.</p>
          <button type="button" className="button-inline" onClick={() => { setQuery(""); setFormat("All formats"); }}>Show all events</button>
        </div>
      )}
    </div>
  );
}
