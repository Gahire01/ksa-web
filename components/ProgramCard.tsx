import Link from "next/link";
import type { Program } from "@/lib/types";

export default function ProgramCard({ program, courseCount }: { program: Program; courseCount: number }) {
  return (
    <article className="program-card">
      <div className="program-card-media">
        <img src={program.image} alt="" width="440" height="180" loading="lazy" />
        <span className="course-card-category">{program.category}</span>
      </div>
      <div className="program-card-body">
        <h3><Link href={`/programs/${program.slug}`}>{program.title}</Link></h3>
        <p>{program.summary}</p>
        <ul className="mini-facts">
          <li>{courseCount} course{courseCount === 1 ? "" : "s"}</li>
          <li>{program.duration}</li>
        </ul>
        <Link className="text-link" href={`/programs/${program.slug}`}>Explore program <span aria-hidden="true">›</span></Link>
      </div>
    </article>
  );
}
