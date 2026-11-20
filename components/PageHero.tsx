import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  meta?: ReactNode;
  compact?: boolean;
}

export default function PageHero({ eyebrow, title, intro, actions, meta, compact }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " is-compact" : ""}`}>
      <div className="site-container page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
        </div>
        {meta ? <div className="page-hero-meta">{meta}</div> : null}
      </div>
    </section>
  );
}
