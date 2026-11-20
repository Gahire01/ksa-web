import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCard from "@/components/CourseCard";
import { getCourse, getCourses, getPrograms, getRelatedCourses } from "@/lib/api";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | Kigali Safety Academy`,
      description: course.summary,
      url: `/courses/${course.slug}`,
      images: [{ url: course.image, alt: course.title }],
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) notFound();

  const [related, programs] = await Promise.all([getRelatedCourses(slug, 3), getPrograms()]);
  const relatedPrograms = programs.filter((program) => program.courseSlugs.includes(slug));

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: { "@type": "Organization", name: "Kigali Safety Academy" },
    educationalLevel: course.level,
    teaches: course.outcomes,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <section className="detail-hero">
        <div className="site-container detail-hero-grid">
          <div className="detail-hero-copy">
            <span className="pill pill-category">{course.category}</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="detail-hero-actions">
              <Link className="button button-orange" href={`/register?course=${encodeURIComponent(course.title)}`}>Register now</Link>
              <Link className="button button-outline-light" href={`/contact?topic=Course%20information&course=${encodeURIComponent(course.title)}`}>Ask a question</Link>
            </div>
          </div>
          <div className="detail-hero-media">
            <img src={course.image} alt={`${course.title} training`} width="560" height="340" />
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Courses", href: "/courses" }, { label: course.title }]} />

      <section className="site-container page-section detail-layout">
        <div className="detail-main">
          <section aria-labelledby="course-about">
            <h2 id="course-about">About this course</h2>
            <p>{course.description}</p>
            <p>
              The course is delivered through {course.delivery.toLowerCase()} lessons and a final knowledge check.
              Materials are designed to be read in short sessions, so you can fit learning around work.
            </p>
          </section>

          <section aria-labelledby="course-outcomes">
            <h2 id="course-outcomes">What you will learn</h2>
            <ul className="check-list">
              {course.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
          </section>

          <section aria-labelledby="course-modules">
            <h2 id="course-modules">Course modules</h2>
            <ol className="module-list">
              {course.modules.map((module, index) => (
                <li key={module}>
                  <span className="module-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{module}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="course-audience">
            <h2 id="course-audience">Who this course is for</h2>
            <ul className="tag-list">
              {course.audience.map((audience) => <li key={audience}>{audience}</li>)}
            </ul>
          </section>

          <section className="info-note" aria-labelledby="course-certificate">
            <h2 id="course-certificate">Completion and certificate</h2>
            <p>{course.certificate} Certificate issuance and fees are confirmed by the academy when you complete the course. Practical courses may include an optional in-person session; check the events page for scheduled dates.</p>
          </section>

          {relatedPrograms.length ? (
            <section aria-labelledby="course-programs">
              <h2 id="course-programs">Part of these programs</h2>
              <ul className="linked-list">
                {relatedPrograms.map((program) => (
                  <li key={program.slug}>
                    <Link href={`/programs/${program.slug}`}>{program.title}<span aria-hidden="true">›</span></Link>
                    <p>{program.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="detail-sidebar" aria-label="Course details">
          <div className="sidebar-card">
            <h2>Course at a glance</h2>
            <dl className="fact-list">
              <div><dt>Duration</dt><dd>{course.duration}</dd></div>
              <div><dt>Level</dt><dd>{course.level}</dd></div>
              <div><dt>Delivery</dt><dd>{course.delivery}</dd></div>
              <div><dt>Category</dt><dd>{course.category}</dd></div>
              <div><dt>Assessment</dt><dd>Short knowledge check</dd></div>
            </dl>
            <Link className="form-submit sidebar-cta" href={`/register?course=${encodeURIComponent(course.title)}`}>Register your interest</Link>
            <p className="sidebar-note">No payment is taken on this website. The academy confirms course access and any fees directly.</p>
          </div>
          <div className="sidebar-card sidebar-help">
            <h2>Need help choosing?</h2>
            <p>Talk to the academy about your role, team, or training requirements.</p>
            <Link className="text-link" href="/contact">Contact the team <span aria-hidden="true">›</span></Link>
          </div>
        </aside>
      </section>

      {related.length ? (
        <section className="site-container page-section page-section-tight" aria-labelledby="related-courses">
          <div className="section-head">
            <div>
              <span className="eyebrow">KEEP LEARNING</span>
              <h2 id="related-courses">Related courses</h2>
            </div>
            <Link className="outline-button" href="/courses">All courses</Link>
          </div>
          <div className="card-grid three">
            {related.map((item) => <CourseCard key={item.slug} course={item} />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}
