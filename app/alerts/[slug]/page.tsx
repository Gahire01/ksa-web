import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AlertCard from "@/components/AlertCard";
import { formatDate } from "@/lib/format";
import { getActiveAlerts, getAlert } from "@/lib/api";
import { severityLabels } from "@/lib/data/alerts";

export async function generateStaticParams() {
  const alerts = await getActiveAlerts();
  return alerts.map((alert) => ({ slug: alert.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const alert = await getAlert(slug);
  if (!alert) return { title: "Safety alert not found" };
  return {
    title: alert.title,
    description: alert.summary,
    alternates: { canonical: `/alerts/${alert.slug}` },
    openGraph: { title: `${alert.title} | Kigali Safety Academy`, description: alert.summary, url: `/alerts/${alert.slug}` },
  };
}

export default async function AlertDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const alert = await getAlert(slug);
  if (!alert) notFound();

  const otherAlerts = (await getActiveAlerts()).filter((item) => item.slug !== alert.slug).slice(0, 2);

  return (
    <main>
      <section className={`alert-hero severity-bg-${alert.severity}`}>
        <div className="site-container">
          <div className="alert-hero-top">
            <span className="severity severity-on-dark">{severityLabels[alert.severity]}</span>
            <span>{alert.active ? "Active alert" : "Archived alert"}</span>
          </div>
          <h1>{alert.title}</h1>
          <p>{alert.summary}</p>
          <div className="alert-hero-meta">
            <span>Published {formatDate(alert.publishedAt)}</span>
            {alert.effectiveUntil ? <span>In effect until {formatDate(alert.effectiveUntil)}</span> : null}
            {alert.source ? <span>Source: {alert.source}</span> : null}
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Safety alerts", href: "/alerts" }, { label: alert.title }]} />

      <section className="site-container page-section detail-layout alert-detail-layout">
        <article className="detail-main alert-body">
          {alert.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <section className="alert-actions" aria-labelledby="alert-actions-title">
            <h2 id="alert-actions-title">Action checklist</h2>
            <ul className="check-list">
              {alert.actionItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <div className="info-note">
            <h2>Use this alert responsibly</h2>
            <p>This guidance is general and may not cover every situation. Check it against your own site conditions, procedures, and legal requirements, and consult a competent person where needed.</p>
          </div>
        </article>

        <aside className="detail-sidebar" aria-label="Alert information">
          <div className="sidebar-card">
            <h2>Alert details</h2>
            <dl className="fact-list">
              <div><dt>Severity</dt><dd>{severityLabels[alert.severity]}</dd></div>
              <div><dt>Published</dt><dd>{formatDate(alert.publishedAt)}</dd></div>
              <div><dt>Status</dt><dd>{alert.active ? "Active" : "Archived"}</dd></div>
              {alert.effectiveUntil ? <div><dt>In effect until</dt><dd>{formatDate(alert.effectiveUntil)}</dd></div> : null}
            </dl>
            <Link className="form-submit sidebar-cta" href="/contact">Discuss with the academy</Link>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Need to report a concern?</h2>
            <p>If you are dealing with an immediate danger at work, follow your emergency procedures first and contact the relevant local authority.</p>
            <Link className="text-link" href="/contact">Contact the team <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>

      {otherAlerts.length ? (
        <section className="site-container page-section page-section-tight" aria-labelledby="other-alerts-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">MORE GUIDANCE</span>
              <h2 id="other-alerts-title">Other active alerts</h2>
            </div>
            <Link className="outline-button" href="/alerts">All alerts</Link>
          </div>
          <div className="alert-grid">
            {otherAlerts.map((item) => <AlertCard key={item.slug} alert={item} compact />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}
