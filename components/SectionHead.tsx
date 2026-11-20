import type { ReactNode } from "react";

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  id?: string;
}

export default function SectionHead({ eyebrow, title, intro, action, id }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 id={id}>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {action ? <div className="section-head-action">{action}</div> : null}
    </div>
  );
}
