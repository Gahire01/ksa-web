import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { getFaqs } from "@/lib/api";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kigali Safety Academy about courses, team training, events, certificates, or partnerships.",
  alternates: { canonical: "/contact" },
};

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Kacyiru%2C%20Kigali%2C%20Rwanda";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string; course?: string }> }) {
  const params = await searchParams;
  const faqs = (await getFaqs()).slice(0, 4);
  const topics = [
    "General inquiry",
    "Course information",
    "Business training",
    "Event registration",
    "Learning partnership",
    "Certificate help",
    "Account help",
  ];
  const requestedTopic = params.topic && topics.includes(params.topic) ? params.topic : "General inquiry";
  const courseContext = params.course ? `I would like more information about the ${params.course} course.` : "";

  return (
    <main>
      <PageHero
        eyebrow="CONTACT US"
        title="Talk to the academy team"
        intro="Questions about a course, a team booking, an event, or a certificate? Send a message or reach us directly. We are happy to help you find the right next step."
        compact
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="site-container page-section contact-layout">
        <div className="contact-main">
          <div className="contact-card-grid">
            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">✉</span>
              <h2>Email</h2>
              <p>Best for detailed questions and group inquiries.</p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </article>
            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">☎</span>
              <h2>Phone</h2>
              <p>Call during office hours for a quick conversation.</p>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            </article>
            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">⌖</span>
              <h2>Visit</h2>
              <p>{siteConfig.address}. Please contact us before visiting so the right team member is available.</p>
              <a href={mapUrl} target="_blank" rel="noreferrer">Open in maps ↗</a>
            </article>
            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">◷</span>
              <h2>Office hours</h2>
              <p>{siteConfig.hours}. Messages sent outside these hours are answered on the next working day.</p>
            </article>
          </div>

          <ContactForm
            defaultTopic={requestedTopic}
            defaultMessage={courseContext}
            heading="Send us a message"
            intro="Share a few details and the academy team can point you to the right course, event, or service."
          />

          <div className="contact-faq">
            <div className="section-head">
              <div>
                <span className="eyebrow">QUICK ANSWERS</span>
                <h2>Common questions</h2>
              </div>
              <Link className="outline-button" href="/faq">See all FAQs</Link>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="contact-aside" aria-label="Contact information">
          <div className="sidebar-card">
            <h2>Training for a team?</h2>
            <p>Tell us the number of learners, the work they do, and your preferred timing. We will suggest a practical option.</p>
            <Link className="form-submit sidebar-cta" href="/business">Business training</Link>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Upcoming events</h2>
            <p>See webinars, workshops, and practical drills with limited places.</p>
            <Link className="text-link" href="/events">View events <span aria-hidden="true">›</span></Link>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Certificate help</h2>
            <p>Request verification or ask about a certificate you have completed.</p>
            <Link className="text-link" href="/verify">Verify a certificate <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
