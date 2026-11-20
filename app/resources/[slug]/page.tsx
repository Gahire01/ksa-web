import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResourceCard from "@/components/ResourceCard";
import { formatDate } from "@/lib/format";
import { getRelatedResources, getResource, getResources } from "@/lib/api";

export async function generateStaticParams() {
  const resources = await getResources();
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getResource(slug);
  if (!article) return { title: "Resource not found" };
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      title: `${article.title} | Kigali Safety Academy`,
      description: article.summary,
      url: `/resources/${article.slug}`,
      type: "article",
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getResource(slug);
  if (!article) notFound();

  const related = await getRelatedResources(slug, 3);

  return (
    <main>
      <section className="article-hero">
        <div className="site-container article-hero-inner">
          <div className="article-hero-copy">
            <span className="pill pill-category">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.summary}</p>
            <div className="article-meta">
              <span>By {article.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
          <div className="article-hero-media">
            <img src={article.image} alt={`${article.title} illustration`} width="520" height="320" />
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: article.title }]} />

      <section className="site-container page-section detail-layout">
        <article className="detail-main article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul className="check-list">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              ) : null}
            </section>
          ))}

          <div className="info-note">
            <h2>Keep it practical</h2>
            <p>Use this guidance as a starting point for a team discussion. Always check your own workplace procedures and legal requirements, and consult a competent person for site-specific decisions.</p>
            <Link className="text-link" href="/contact">Ask the academy a question <span aria-hidden="true">›</span></Link>
          </div>
        </article>

        <aside className="detail-sidebar" aria-label="Article information">
          <div className="sidebar-card">
            <h2>Article details</h2>
            <dl className="fact-list">
              <div><dt>Category</dt><dd>{article.category}</dd></div>
              <div><dt>Published</dt><dd>{formatDate(article.publishedAt)}</dd></div>
              <div><dt>Reading time</dt><dd>{article.readingTime}</dd></div>
              <div><dt>Author</dt><dd>{article.author}</dd></div>
            </dl>
            <Link className="form-submit sidebar-cta" href="/resources">Back to the library</Link>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Share with your team</h2>
            <p>Use this article as the basis for a short toolbox talk. Ask the team what would need to change in your own workplace.</p>
            <Link className="text-link" href="/business">Plan a team session <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>

      {related.length ? (
        <section className="site-container page-section page-section-tight" aria-labelledby="related-resources-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">KEEP READING</span>
              <h2 id="related-resources-title">Related resources</h2>
            </div>
            <Link className="outline-button" href="/resources">All resources</Link>
          </div>
          <div className="card-grid three">
            {related.map((item) => <ResourceCard key={item.slug} article={item} />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}
