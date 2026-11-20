import Link from "next/link";
import { getActiveAlerts, getCourses, getPrograms, getResources, getSiteStats, getUpcomingEvents } from "@/lib/api";
import EventCard from "@/components/EventCard";
import AlertCard from "@/components/AlertCard";
import SectionHead from "@/components/SectionHead";
import type { Course, Program } from "@/lib/types";

const categories = [
  { name: "Construction Safety and Health Management", image: "index-slider-7.jpg", link: "/programs/construction-safety-program" },
  { name: "Occupational Safety and Health (OSH)", image: "index-slider-1.jpg", link: "/courses/occupational-safety-and-health-osh" },
  { name: "First Aid Training", image: "index-slider-11.jpg", link: "/courses/first-aid-training" },
  { name: "Fire Fighting Training", image: "index-slider-2.jpg", link: "/courses/fire-fighting-training" },
  { name: "Rigger Safety Training", image: "index-slider-9.jpg", link: "/courses/rigger-safety-training" },
];

const learnerBenefits = [
  { title: "Learn at your own pace", text: "Explore safety topics on a schedule that works for you, with clear course materials available online." },
  { title: "Practical knowledge", text: "Build awareness of common workplace hazards and the everyday habits that help prevent incidents." },
  { title: "A clearer path", text: "Move through training step by step and keep your learning organized as you go." },
  { title: "Safer workplaces", text: "Share useful safety knowledge with colleagues and support a stronger culture of prevention." },
];

function Check({ children }: { children: React.ReactNode }) {
  return <li className="hero-point"><span aria-hidden="true">✓</span>{children}</li>;
}

function FeatureCard({ icon, title, children, link }: { icon: string; title: string; children: React.ReactNode; link: string }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">{icon}</div>
      <div>
        <h3>{title}</h3>
        {children}
        <Link href={link} className="text-link">Learn more <span aria-hidden="true">›</span></Link>
      </div>
    </article>
  );
}

function ListPanel({ title, entries, id, cta, ctaHref }: { title: string; entries: { label: string; href: string }[]; id: string; cta: string; ctaHref: string }) {
  return (
    <section className="list-panel" id={id}>
      <div className="panel-heading">
        <h2>{title}</h2>
        <Link href={ctaHref}>{cta} <span aria-hidden="true">›</span></Link>
      </div>
      <ul>
        {entries.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}<span aria-hidden="true">›</span></Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function HomePage() {
  const [courses, programs, upcomingEvents, alerts, resources, stats] = await Promise.all([
    getCourses(),
    getPrograms(),
    getUpcomingEvents(3),
    getActiveAlerts(3),
    getResources(3),
    getSiteStats(),
  ]);

  const recommended = courses.filter((course: Course) => course.recommended);
  const popular = courses.filter((course: Course) => course.popular);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <h1 id="hero-title">Kigali Safety Academy Makes Training Easy!</h1>
          <ul>
            <Check>Build practical occupational safety knowledge.</Check>
            <Check>Study online at your own pace.</Check>
            <Check>Join workshops, webinars, and practical drills.</Check>
            <Check>Follow current safety alerts and guidance.</Check>
            <Check>Training options for individuals and teams.</Check>
          </ul>
          <div className="hero-actions">
            <Link className="button button-orange" href="/register"><small>Get Started!</small>Register Now</Link>
            <Link className="button button-blue" href="/programs"><small>View Our</small>Programs</Link>
            <Link className="button button-sky" href="/courses"><small>View Our</small>Courses</Link>
          </div>
        </div>
      </section>

      <section className="site-container spotlight-banner" aria-label="Kigali Safety Academy training benefits">
        <div className="spotlight-content">
          <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="88" height="88" />
          <div className="spotlight-copy">
            <span className="eyebrow">KIGALI SAFETY ACADEMY</span>
            <h2>Learn well. Work safely.</h2>
            <p>Practical knowledge for safer, healthier workplaces.</p>
          </div>
          <ul className="spotlight-points">
            <li>✓ Self-paced learning</li>
            <li>✓ Workplace-focused topics</li>
            <li>✓ Built for safer teams</li>
          </ul>
        </div>
      </section>

      <section className="site-container category-section" aria-label="Training programs by industry">
        <div className="category-grid" role="region" aria-label="Training categories, scroll horizontally for more" tabIndex={0}>
          {categories.map((category) => (
            <Link className="category-card" href={category.link} key={category.name} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.72),transparent 62%),url(/assets/${category.image})` }}>
              <span className="category-title">{category.name}</span>
              <span className="category-button">Programs</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-container feature-grid" aria-label="Training benefits">
        <FeatureCard icon="✓" title="Practical Training" link="/courses"><p>Explore learning designed to build awareness of workplace safety and health topics.</p><p>Study course materials at a pace that fits your schedule.</p></FeatureCard>
        <FeatureCard icon="✓" title="For Organizations" link="/business"><p>Support a shared approach to safety learning across your team.</p><p>Ask about training options for your workplace.</p></FeatureCard>
        <FeatureCard icon="✓" title="Safer Workplaces" link="/resources"><p>Strengthen everyday safety awareness with useful, accessible learning.</p><p>Take the next step toward safer work practices.</p></FeatureCard>
      </section>

      <section className="kudos-band">
        <div className="site-container">
          <div className="section-title">
            <div><span className="eyebrow">STUDENT LEARNING</span><h2>Training that works for you</h2><p>Flexible learning for safer workplaces</p></div>
            <Link href="/contact" className="outline-button">Ask about training</Link>
          </div>
          <div className="testimonial-grid">
            {learnerBenefits.map((item) => (
              <article className="testimonial learner-card" key={item.title}>
                <div className="stars" aria-hidden="true">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container discover-section" aria-label="Training discovery">
        <div className="section-title discover-title">
          <div><span className="eyebrow">TRAIN WHEN IT WORKS FOR YOU</span><h2>Find the right training</h2></div>
          <Link className="text-link" href="/courses">Browse the catalog <span aria-hidden="true">›</span></Link>
        </div>
        <div className="discovery-grid">
          <ListPanel
            title="Recommended Training"
            entries={recommended.map((course) => ({ label: course.title, href: `/courses/${course.slug}` }))}
            id="courses"
            cta="View all courses"
            ctaHref="/courses"
          />
          <ListPanel
            title="Popular Programs"
            entries={programs.slice(0, 4).map((program: Program) => ({ label: program.title, href: `/programs/${program.slug}` }))}
            id="programs"
            cta="View all programs"
            ctaHref="/programs"
          />
          <ListPanel
            title="Popular Courses"
            entries={popular.map((course) => ({ label: course.title, href: `/courses/${course.slug}` }))}
            id="popular-courses"
            cta="View all courses"
            ctaHref="/courses"
          />
        </div>
      </section>

      <section className="home-events-band" aria-labelledby="home-events-title">
        <div className="site-container">
          <SectionHead
            eyebrow="UPCOMING EVENTS"
            title="Learn together, in person or online"
            intro="Webinars, practical workshops, and drills with the Kigali Safety Academy team."
            id="home-events-title"
            action={<Link className="outline-button" href="/events">View all events</Link>}
          />
          {upcomingEvents.length ? (
            <div className="event-list three-up">
              {upcomingEvents.map((event) => <EventCard key={event.slug} event={event} />)}
            </div>
          ) : (
            <div className="empty-state"><h3>New events are being planned</h3><p>Check back soon or contact us to ask about upcoming dates.</p></div>
          )}
        </div>
      </section>

      <section className="site-container home-alerts-section" aria-labelledby="home-alerts-title">
        <SectionHead
          eyebrow="SAFETY ALERTS"
          title="Timely guidance from our safety desk"
          intro="Short, practical reminders that help teams respond to current conditions."
          id="home-alerts-title"
          action={<Link className="outline-button" href="/alerts">All safety alerts</Link>}
        />
        <div className="alert-grid">
          {alerts.map((alert) => <AlertCard key={alert.slug} alert={alert} compact />)}
        </div>
      </section>

      <section className="site-container community-strip">
        <div className="community-copy">
          <span className="eyebrow">LEARNING PARTNERSHIPS</span>
          <h2>Training that can open doors.</h2>
          <p>Learning partnerships can support professional development and help make safety training more accessible. Contact Kigali Safety Academy to ask about opportunities for your learners or organization.</p>
          <Link href="/partnerships" className="text-link">Ask about partnerships <span aria-hidden="true">›</span></Link>
        </div>
        <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="88" height="88" />
      </section>

      <section className="site-container editorial-grid">
        <article className="editorial-card">
          <div className="editorial-mark">KSA · WORKPLACE LEARNING</div>
          <h3>Build a stronger safety culture.</h3>
          <p>Make practical learning part of everyday conversations about workplace safety.</p>
          <Link href="/about#approach" className="text-link">Explore our approach <span aria-hidden="true">›</span></Link>
        </article>
        <article className="editorial-card safety-article">
          <div className="editorial-mark">SAFETY SPOTLIGHT</div>
          <h3>{resources[0]?.title ?? "Safety guidance for everyday work"}</h3>
          <p>{resources[0]?.summary ?? "Recognize risks early and take practical steps to protect your team."}</p>
          <Link href={resources[0] ? `/resources/${resources[0].slug}` : "/resources"} className="text-link">Read the spotlight <span aria-hidden="true">›</span></Link>
        </article>
        <article className="editorial-card">
          <span className="eyebrow">PRACTICAL RESOURCES</span>
          <h3>Safer work begins with awareness.</h3>
          <p>Build knowledge one safety topic at a time.</p>
          <Link href="/resources" className="text-link">Browse articles <span aria-hidden="true">›</span></Link>
        </article>
      </section>

      <section className="cta-section">
        <div className="site-container cta-inner">
          <div>
            <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>
            <h2>Start building safer work habits.</h2>
            <p>Explore training with Kigali Safety Academy.</p>
          </div>
          <Link className="button button-orange" href="/contact">Contact Us <span aria-hidden="true">›</span></Link>
        </div>
      </section>

      <section className="site-container stats-row" aria-label="Kigali Safety Academy at a glance">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <small>{stat.detail}</small>
          </div>
        ))}
      </section>
    </main>
  );
}
