"use client";

import { useState } from "react";
import { postJson } from "@/lib/client";
import type { FormResult } from "@/lib/types";

export default function EventRegistrationForm({ slug, title }: { slug: string; title: string }) {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("consent") !== "on") {
      setStatus({ type: "error", message: "Please confirm that we may use your details to process this registration." });
      return;
    }

    setPending(true);
    setStatus(null);
    const result = await postJson<FormResult>(`/api/events/${slug}/register`, {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      organization: data.get("organization"),
      notes: data.get("notes"),
    });
    setPending(false);
    setStatus({ type: result.ok ? "success" : "error", message: result.data.message });
    if (result.ok) form.reset();
  }

  return (
    <div className="form-card event-register-card">
      <h2>Register your place</h2>
      <p className="form-intro">Request a place for <strong>{title}</strong>. The academy team confirms places and sends joining details.</p>
      <form className="stacked-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="field">
            <label htmlFor="event-name">Full name</label>
            <input id="event-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="event-email">Email address</label>
            <input id="event-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="event-phone">Phone <span className="field-optional">(optional)</span></label>
            <input id="event-phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 700 000 000" />
          </div>
          <div className="field">
            <label htmlFor="event-organization">Organization <span className="field-optional">(optional)</span></label>
            <input id="event-organization" name="organization" type="text" autoComplete="organization" placeholder="Company or team" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="event-notes">Anything we should know? <span className="field-optional">(optional)</span></label>
          <textarea id="event-notes" name="notes" rows={3} placeholder="Access needs, questions, or group details" />
        </div>
        <label className="checkbox-field" htmlFor="event-consent">
          <input id="event-consent" name="consent" type="checkbox" />
          <span>I agree that the academy may contact me about this event.</span>
        </label>
        <button type="submit" className="form-submit" disabled={pending}>{pending ? "Submitting…" : "Request a place"}</button>
        <p className="auth-note">Registration delivery and confirmations will be enabled when the events backend is connected.</p>
        {status ? <p className={`form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p> : null}
      </form>
    </div>
  );
}
