import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCard from "@/components/CourseCard";
import { getCoursesBySlugs, getProgram, getPrograms } from "@/lib/api";

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgram(slug);
  if (!program) return { title: "Program not found" };
  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.title} | Kigali Safety Academy`,
      description: program.summary,
      url: `/programs/${program.slug}`,
      images: [{ url: program.image, alt: program.title }],
    },
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await getProgram(slug);
  if (!program) notFound();

  const includedCourses = await getCoursesBySlugs(program.courseSlugs);

  return (
    <main>
      <section className="detail-hero">
        <div className="site-container detail-hero-grid">
          <div className="detail-hero-copy">
            <span className="pill pill-category">{program.category}</span>
            <h1>{program.title}</h1>
            <p>{program.description}</p>
            <div className="detail-hero-actions">
              <Link className="button button-orange" href="/register">Register your interest</Link>
              <Link className="button button-outline-light" href="/business">Train a team</Link>
            </div>
          </div>
          <div className="detail-hero-media">
            <img src={program.image} alt={`${program.title} training`} width="560" height="340" />
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Programs", href: "/programs" }, { label: program.title }]} />

      <section className="site-container page-section detail-layout">
        <div className="detail-main">
          <section aria-labelledby="program-about">
            <h2 id="program-about">About this program</h2>
            <p>{program.description}</p>
            <p>Each course can also be taken on its own. The program simply gives you a recommended order and a clear set of outcomes to work toward.</p>
          </section>

          <section aria-labelledby="program-outcomes">
            <h2 id="program-outcomes">Program outcomes</h2>
            <ul className="check-list">
              {program.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
          </section>

          <section aria-labelledby="program-courses">
            <h2 id="program-courses">Courses included</h2>
            <div className="card-grid two">
              {includedCourses.map((course) => <CourseCard key={course.slug} course={course} />)}
            </div>
          </section>

          <section aria-labelledby="program-audience">
            <h2 id="program-audience">Who it is for</h2>
            <p>{program.audience}</p>
          </section>

          <section className="info-note" aria-labelledby="program-next">
            <h2 id="program-next">Next steps</h2>
            <p>Register your interest or contact the academy to discuss group timing, practical sessions, and fees. Course access and certificates are confirmed directly by Kigali Safety Academy.</p>
          </section>
        </div>

        <aside className="detail-sidebar" aria-label="Program details">
          <div className="sidebar-card">
            <h2>Program at a glance</h2>
            <dl className="fact-list">
              <div><dt>Courses</dt><dd>{includedCourses.length} included</dd></div>
              <div><dt>Duration</dt><dd>{program.duration}</dd></div>
              <div><dt>Delivery</dt><dd>Online with optional practical sessions</dd></div>
              <div><dt>Category</dt><dd>{program.category}</dd></div>
            </dl>
            <Link className="form-submit sidebar-cta" href="/register">Register your interest</Link>
            <p className="sidebar-note">Group options and fees are confirmed by the academy.</p>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Planning for a team?</h2>
            <p>Ask about group registration, on-site sessions, and scheduling around shifts.</p>
            <Link className="text-link" href="/business">Business training <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Compare other pathways</h2>
          <p>Explore all training programs and choose the best starting point.</p>
        </div>
        <Link className="button button-orange" href="/programs">All programs <span aria-hidden="true">›</span></Link>
      </section>
    </main>
  );
}
