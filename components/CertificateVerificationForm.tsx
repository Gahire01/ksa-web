"use client";

import { useState } from "react";
import { postJson } from "@/lib/client";
import type { FormResult } from "@/lib/types";

export default function CertificateVerificationForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setStatus(null);
    const result = await postJson<FormResult>("/api/verify", {
      certificateId: data.get("certificateId"),
      lastName: data.get("lastName"),
    });
    setPending(false);
    if (!result.ok) {
      setStatus({ type: "error", message: result.data.message });
      return;
    }
    setStatus({ type: result.data.ok ? "success" : "info", message: result.data.message });
  }

  return (
    <form className="stacked-form verify-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="verify-id">Certificate ID</label>
          <input id="verify-id" name="certificateId" type="text" placeholder="e.g. KSA-2026-0001" required />
        </div>
        <div className="field">
          <label htmlFor="verify-last-name">Learner surname</label>
          <input id="verify-last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Surname" required />
        </div>
      </div>
      <button type="submit" className="form-submit" disabled={pending}>{pending ? "Checking…" : "Verify certificate"}</button>
      <p className="auth-note">The verification lookup is backend-ready. Until it is connected, the academy can confirm certificates manually.</p>
      {status ? <p className={`form-status is-${status.type === "info" ? "info" : status.type}`} role="status">{status.message}</p> : null}
    </form>
  );
}
