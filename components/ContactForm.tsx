"use client";

import { useState } from "react";
import { postJson } from "@/lib/client";
import type { FormResult } from "@/lib/types";

const defaultTopics = [
  "General inquiry",
  "Course information",
  "Business training",
  "Event registration",
  "Learning partnership",
  "Certificate help",
  "Account help",
];

interface ContactFormProps {
  defaultTopic?: string;
  topics?: string[];
  heading?: string;
  intro?: string;
  submitLabel?: string;
  defaultMessage?: string;
}

export default function ContactForm({
  defaultTopic = "General inquiry",
  topics = defaultTopics,
  heading = "Send a message",
  intro = "Tell us what you need and the academy team will follow up.",
  submitLabel = "Send message",
  defaultMessage = "",
}: ContactFormProps) {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("consent") !== "on") {
      setStatus({ type: "error", message: "Please confirm that we may use your details to respond." });
      return;
    }

    setPending(true);
    setStatus(null);
    const result = await postJson<FormResult>("/api/contact", {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      topic: data.get("topic"),
      message: data.get("message"),
    });
    setPending(false);
    setStatus({ type: result.ok ? "success" : "error", message: result.data.message });
    if (result.ok) form.reset();
  }

  return (
    <div className="form-card">
      <h2>{heading}</h2>
      <p className="form-intro">{intro}</p>
      <form className="stacked-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="field">
            <label htmlFor="contact-name">Full name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="contact-phone">Phone <span className="field-optional">(optional)</span></label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 700 000 000" />
          </div>
          <div className="field">
            <label htmlFor="contact-topic">Topic</label>
            <select id="contact-topic" name="topic" defaultValue={defaultTopic}>
              {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={6} placeholder="How can we help?" defaultValue={defaultMessage} required />
        </div>
        <label className="checkbox-field" htmlFor="contact-consent">
          <input id="contact-consent" name="consent" type="checkbox" />
          <span>I agree that Kigali Safety Academy may use these details to respond to my inquiry.</span>
        </label>
        <button type="submit" className="form-submit" disabled={pending}>{pending ? "Sending…" : submitLabel}</button>
        <p className="auth-note">Prefer email? Reach us at <a href="mailto:info@kigalisafetyacademy.rw">info@kigalisafetyacademy.rw</a>. This form is backend-ready; delivery will be enabled when the service is connected.</p>
        {status ? <p className={`form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p> : null}
      </form>
    </div>
  );
}
