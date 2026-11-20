import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AlertCard from "@/components/AlertCard";
import { getActiveAlerts, getArchivedAlerts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Safety Alerts",
  description:
    "Current safety alerts and practical guidance from the Kigali Safety Academy safety desk for workplaces and training teams.",
  alternates: { canonical: "/alerts" },
};

export default async function AlertsPage() {
  const [active, archived] = await Promise.all([getActiveAlerts(), getArchivedAlerts()]);

  return (
    <main>
      <PageHero
        eyebrow="SAFETY ALERTS"
        title="Current guidance from the safety desk"
        intro="Short, practical alerts that help teams respond to seasonal conditions, common hazards, and emerging risks. Alerts support awareness; they do not replace a site-specific risk assessment."
        actions={
          <>
            <Link className="button button-orange" href="#active-alerts">View active alerts</Link>
            <Link className="button button-blue" href="/contact">Ask a safety question</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            <li><strong>{active.length}</strong><span>Active alerts</span></li>
            <li><strong>{active.filter((alert) => alert.severity === "critical" || alert.severity === "warning").length}</strong><span>Priority alerts</span></li>
            <li><strong>Updated</strong><span>By the safety desk</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Safety alerts" }]} />

      <section className="site-container page-section" id="active-alerts" aria-labelledby="active-alerts-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">ACTIVE NOW</span>
            <h2 id="active-alerts-title">Alerts to review with your team</h2>
            <p>Share relevant alerts in toolbox talks and check them against your own work conditions.</p>
          </div>
        </div>
        <div className="alert-grid">
          {active.map((alert) => <AlertCard key={alert.slug} alert={alert} />)}
        </div>
      </section>

      <section className="band-soft" aria-labelledby="alert-guidance-title">
        <div className="site-container page-section alert-guidance">
          <div>
            <span className="eyebrow">USING ALERTS WELL</span>
            <h2 id="alert-guidance-title">Make the guidance practical</h2>
          </div>
          <ol className="step-grid">
            <li className="step-card"><span aria-hidden="true">01</span><h3>Check relevance</h3><p>Compare the alert with your tasks, location, and current conditions.</p></li>
            <li className="step-card"><span aria-hidden="true">02</span><h3>Discuss it briefly</h3><p>Use a toolbox talk to confirm what the guidance means for your team.</p></li>
            <li className="step-card"><span aria-hidden="true">03</span><h3>Record actions</h3><p>Note any changes you make and follow up on outstanding controls.</p></li>
          </ol>
        </div>
      </section>

      {archived.length ? (
        <section className="site-container page-section" aria-labelledby="archived-alerts-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">ARCHIVE</span>
              <h2 id="archived-alerts-title">Previous alerts</h2>
              <p>Guidance that is no longer active but may still be useful for training.</p>
            </div>
          </div>
          <div className="alert-grid">
            {archived.map((alert) => <AlertCard key={alert.slug} alert={alert} />)}
          </div>
        </section>
      ) : null}

      <section className="site-container cta-inline-band">
        <div>
          <h2>Want safety alerts sent to your inbox?</h2>
          <p>Join the update list for new alerts, training dates, and resources.</p>
        </div>
        <Link className="button button-orange" href="/contact">Join the update list</Link>
      </section>
    </main>
  );
}
