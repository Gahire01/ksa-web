"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SafetyAlert } from "@/lib/types";
import { severityLabels } from "@/lib/data/alerts";

export default function AlertBanner({ alert }: { alert: SafetyAlert }) {
  const [visible, setVisible] = useState(false);
  const storageKey = `ksa-alert-dismissed-${alert.slug}`;

  useEffect(() => {
    setVisible(localStorage.getItem(storageKey) !== "yes");
  }, [storageKey]);

  if (!visible) return null;

  return (
    <div className={`site-alert-banner severity-bg-${alert.severity}`} role="region" aria-label="Safety alert">
      <div className="site-container site-alert-inner">
        <span className="site-alert-label">{severityLabels[alert.severity]}</span>
        <p>
          <Link href={`/alerts/${alert.slug}`}>{alert.title}</Link>
          <span className="site-alert-more">Read the alert ›</span>
        </p>
        <button
          type="button"
          className="site-alert-close"
          aria-label="Dismiss safety alert"
          onClick={() => {
            localStorage.setItem(storageKey, "yes");
            setVisible(false);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
