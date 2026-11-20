import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import { officialCourses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Kigali Safety Academy account to continue your safety training.",
};

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div className="site-container">
          <span className="eyebrow">MY ACCOUNT</span>
          <h1>Welcome back</h1>
          <p>Sign in to continue your training, revisit course materials, and manage your Kigali Safety Academy learning.</p>
        </div>
      </section>

      <section className="site-container auth-section" aria-label="Sign in">
        <div className="auth-grid">
          <div className="auth-card">
            <h2>Sign in</h2>
            <p className="auth-lead">Use the email address you registered with.</p>
            <LoginForm />
            <p className="auth-alt">New to Kigali Safety Academy? <a href="/register">Create an account</a></p>
          </div>

          <aside className="auth-aside" aria-label="Account benefits">
            <span className="eyebrow">STUDENT ACCESS</span>
            <h2>Why sign in?</h2>
            <ul className="auth-list">
              <li>Pick up your self-paced course materials where you left off</li>
              <li>Keep your training progress organized in one place</li>
              <li>Purchase and download your certificate after completion</li>
            </ul>
            <div className="auth-courses">
              <h3>Active training courses</h3>
              <ul>{officialCourses.map((course) => <li key={course}>{course}</li>)}</ul>
            </div>
            <p className="auth-help">Trouble signing in? <a href="/contact">Contact us</a> and we will help.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
