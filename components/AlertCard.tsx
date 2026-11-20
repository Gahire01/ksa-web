import Link from "next/link";
import { formatShortDate } from "@/lib/format";
import { severityLabels } from "@/lib/data/alerts";
import type { SafetyAlert } from "@/lib/types";

export default function AlertCard({ alert, compact }: { alert: SafetyAlert; compact?: boolean }) {
  return (
    <article className={`alert-card alert-${alert.severity}${compact ? " is-compact" : ""}`}>
      <div className="alert-card-top">
        <span className={`severity severity-${alert.severity}`}>{severityLabels[alert.severity]}</span>
        <time dateTime={alert.publishedAt}>{formatShortDate(alert.publishedAt)}</time>
      </div>
      <h3><Link href={`/alerts/${alert.slug}`}>{alert.title}</Link></h3>
      <p>{alert.summary}</p>
      <div className="alert-card-foot">
        {alert.effectiveUntil ? <span>In effect until {formatShortDate(alert.effectiveUntil)}</span> : <span>Ongoing guidance</span>}
        <Link className="text-link" href={`/alerts/${alert.slug}`}>Read alert <span aria-hidden="true">›</span></Link>
      </div>
    </article>
  );
}
