"use client";

import { useState } from "react";
import { postJson } from "@/lib/client";
import type { FormResult } from "@/lib/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!emailPattern.test(email)) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      return;
    }

    if (password.length < 8) {
      setStatus({ type: "error", message: "Your password must be at least 8 characters." });
      return;
    }

    setPending(true);
    setStatus(null);
    const result = await postJson<FormResult>("/api/auth/login", { email, password });
    setPending(false);
    setStatus({ type: result.ok ? "success" : "error", message: result.data.message });
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="login-email">Email address</label>
        <input id="login-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>

      <div className="field">
        <label htmlFor="login-password">Password</label>
        <div className="password-field">
          <input id="login-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required />
          <button type="button" className="password-toggle" aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="auth-options">
        <label className="checkbox-field" htmlFor="login-remember">
          <input id="login-remember" name="remember" type="checkbox" /> Keep me signed in
        </label>
        <a className="auth-inline-link" href="/contact?topic=Account%20help">Forgot password?</a>
      </div>

      <button type="submit" className="auth-submit" disabled={pending}>{pending ? "Signing in…" : "Sign In"}</button>

      {status && <p className={`form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}

      <p className="auth-note">Sign-in is backend-ready. Account sessions will be activated when the student portal is connected.</p>
    </form>
  );
}
