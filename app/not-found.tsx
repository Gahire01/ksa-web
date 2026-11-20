import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="not-found">
        <div className="site-container not-found-inner">
          <span className="not-found-code" aria-hidden="true">404</span>
          <span className="eyebrow">PAGE NOT FOUND</span>
          <h1>We could not find that page</h1>
          <p>The link may be out of date, or the page may have moved. Here are a few useful places to continue.</p>
          <div className="not-found-actions">
            <Link className="button button-orange" href="/">Back to home</Link>
            <Link className="button button-blue" href="/courses">Browse courses</Link>
            <Link className="button button-sky" href="/contact">Contact us</Link>
          </div>
          <ul className="not-found-links">
            <li><Link href="/events">Upcoming events</Link></li>
            <li><Link href="/alerts">Safety alerts</Link></li>
            <li><Link href="/resources">Safety resources</Link></li>
            <li><Link href="/students">Student hub</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
