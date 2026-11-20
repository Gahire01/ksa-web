import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Learning Partnerships",
  description:
    "Partner with Kigali Safety Academy to make practical workplace safety training more accessible to learners and organizations.",
  alternates: { canonical: "/partnerships" },
};

const partnerTypes = [
  { title: "Employers", text: "Build safety learning into your team's development and onboarding." },
  { title: "Training providers", text: "Combine expertise and reach to offer practical, accessible courses." },
  { title: "Schools and colleges", text: "Introduce workplace safety awareness before learners enter employment." },
  { title: "Community organizations", text: "Support safety awareness for workers, volunteers, and local groups." },
];

const benefits = [
  "Access to practical course content and resources",
  "Flexible delivery: online learning plus hands-on sessions",
  "Group options for teams and cohorts",
  "A shared focus on clear, useful safety knowledge",
];

export default function PartnershipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEARNING PARTNERSHIPS"
        title="Stronger safety learning through collaboration"
        intro="We work with organizations that share a simple goal: making practical safety knowledge more accessible. Partnerships can combine content, training space, facilitation, and reach."
        actions={<Link className="button button-orange" href="#partnership-inquiry">Discuss a partnership</Link>}
        meta={
          <ul className="hero-stat-list">
            <li><strong>Open</strong><span>To new partners</span></li>
            <li><strong>Practical</strong><span>Shared learning goals</span></li>
            <li><strong>Local</strong><span>Kigali based</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Learning partnerships" }]} />

      <section className="site-container page-section" aria-labelledby="partner-types-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">WHO WE WORK WITH</span>
            <h2 id="partner-types-title">Partnerships that make sense</h2>
            <p>Different partners bring different strengths. The best collaborations keep the learner at the centre.</p>
          </div>
        </div>
        <div className="card-grid four">
          {partnerTypes.map((type, index) => (
            <article className="value-card" key={type.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{type.title}</h3>
              <p>{type.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band-soft" aria-labelledby="partner-benefits-title">
        <div className="site-container page-section business-split">
          <div>
            <span className="eyebrow">WHAT PARTNERSHIP CAN INCLUDE</span>
            <h2 id="partner-benefits-title">A practical, flexible starting point</h2>
            <p>Every partnership is different. We begin with a conversation about what you want to achieve, then agree a simple scope that both sides can deliver well.</p>
            <ul className="check-list">
              {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
          <div className="about-callout">
            <span className="eyebrow">GET STARTED</span>
            <h3>Tell us what you have in mind</h3>
            <p>Share your organization, your learners, and the opportunity you see. We will respond with a practical next step.</p>
            <Link className="form-submit" href="#partnership-inquiry">Start a conversation</Link>
          </div>
        </div>
      </section>

      <section className="site-container page-section" aria-labelledby="partner-principles-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">OUR PRINCIPLES</span>
            <h2 id="partner-principles-title">How we approach collaboration</h2>
          </div>
        </div>
        <div className="card-grid three">
          <article className="value-card"><span aria-hidden="true">01</span><h3>Clarity</h3><p>Agree the purpose, audience, roles, and practical details before work begins.</p></article>
          <article className="value-card"><span aria-hidden="true">02</span><h3>Quality</h3><p>Keep the learning practical, accurate, and appropriate for the people taking part.</p></article>
          <article className="value-card"><span aria-hidden="true">03</span><h3>Follow-through</h3><p>Review what worked and what should change, then decide whether to continue.</p></article>
        </div>
      </section>

      <section className="band-soft" id="partnership-inquiry" aria-labelledby="partnership-form-title">
        <div className="site-container page-section business-form-layout">
          <div>
            <span className="eyebrow">PARTNERSHIP INQUIRY</span>
            <h2 id="partnership-form-title">Let's explore the idea</h2>
            <p>Tell us about your organization and what you would like to make possible. There is no obligation and no fixed template.</p>
            <p className="form-note">You can also email info@kigalisafetyacademy.rw with a short introduction.</p>
          </div>
          <ContactForm
            defaultTopic="Learning partnership"
            heading="Partnership inquiry"
            intro="A few details will help us respond usefully."
            submitLabel="Send partnership inquiry"
          />
        </div>
      </section>
    </main>
  );
}
