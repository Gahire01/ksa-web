"use client";

import { useState } from "react";
import { postJson } from "@/lib/client";
import type { FormResult } from "@/lib/types";

export default function NewsletterForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    setPending(true);
    setStatus(null);
    const result = await postJson<FormResult>("/api/newsletter", { email });
    setPending(false);
    setStatus({ type: result.ok ? "success" : "error", message: result.data.message });
    if (result.ok) form.reset();
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <div className="newsletter-row">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
        <button type="submit" disabled={pending}>{pending ? "Adding…" : "Subscribe"}</button>
      </div>
      <p className="newsletter-note">Occasional training dates, safety alerts, and resources.</p>
      {status ? <p className={`form-status is-${status.type}`} role="status">{status.message}</p> : null}
    </form>
  );
}
