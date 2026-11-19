"use client";

import { useState } from "react";
import { officialCourses } from "@/lib/courses";

type Status = { type: "error" | "success"; message: string } | null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirmPassword = String(data.get("confirmPassword") ?? "");
    const acceptedTerms = data.get("terms") === "on";

    if (firstName.length < 2 || lastName.length < 2) {
      setStatus({ type: "error", message: "Enter your first and last name." });
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      return;
    }

    if (password.length < 8) {
      setStatus({ type: "error", message: "Choose a password with at least 8 characters." });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({ type: "error", message: "The two passwords do not match." });
      return;
    }

    if (!acceptedTerms) {
      setStatus({ type: "error", message: "Please accept the training terms to continue." });
      return;
    }

    setStatus({
      type: "success",
      message: `Thanks, ${firstName}! Your registration details look complete. Account creation will be available once the student portal is connected.`,
    });
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="register-first-name">First name</label>
          <input id="register-first-name" name="firstName" type="text" autoComplete="given-name" placeholder="First name" required />
        </div>
        <div className="field">
          <label htmlFor="register-last-name">Last name</label>
          <input id="register-last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Last name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="register-email">Email address</label>
          <input id="register-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label htmlFor="register-phone">Phone number <span className="field-optional">(optional)</span></label>
          <input id="register-phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 700 000 000" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="register-course">Course of interest</label>
        <select id="register-course" name="course" defaultValue="">
          <option value="">Select a course</option>
          {officialCourses.map((course) => <option key={course} value={course}>{course}</option>)}
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="register-password">Password</label>
          <div className="password-field">
            <input id="register-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 8 characters" required />
            <button type="button" className="password-toggle" aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="field">
          <label htmlFor="register-confirm-password">Confirm password</label>
          <input id="register-confirm-password" name="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Re-enter your password" required />
        </div>
      </div>

      <label className="checkbox-field" htmlFor="register-terms">
        <input id="register-terms" name="terms" type="checkbox" />
        <span>I agree to the training terms and understand that course availability is confirmed by Kigali Safety Academy.</span>
      </label>

      <button type="submit" className="auth-submit">Create Account</button>

      {status && <p className={`form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}

      <p className="auth-note">This form is a preview. No registration details are sent or stored yet.</p>
    </form>
  );
}
