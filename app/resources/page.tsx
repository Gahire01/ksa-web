import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResourceCard from "@/components/ResourceCard";
import { getResources } from "@/lib/api";

export const metadata: Metadata = {
  title: "Safety Resources",
  description:
    "Practical workplace safety articles from Kigali Safety Academy covering heat stress, PPE, fire safety, scaffolding, and incident reporting.",
  alternates: { canonical: "/resources" },
};

export default async function ResourcesPage() {
  const resources = await getResources();
  const [featured, ...rest] = resources;

  return (
    <main>
      <PageHero
        eyebrow="SAFETY LIBRARY"
        title="Practical resources for safer work"
        intro="Short guides, checklists, and workplace topics you can use in toolbox talks or share with your team. Written to be clear, practical, and easy to act on."
        actions={
          <>
            <Link className="button button-orange" href="/events">Explore events</Link>
            <Link className="button button-blue" href="/alerts">Current safety alerts</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            <li><strong>{resources.length}</strong><span>Guides & articles</span></li>
            <li><strong>Free</strong><span>To read and share</span></li>
            <li><strong>Practical</strong><span>Workplace focused</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Resources" }]} />

      {featured ? (
        <section className="site-container page-section" aria-labelledby="featured-resource-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">SAFETY SPOTLIGHT</span>
              <h2 id="featured-resource-title">Featured guidance</h2>
            </div>
          </div>
          <article className="featured-resource">
            <div className="featured-resource-media">
              <img src={featured.image} alt="" width="640" height="360" />
            </div>
            <div className="featured-resource-copy">
              <div className="card-meta-line">
                <span>{featured.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2><Link href={`/resources/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.summary}</p>
              <p className="featured-author">By {featured.author}</p>
              <Link className="text-link" href={`/resources/${featured.slug}`}>Read the guide <span aria-hidden="true">›</span></Link>
            </div>
          </article>
        </section>
      ) : null}

      <section className="site-container page-section page-section-tight" aria-labelledby="all-resources-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">ALL RESOURCES</span>
            <h2 id="all-resources-title">Browse the library</h2>
            <p>Workplace topics and practical guidance for teams.</p>
          </div>
        </div>
        <div className="card-grid three">
          {(rest.length ? rest : resources).map((article) => <ResourceCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Use these resources in your next toolbox talk</h2>
          <p>Need a session tailored to your team? We can help you plan a practical workshop.</p>
        </div>
        <Link className="button button-orange" href="/business">Ask about team training</Link>
      </section>
    </main>
  );
}
