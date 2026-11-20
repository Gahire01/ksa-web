import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <Link className="course-card-media" href={`/courses/${course.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={course.image} alt="" width="420" height="240" loading="lazy" />
        <span className="course-card-category">{course.category}</span>
      </Link>
      <div className="course-card-body">
        <div className="card-meta-line">
          <span>{course.level}</span>
          <span aria-hidden="true">·</span>
          <span>{course.duration}</span>
        </div>
        <h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
        <p>{course.summary}</p>
        <div className="card-foot">
          <span>{course.delivery}</span>
          <Link className="text-link" href={`/courses/${course.slug}`}>View course <span aria-hidden="true">›</span></Link>
        </div>
      </div>
    </article>
  );
}
