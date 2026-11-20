import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the Kigali Safety Academy website, courses, events, and training resources.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="TERMS OF USE"
        title="Terms for using this website"
        intro="These terms explain the basis on which you may use the website and the information published on it."
        compact
      />
      <Breadcrumbs items={[{ label: "Terms" }]} />

      <section className="site-container page-section legal-layout">
        <article className="legal-body">
          <p className="legal-updated">Last updated: 19 November 2026</p>

          <section>
            <h2>1. About these terms</h2>
            <p>This website is operated by Kigali Safety Academy. By using the site, you agree to these terms. If you do not agree, please do not use the site.</p>
          </section>

          <section>
            <h2>2. Website information</h2>
            <p>We aim to keep course descriptions, event details, dates, and prices accurate and up to date. However, information may change, and some features are still being connected. Always confirm course availability, fees, and event details directly with the academy before making a decision.</p>
            <p>Nothing on this website constitutes legal advice or a guarantee that a particular workplace meets a legal standard.</p>
          </section>

          <section>
            <h2>3. Registration and accounts</h2>
            <p>Account registration and sign-in are being connected to the student portal. Until that service is live, submitting a registration form expresses your interest but does not create an active account or guarantee a place on a course.</p>
            <p>When accounts become available, you will be responsible for keeping your sign-in details confidential and for activity carried out under your account.</p>
          </section>

          <section>
            <h2>4. Courses, fees, and access</h2>
            <p>Course access, fees, practical sessions, and completion requirements are confirmed by Kigali Safety Academy. Prices shown on the website are indicative unless expressly confirmed. Payment, where applicable, is handled through the process communicated by the academy and not through this website at present.</p>
          </section>

          <section>
            <h2>5. Certificates</h2>
            <p>Certificates are issued at the academy's discretion after the relevant completion requirements are met. A certificate confirms participation or completion of the specified training; it does not by itself certify competence for every workplace task or satisfy every legal requirement.</p>
          </section>

          <section>
            <h2>6. Events</h2>
            <p>Event places may be limited. A submitted registration request is not a confirmed booking until the academy confirms it. Practical sessions may involve physical activity; participants must follow facilitator instructions and disclose relevant access needs in advance.</p>
          </section>

          <section>
            <h2>7. Safety information</h2>
            <p>Safety alerts, articles, and course materials are general educational information. They may not reflect the conditions, equipment, or legal requirements at your particular workplace. You must carry out your own risk assessments, follow applicable laws and procedures, and consult a competent person where needed.</p>
            <p>In an emergency, follow your emergency procedures and contact the appropriate local services immediately.</p>
          </section>

          <section>
            <h2>8. Intellectual property</h2>
            <p>Unless otherwise stated, the text, design, course materials, and branding on this website belong to Kigali Safety Academy or are used with permission. You may read and share links to public pages, but you may not copy, republish, or sell substantial content without written permission.</p>
          </section>

          <section>
            <h2>9. Acceptable use</h2>
            <ul>
              <li>Do not attempt to disrupt, probe, or gain unauthorized access to the website or its services.</li>
              <li>Do not submit false, misleading, or unlawful information through forms.</li>
              <li>Do not use the site to harass others or to infringe their rights.</li>
              <li>Do not scrape or republish content in a way that damages the academy or misleads learners.</li>
            </ul>
          </section>

          <section>
            <h2>10. Third-party links</h2>
            <p>The site may link to external websites, such as maps or partner resources. We are not responsible for the content, availability, or privacy practices of those websites.</p>
          </section>

          <section>
            <h2>11. Limitation of liability</h2>
            <p>To the extent permitted by law, Kigali Safety Academy is not liable for losses arising from reliance on general website information, interruptions to the site, or the actions of third parties. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>
          </section>

          <section>
            <h2>12. Changes</h2>
            <p>We may update these terms as the website and services develop. The latest version will be published on this page with a revised date. Continued use of the site after an update means you accept the revised terms.</p>
          </section>

          <section>
            <h2>13. Governing law</h2>
            <p>These terms are governed by the laws of Rwanda. Any dispute will be handled by the competent courts of Rwanda, unless applicable law requires otherwise.</p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <p>Questions about these terms? Contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>. See also our <Link href="/privacy">privacy information</Link>.</p>
          </section>
        </article>

        <aside className="contact-aside" aria-label="Terms links">
          <div className="sidebar-card">
            <h2>Related pages</h2>
            <ul className="sidebar-link-list">
              <li><Link href="/privacy">Privacy information</Link></li>
              <li><Link href="/faq">Frequently asked questions</Link></li>
              <li><Link href="/contact">Contact the academy</Link></li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Need clarification?</h2>
            <p>Contact the academy before registering if anything in these terms is unclear.</p>
            <Link className="text-link" href="/contact">Ask a question <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
