import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getInstructors, getSiteStats } from "@/lib/api";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kigali Safety Academy's practical approach to occupational safety, first aid, fire safety, and workplace training.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Practical first", text: "Every lesson should help someone do a real task more safely, not just pass a quiz." },
  { title: "Clear language", text: "We explain safety concepts in plain words, with examples that fit the workplace." },
  { title: "Shared responsibility", text: "Safety works best when workers, supervisors, and leaders learn together." },
  { title: "Continuous improvement", text: "We review our content and invite feedback so the training stays useful." },
];

const approach = [
  { title: "Understand the work", text: "We start with the tasks, environment, and people involved—not a generic checklist." },
  { title: "Focus on decisions", text: "Training highlights the choices that prevent incidents: planning, communication, and early action." },
  { title: "Make it memorable", text: "Short modules, practical prompts, and scenario questions help learners retain what matters." },
  { title: "Support follow-through", text: "Resources and alerts help teams keep the conversation going after the training ends." },
];

export default async function AboutPage() {
  const [instructors, stats] = await Promise.all([getInstructors(), getSiteStats()]);

  return (
    <main>
      <PageHero
        eyebrow="ABOUT THE ACADEMY"
        title="Practical safety learning, built for real workplaces"
        intro="Kigali Safety Academy helps individuals and organizations build the knowledge and habits that prevent harm at work. We focus on clear explanation, practical examples, and training that people can use straight away."
        actions={
          <>
            <Link className="button button-orange" href="/courses">Explore courses</Link>
            <Link className="button button-blue" href="/contact">Talk to the team</Link>
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
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="site-container page-section about-intro">
        <div>
          <span className="eyebrow">WHY WE EXIST</span>
          <h2>Safety knowledge should be accessible and useful.</h2>
          <p>Workplace injuries are not inevitable. Many are prevented by simple things done consistently: a clear plan, a short conversation about a hazard, a check that equipment is fit for use, and knowing what to do when something goes wrong.</p>
          <p>Our courses bring these ideas together in a format that fits around work. We write for people who need practical understanding—not just a certificate—and for organizations that want safety learning to be part of how they operate.</p>
        </div>
        <div className="about-callout">
          <span className="eyebrow">OUR FOCUS</span>
          <h3>Learn well. Work safely.</h3>
          <p>Occupational safety, first aid, fire safety, construction, and lifting operations—taught with a workplace-first mindset.</p>
          <ul className="check-list">
            <li>Self-paced online learning</li>
            <li>Practical workshops and drills</li>
            <li>Training for individuals and teams</li>
            <li>Resources that support follow-through</li>
          </ul>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="values-title">
        <div className="site-container page-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">WHAT GUIDES US</span>
              <h2 id="values-title">Our values</h2>
              <p>Four principles shape how we design and deliver training.</p>
            </div>
          </div>
          <div className="card-grid four">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container page-section" id="approach" aria-labelledby="approach-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2 id="approach-title">How we build a course</h2>
            <p>A simple learning design process that keeps the workplace at the centre.</p>
          </div>
        </div>
        <div className="approach-grid">
          {approach.map((item, index) => (
            <article className="approach-step" key={item.title}>
              <span className="approach-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container page-section page-section-tight" id="instructors" aria-labelledby="instructors-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">FACILITATORS</span>
            <h2 id="instructors-title">Meet the instructor team</h2>
            <p>Practical facilitators who work across online learning and hands-on sessions.</p>
          </div>
          <Link className="outline-button" href="/contact">Ask about a session</Link>
        </div>
        <div className="card-grid four">
          {instructors.map((instructor) => (
            <article className="instructor-card" key={instructor.name}>
              <div className="instructor-avatar" aria-hidden="true">{instructor.initials}</div>
              <h3>{instructor.name}</h3>
              <span className="instructor-role">{instructor.role}</span>
              <p>{instructor.bio}</p>
              <span className="instructor-focus">{instructor.focus}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container community-strip">
        <div className="community-copy">
          <span className="eyebrow">LEARNING PARTNERSHIPS</span>
          <h2>Stronger training through collaboration.</h2>
          <p>We work with employers, training providers, schools, and community organizations to make practical safety learning more accessible.</p>
          <Link href="/partnerships" className="text-link">Explore partnerships <span aria-hidden="true">›</span></Link>
        </div>
        <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="88" height="88" />
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Ready to start learning?</h2>
          <p>Browse the catalog or ask us to help you choose a course for your role.</p>
        </div>
        <Link className="button button-orange" href="/courses">View courses <span aria-hidden="true">›</span></Link>
      </section>
    </main>
  );
}
