import type { FaqItem } from "@/lib/types";

export default function FaqList({ groups }: { groups: { group: string; items: FaqItem[] }[] }) {
  return (
    <div className="faq-groups">
      {groups.map((group) => (
        <section className="faq-group" key={group.group} aria-labelledby={`faq-${group.group.replace(/\s+/g, "-").toLowerCase()}`}>
          <h2 id={`faq-${group.group.replace(/\s+/g, "-").toLowerCase()}`}>{group.group}</h2>
          <div className="faq-list">
            {group.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
