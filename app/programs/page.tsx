import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgramCard from "@/components/ProgramCard";
import { getPrograms } from "@/lib/api";

export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Structured safety training programs for construction teams, emergency responders, lifting operations, and general workplaces.",
  alternates: { canonical: "/programs" },
};

const steps = [
  { title: "Choose a pathway", text: "Pick the program that matches your role or your team's work." },
  { title: "Register your interest", text: "Tell the academy who is learning and what you need to achieve." },
  { title: "Learn and practice", text: "Work through the courses online and join scheduled practical sessions." },
  { title: "Review your progress", text: "Confirm completion and plan the next step with the academy team." },
];

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <main>
      <PageHero
        eyebrow="TRAINING PROGRAMS"
        title="A clear path to safer work"
        intro="Combine related courses into a structured program. Each pathway is designed around a role or a type of work, so learners build knowledge in a sensible order."
        actions={
          <>
            <Link className="button button-orange" href="/business">Training for a team</Link>
            <Link className="button button-blue" href="/courses">Browse individual courses</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            <li><strong>{programs.length}</strong><span>Programs</span></li>
            <li><strong>Flexible</strong><span>Online + practical</span></li>
            <li><strong>Team-ready</strong><span>Group options</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Programs" }]} />

      <section className="site-container page-section" aria-labelledby="programs-list-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">FIND YOUR PATHWAY</span>
            <h2 id="programs-list-title">Training programs</h2>
            <p>Every program lists the courses it includes and the outcomes it supports.</p>
          </div>
        </div>
        <div className="card-grid two">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} courseCount={program.courseSlugs.length} />
          ))}
        </div>
      </section>

      <section className="band-soft">
        <div className="site-container page-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">HOW IT WORKS</span>
              <h2>From interest to practical learning</h2>
              <p>A simple process that keeps expectations clear.</p>
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

      <section className="site-container cta-inline-band">
        <div>
          <h2>Need a program built around your work?</h2>
          <p>We can combine courses and practical sessions for the hazards your team faces.</p>
        </div>
        <Link className="button button-orange" href="/business">Ask about team training</Link>
      </section>
    </main>
  );
}
