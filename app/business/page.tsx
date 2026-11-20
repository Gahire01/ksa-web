import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { getSiteStats } from "@/lib/api";

export const metadata: Metadata = {
  title: "Business Training",
  description:
    "Team safety training from Kigali Safety Academy: group courses, practical workshops, and programs designed around your workplace.",
  alternates: { canonical: "/business" },
};

const offerings = [
  {
    title: "Group course access",
    text: "Register a group on core courses and give teams a shared foundation in workplace safety.",
  },
  {
    title: "Practical workshops",
    text: "First aid, fire safety, and rigging sessions delivered at the academy or at your site.",
  },
  {
    title: "Tailored programs",
    text: "Combine courses and practical sessions around the hazards and schedules that matter to you.",
  },
  {
    title: "Safety briefings",
    text: "Short, focused sessions for toolbox talks, supervisor briefings, or an upcoming high-risk task.",
  },
];

const process = [
  { title: "Tell us about your team", text: "Share the work your team does, the number of learners, and any specific concerns." },
  { title: "Choose a practical option", text: "We suggest a course, program, or workshop and confirm timing and logistics." },
  { title: "Prepare for the session", text: "Learners receive joining details or practical instructions ahead of time." },
  { title: "Review and follow through", text: "After training, we share resources and discuss next steps for your team." },
];

export default async function BusinessPage() {
  const stats = await getSiteStats();

  return (
    <main>
      <PageHero
        eyebrow="BUSINESS TRAINING"
        title="Safety training that fits the way your team works"
        intro="Build a shared understanding of workplace risk across your team. Choose a group course, a practical session at your site, or a program designed around your work."
        actions={
          <>
            <Link className="button button-orange" href="#inquiry">Request a training plan</Link>
            <Link className="button button-blue" href="/programs">See training programs</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            {stats.slice(0, 3).map((stat) => (
              <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>
            ))}
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Business training" }]} />

      <section className="site-container page-section" aria-labelledby="offerings-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">OPTIONS FOR ORGANIZATIONS</span>
            <h2 id="offerings-title">Ways to train your team</h2>
            <p>Start with what you need to achieve, then choose a format that fits.</p>
          </div>
        </div>
        <div className="card-grid two">
          {offerings.map((offering, index) => (
            <article className="offer-card" key={offering.title}>
              <span className="offer-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{offering.title}</h3>
                <p>{offering.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band-soft" aria-labelledby="business-why-title">
        <div className="site-container page-section business-split">
          <div>
            <span className="eyebrow">WHY IT WORKS</span>
            <h2 id="business-why-title">Training that supports everyday decisions</h2>
            <p>Workers make dozens of safety-related decisions each shift. Good training helps them recognize risk, speak up earlier, and respond calmly when something changes.</p>
            <ul className="check-list">
              <li>Content grounded in common workplace tasks</li>
              <li>Clear language for mixed-experience teams</li>
              <li>Practical sessions for key emergency skills</li>
              <li>Resources to support follow-up conversations</li>
            </ul>
            <Link className="text-link" href="/resources">Browse the safety library <span aria-hidden="true">›</span></Link>
          </div>
          <div className="about-callout">
            <span className="eyebrow">TEAM LEARNING</span>
            <h3>Start with a conversation</h3>
            <p>Tell us about your work and we will suggest a practical starting point. There is no obligation to book.</p>
            <Link className="form-submit" href="#inquiry">Ask about team training</Link>
          </div>
        </div>
      </section>

      <section className="site-container page-section" aria-labelledby="business-process-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">HOW IT WORKS</span>
            <h2 id="business-process-title">From inquiry to training day</h2>
            <p>A straightforward process with clear confirmation at each step.</p>
          </div>
        </div>
        <ol className="step-grid">
          {process.map((step, index) => (
            <li className="step-card" key={step.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band-soft" id="inquiry" aria-labelledby="inquiry-title">
        <div className="site-container page-section business-form-layout">
          <div>
            <span className="eyebrow">REQUEST A TRAINING PLAN</span>
            <h2 id="inquiry-title">Tell us about your team</h2>
            <p>Include the work your team does, the number of learners, and any preferred dates. The academy team will reply with a practical option.</p>
            <ul className="contact-mini-list">
              <li><strong>Email:</strong> info@kigalisafetyacademy.rw</li>
              <li><strong>Phone:</strong> +250 788 000 000</li>
              <li><strong>Hours:</strong> Monday–Friday, 08:00–17:00 CAT</li>
            </ul>
            <p className="form-note">Prefer to talk first? Call or email and we will arrange a short conversation.</p>
          </div>
          <ContactForm
            defaultTopic="Business training"
            heading="Business training inquiry"
            intro="Share the details below and we will help you plan the next step."
            submitLabel="Send training inquiry"
          />
        </div>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Planning an event or practical drill?</h2>
          <p>We can bring first aid, fire safety, or rigging practice to your team.</p>
        </div>
        <Link className="button button-orange" href="/events">See upcoming events</Link>
      </section>
    </main>
  );
}
