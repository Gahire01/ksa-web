const footerGroups = [
  { title: "Training", links: ["Training Programs", "Course Catalog", "Business Solutions", "Learning Partnerships"] },
  { title: "Students", links: ["Recommended Training", "Popular Courses", "Learning at your own pace", "Ask about training"] },
  { title: "Resources", links: ["Safety Spotlight", "Workplace Topics", "Career Development", "Frequently Asked Questions"] },
  { title: "About Kigali Safety Academy", links: ["Our Approach", "Our Instructors", "Contact Us", "Privacy Information"] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="74" height="74" />
          <strong>Kigali Safety Academy</strong>
          <p>Practical learning for safer, healthier workplaces.</p>
          <p><a href="#top">Back to top ↑</a></p>
        </div>
        {footerGroups.map((group) => <div className="footer-links" key={group.title}>
          <h3>{group.title}</h3>
          {group.links.map((label) => <a key={label} href={/program|course|training/i.test(label) ? "#programs" : "#contact"}>{label}</a>)}
        </div>)}
      </div>
      <div className="site-container disclaimer">
        <h3>Training Disclaimer</h3>
        <p>Information presented on this website is for general educational purposes and is not legal advice. Workplace requirements vary by jurisdiction and industry; learners and employers should consult applicable laws, standards, and qualified professionals when making compliance decisions.</p>
        <p>Course availability, content, and services should be confirmed directly with Kigali Safety Academy.</p>
      </div>
      <div className="copyright"><div className="site-container">Copyright ©2026 Kigali Safety Academy. All rights reserved.</div></div>
    </footer>
  );
}
