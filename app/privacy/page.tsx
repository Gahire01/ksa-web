import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Information",
  description:
    "How Kigali Safety Academy handles personal information submitted through the website, forms, events, and communications.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="PRIVACY INFORMATION"
        title="How we handle your information"
        intro="This page explains what information the website may collect, why it is used, and the choices available to you."
        compact
      />
      <Breadcrumbs items={[{ label: "Privacy" }]} />

      <section className="site-container page-section legal-layout">
        <article className="legal-body">
          <p className="legal-updated">Last updated: 19 November 2026</p>

          <section>
            <h2>1. Overview</h2>
            <p>Kigali Safety Academy respects your privacy. This notice describes the personal information we may collect through this website and how we aim to handle it responsibly. It applies to website visitors, learners, event participants, and organizations that contact us.</p>
            <p>Some features on this website are still being connected to the academy's backend services. Where a form is operating in preview mode, the details you enter are validated but are not yet stored or transmitted to the academy. Those forms are labelled accordingly.</p>
          </section>

          <section>
            <h2>2. Information we may collect</h2>
            <ul>
              <li>Contact details you submit, such as your name, email address, phone number, and organization.</li>
              <li>Inquiry details, including the topic you select and the message you write.</li>
              <li>Event registration details, including any access needs or notes you choose to share.</li>
              <li>Account registration details, such as your name, email, phone number, and course of interest.</li>
              <li>Certificate verification requests, including the certificate ID and learner surname.</li>
              <li>Newsletter subscription details, if you choose to subscribe.</li>
              <li>Basic technical information that hosting and security providers may process to deliver the website securely.</li>
            </ul>
          </section>

          <section>
            <h2>3. How we use information</h2>
            <p>We use personal information to respond to inquiries, plan and deliver training, process event requests, provide support, verify certificates, send updates you have asked for, and improve the website and our services.</p>
            <p>We do not sell personal information. We aim to collect only what is needed for the purpose described when you submit it.</p>
          </section>

          <section>
            <h2>4. Cookies and local storage</h2>
            <p>This website uses a small amount of browser storage to remember whether you have dismissed the cookie notice or a safety-alert banner. These preferences are stored locally in your browser and are not used for advertising.</p>
            <p>Hosting providers may use strictly necessary cookies or similar technology to deliver the site securely. If analytics or additional cookies are introduced, this notice will be updated and any required choices will be provided.</p>
          </section>

          <section>
            <h2>5. Sharing and service providers</h2>
            <p>We may share limited information with service providers who help us host the website, deliver email, manage registrations, or provide training services. We expect those providers to protect the information and use it only for the agreed purpose.</p>
            <p>We may also disclose information where required by law, to protect safety, or to respond to a lawful request.</p>
          </section>

          <section>
            <h2>6. Retention and security</h2>
            <p>We keep information only for as long as it is needed for the purpose it was collected, or as required by law. We use reasonable administrative and technical measures to protect it, but no website or transmission method can be guaranteed to be completely secure.</p>
          </section>

          <section>
            <h2>7. Your choices and rights</h2>
            <p>Subject to applicable law, you may ask to access, correct, or delete personal information we hold about you, or object to certain uses. You may also withdraw consent for communications such as the update list at any time.</p>
            <p>To make a request, contact us using the details below. We may need to confirm your identity before acting on a request.</p>
          </section>

          <section>
            <h2>8. Children</h2>
            <p>Our courses and events are intended for people who are old enough to take part in workplace training. If you are submitting information on behalf of a minor, please ensure you have the appropriate authority and consent.</p>
          </section>

          <section>
            <h2>9. Changes to this notice</h2>
            <p>We may update this notice as our services develop. The latest version will always be published on this page with a revised date.</p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>For privacy questions or requests, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>. You can also read our <Link href="/terms">terms of use</Link>.</p>
          </section>
        </article>

        <aside className="contact-aside" aria-label="Privacy links">
          <div className="sidebar-card">
            <h2>Related pages</h2>
            <ul className="sidebar-link-list">
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/faq">Frequently asked questions</Link></li>
              <li><Link href="/contact">Contact the academy</Link></li>
            </ul>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Questions about your data?</h2>
            <p>Contact the academy and we will help with access, correction, or deletion requests.</p>
            <Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
