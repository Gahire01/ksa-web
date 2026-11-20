import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import EventCard from "@/components/EventCard";
import AlertCard from "@/components/AlertCard";
import { getActiveAlerts, getUpcomingEvents } from "@/lib/api";

export const metadata: Metadata = {
  title: "Student Hub",
  description:
    "Access Kigali Safety Academy learning links, certificate verification, upcoming events, and support in one place.",
  alternates: { canonical: "/students" },
};

const quickLinks = [
  { title: "Sign in", text: "Return to your learning when the student portal is connected.", href: "/login", label: "Go to sign in" },
  { title: "Create an account", text: "Register your details and course of interest.", href: "/register", label: "Create an account" },
  { title: "Verify a certificate", text: "Request verification of a completed certificate.", href: "/verify", label: "Verify a certificate" },
  { title: "Contact support", text: "Get help with a course, event, or account question.", href: "/contact", label: "Contact the academy" },
];

const steps = [
  { title: "Register your details", text: "Share your contact details and the course or program you are interested in." },
  { title: "Receive course access", text: "The academy confirms your course and shares access details." },
  { title: "Learn at your pace", text: "Work through short modules, examples, and a final knowledge check." },
  { title: "Complete and confirm", text: "Finish the course and ask the team about your completion record or certificate." },
];

export default async function StudentsPage() {
  const [events, alerts] = await Promise.all([getUpcomingEvents(2), getActiveAlerts(2)]);

  return (
    <main>
      <PageHero
        eyebrow="STUDENT HUB"
        title="Your starting point for learning"
        intro="Everything you need to begin training, prepare for an event, or ask for help. The student portal is being connected; in the meantime, these links and resources will get you to the right place."
        actions={
          <>
            <Link className="button button-orange" href="/register">Register your interest</Link>
            <Link className="button button-blue" href="/courses">Browse courses</Link>
          </>
        }
        compact
      />
      <Breadcrumbs items={[{ label: "Student hub" }]} />

      <section className="site-container page-section" aria-labelledby="quick-links-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">QUICK ACCESS</span>
            <h2 id="quick-links-title">Where do you want to go?</h2>
          </div>
        </div>
        <div className="card-grid four">
          {quickLinks.map((link) => (
            <article className="quick-link-card" key={link.title}>
              <h3><Link href={link.href}>{link.title}</Link></h3>
              <p>{link.text}</p>
              <Link className="text-link" href={link.href}>{link.label} <span aria-hidden="true">›</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band-soft" aria-labelledby="student-steps-title">
        <div className="site-container page-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">HOW LEARNING WORKS</span>
              <h2 id="student-steps-title">From interest to completion</h2>
              <p>The academy team confirms access and certificate details directly while the portal is being connected.</p>
            </div>
          </div>
          <ol className="step-grid">
            {steps.map((step, index) => (
              <li className="step-card" key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-container page-section student-updates" aria-labelledby="student-updates-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">STAY UP TO DATE</span>
            <h2 id="student-updates-title">Events and alerts for learners</h2>
            <p>Practical sessions and current guidance from the academy.</p>
          </div>
        </div>
        <div className="student-update-grid">
          <div>
            <h3 className="subhead">Upcoming events</h3>
            <div className="event-list">
              {events.map((event) => <EventCard key={event.slug} event={event} />)}
            </div>
            <Link className="text-link" href="/events">All events <span aria-hidden="true">›</span></Link>
          </div>
          <div>
            <h3 className="subhead">Active safety alerts</h3>
            <div className="alert-grid single">
              {alerts.map((alert) => <AlertCard key={alert.slug} alert={alert} compact />)}
            </div>
            <Link className="text-link" href="/alerts">All alerts <span aria-hidden="true">›</span></Link>
          </div>
        </div>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Need help with your learning?</h2>
          <p>Contact the academy team for account, course, or certificate support.</p>
        </div>
        <Link className="button button-orange" href="/contact">Contact support</Link>
      </section>
    </main>
  );
}
