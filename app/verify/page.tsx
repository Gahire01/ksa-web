import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CertificateVerificationForm from "@/components/CertificateVerificationForm";

export const metadata: Metadata = {
  title: "Verify a Certificate",
  description:
    "Verify a Kigali Safety Academy certificate or request manual confirmation from the academy team.",
  alternates: { canonical: "/verify" },
};

export default function VerifyPage() {
  return (
    <main>
      <PageHero
        eyebrow="CERTIFICATE VERIFICATION"
        title="Confirm a training certificate"
        intro="Use the certificate ID and learner surname to request verification. The lookup service is being connected; until then, the academy can confirm certificates manually."
        compact
      />
      <Breadcrumbs items={[{ label: "Verify a certificate" }]} />

      <section className="site-container page-section verify-layout">
        <div className="verify-main">
          <div className="form-card">
            <h2>Certificate lookup</h2>
            <p className="form-intro">Enter the details exactly as they appear on the certificate.</p>
            <CertificateVerificationForm />
          </div>
        </div>
        <aside className="contact-aside" aria-label="Verification help">
          <div className="sidebar-card">
            <h2>Where to find the ID</h2>
            <p>The certificate ID is printed on the certificate, usually near the learner's name or at the bottom of the page.</p>
            <p>If you cannot find it, contact the academy with the learner's full name, course title, and approximate completion date.</p>
            <Link className="form-submit sidebar-cta" href="/contact">Request manual verification</Link>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>For employers</h2>
            <p>We can confirm whether a certificate was issued and which training it relates to. We do not share personal details beyond what is needed for verification.</p>
            <Link className="text-link" href="/contact">Contact the academy <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
