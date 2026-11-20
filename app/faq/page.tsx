import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { getFaqGroups } from "@/lib/api";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Kigali Safety Academy courses, registration, certificates, events, safety alerts, and support.",
  alternates: { canonical: "/faq" },
};

export default async function FaqPage() {
  const groups = await getFaqGroups();

  return (
    <main>
      <PageHero
        eyebrow="HELP & FAQ"
        title="Questions, answered clearly"
        intro="Find quick answers about training, registration, certificates, events, and the safety alerts we publish. If your question is not here, contact the academy team."
        actions={<Link className="button button-orange" href="/contact">Ask us directly</Link>}
        compact
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <section className="site-container page-section">
        <FaqList groups={groups} />
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Still need help?</h2>
          <p>Send a message and the academy team will point you in the right direction.</p>
        </div>
        <Link className="button button-orange" href="/contact">Contact us</Link>
      </section>
    </main>
  );
}
