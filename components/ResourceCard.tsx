import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { ResourceArticle } from "@/lib/types";

export default function ResourceCard({ article }: { article: ResourceArticle }) {
  return (
    <article className="resource-card">
      <Link className="resource-card-media" href={`/resources/${article.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={article.image} alt="" width="420" height="220" loading="lazy" />
      </Link>
      <div className="resource-card-body">
        <div className="card-meta-line">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>
        <h3><Link href={`/resources/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.summary}</p>
        <div className="card-foot">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, { month: "short" })}</time>
          <Link className="text-link" href={`/resources/${article.slug}`}>Read article <span aria-hidden="true">›</span></Link>
        </div>
      </div>
    </article>
  );
}
