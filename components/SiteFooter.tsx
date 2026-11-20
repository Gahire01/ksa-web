import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { footerGroups, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="site-container footer-top-inner">
          <div className="footer-top-copy">
            <span className="eyebrow">STAY CONNECTED</span>
            <h2>Training dates, safety alerts, and practical resources.</h2>
            <p>Join the academy update list for upcoming events and new safety guidance.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="site-container footer-main">
        <div className="footer-brand">
          <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="74" height="74" />
          <strong>Kigali Safety Academy</strong>
          <p>Practical learning for safer workplaces in Rwanda and beyond.</p>
          <ul className="footer-contact-list">
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <p><Link href="/contact">Contact the academy →</Link></p>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <Link key={`${group.title}-${link.href}-${link.label}`} href={link.href}>{link.label}</Link>)}
          </div>
        ))}
      </div>
      <div className="site-container disclaimer">
        <h3>Training disclaimer</h3>
        <p>Information presented on this website is for general educational purposes and is not legal advice. Workplace requirements vary by jurisdiction and industry; learners and employers should consult applicable laws, standards, and qualified professionals when making compliance decisions.</p>
        <p>Course availability, content, and services should be confirmed directly with Kigali Safety Academy.</p>
      </div>
      <div className="copyright">
        <div className="site-container copyright-inner">
          <span>Copyright ©2026 Kigali Safety Academy. All rights reserved.</span>
          <span className="copyright-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
