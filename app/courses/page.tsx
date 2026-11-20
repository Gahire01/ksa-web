import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseCatalog from "@/components/CourseCatalog";
import { getCourseCategories, getCourses, getPrograms } from "@/lib/api";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "Course Catalog",
  description:
    "Browse Kigali Safety Academy courses in construction safety, occupational safety and health, first aid, fire fighting, and rigging.",
  alternates: { canonical: "/courses" },
};

export default async function CoursesPage() {
  const [courses, categories, programs] = await Promise.all([getCourses(), getCourseCategories(), getPrograms()]);

  return (
    <main>
      <PageHero
        eyebrow="TRAINING CATALOG"
        title="Practical courses for safer work"
        intro="Choose a focused course or combine several into a training program. Every course is written for the realities of the workplace, with clear modules and a short knowledge check."
        actions={
          <>
            <Link className="button button-orange" href="/register">Register your interest</Link>
            <Link className="button button-blue" href="/programs">View training programs</Link>
          </>
        }
        meta={
          <ul className="hero-stat-list">
            <li><strong>{courses.length}</strong><span>Core courses</span></li>
            <li><strong>{categories.length - 1}</strong><span>Training areas</span></li>
            <li><strong>Online</strong><span>Self-paced learning</span></li>
          </ul>
        }
      />
      <Breadcrumbs items={[{ label: "Courses" }]} />

      <section className="site-container page-section" aria-labelledby="catalog-title">
        <div className="section-head">
          <div>
            <span className="eyebrow">FIND YOUR COURSE</span>
            <h2 id="catalog-title">Explore the catalog</h2>
            <p>Search by topic, audience, or training area.</p>
          </div>
        </div>
        <CourseCatalog courses={courses} categories={categories} />
      </section>

      <section className="site-container page-section page-section-tight" aria-labelledby="programs-from-courses">
        <div className="section-head">
          <div>
            <span className="eyebrow">GO FURTHER</span>
            <h2 id="programs-from-courses">Combine courses into a program</h2>
            <p>Structured pathways for construction, emergency response, lifting, and general workplace safety.</p>
          </div>
          <Link className="outline-button" href="/programs">All programs</Link>
        </div>
        <div className="card-grid two">
          {programs.slice(0, 2).map((program) => (
            <ProgramCard key={program.slug} program={program} courseCount={program.courseSlugs.length} />
          ))}
        </div>
      </section>

      <section className="site-container cta-inline-band">
        <div>
          <h2>Not sure which course fits?</h2>
          <p>Tell us about your role or team and we will help you choose a practical starting point.</p>
        </div>
        <Link className="button button-orange" href="/contact">Ask the academy <span aria-hidden="true">›</span></Link>
      </section>
    </main>
  );
}
