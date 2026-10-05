const categories = [
  { name: "HEALTHCARE", image: "index-slider-11.jpg", link: "#programs" },
  { name: "GENERAL INDUSTRY", image: "index-slider-1.jpg", link: "#programs" },
  { name: "EM 385-1-1 (2024)", image: "index-slider-2.jpg", link: "#programs" },
  { name: "CONSTRUCTION", image: "index-slider-7.jpg", link: "#programs" },
  { name: "HAZWOPER", image: "index-slider-9.jpg", link: "#programs" },
  { name: "OIL & GAS", image: "index-slider-10.jpg", link: "#programs" },
];

const learnerBenefits = [
  { title: "Learn at your own pace", text: "Explore safety topics on a schedule that works for you, with clear course materials available online." },
  { title: "Practical knowledge", text: "Build awareness of common workplace hazards and the everyday habits that help prevent incidents." },
  { title: "A clearer path", text: "Move through training step by step and keep your learning organized as you go." },
  { title: "Safer workplaces", text: "Share useful safety knowledge with colleagues and support a stronger culture of prevention." },
];

const recommended = ["108 Personal Protective Equipment: Basic", "603 Stairway and Ladder Safety", "605 Confined Space Safety", "611 Nail Gun Safety", "710 Energy Control Program (Lockout/Tagout)", "40-hour HAZWOPER for General Site Workers"];
const programs = ["132-hour OSH Professional", "10-hour Construction Safety and Health", "30-hour Construction Safety and Health", "10-hour General Industry Safety and Health", "30-hour General Industry Safety and Health", "48-hour OSH Manager", "40-hour EM 385-1-1 (2024)"];
const courses = ["105 Hazard Communication: Basic", "107 Emergency Action and Fire Prevention Plans", "625 HIPAA for Healthcare Workers", "656 Bloodborne Pathogens in the Healthcare Setting", "755 Bloodborne Pathogens Program Management"];

function Check({ children }: { children: React.ReactNode }) {
  return <li className="hero-point"><span aria-hidden="true">✓</span>{children}</li>;
}

function FeatureCard({ icon, title, children, link }: { icon: string; title: string; children: React.ReactNode; link: string }) {
  return <article className="feature-card"><div className="feature-icon" aria-hidden="true">{icon}</div><div><h3>{title}</h3>{children}<a href={link} className="text-link">Learn More <span aria-hidden="true">›</span></a></div></article>;
}

function ListPanel({ title, entries, id, cta }: { title: string; entries: string[]; id: string; cta: string }) {
  return <section className="list-panel" id={id}><div className="panel-heading"><h2>{title}</h2><a href="#contact">{cta} <span aria-hidden="true">›</span></a></div><ul>{entries.map((item) => <li key={item}><a href="#contact">{item}<span aria-hidden="true">›</span></a></li>)}</ul></section>;
}

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <h1 id="hero-title">Kigali Safety Academy Makes Training Easy!</h1>
          <ul>
            <Check>Help satisfy OSHT training requirements.</Check>
            <Check>Convenient online training at your own pace.</Check>
            <Check>Register and access course materials for FREE.</Check>
            <Check>Purchase a certificate upon completion.</Check>
            <Check>Business discounts available!</Check>
          </ul>
          <div className="hero-actions"><a className="button button-orange" href="#contact"><small>Get Started!</small>Register Now</a><a className="button button-blue" href="#programs"><small>View Our</small>Programs</a><a className="button button-sky" href="#courses"><small>View Our</small>Courses</a></div>
        </div>
      </section>

      <section className="site-container spotlight-banner" aria-label="Kigali Safety Academy training benefits">
        <div className="spotlight-content">
          <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="88" height="88" />
          <div className="spotlight-copy"><span className="eyebrow">KIGALI SAFETY ACADEMY</span><h2>Learn well. Work safely.</h2><p>Practical knowledge for safer, healthier workplaces.</p></div>
          <ul className="spotlight-points"><li>✓ Self-paced learning</li><li>✓ Workplace-focused topics</li><li>✓ Built for safer teams</li></ul>
        </div>
      </section>

      <section className="site-container category-section" aria-label="Training programs by industry">
        <div className="category-grid" role="region" aria-label="Training categories, scroll horizontally for more" tabIndex={0}>{categories.map((category) => <a className="category-card" href={category.link} key={category.name} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.72),transparent 62%),url(/assets/${category.image})` }}><span className="category-title">{category.name}</span><span className="category-button">Programs</span></a>)}</div>
      </section>

      <section className="site-container feature-grid" aria-label="Training benefits">
        <FeatureCard icon="✓" title="Practical Training" link="#programs"><p>Explore learning designed to build awareness of workplace safety and health topics.</p><p>Study course materials at a pace that fits your schedule.</p></FeatureCard>
        <FeatureCard icon="✓" title="For Organizations" link="#contact"><p>Support a shared approach to safety learning across your team.</p><p>Ask about training options for your workplace.</p></FeatureCard>
        <FeatureCard icon="✓" title="Safer Workplaces" link="#courses"><p>Strengthen everyday safety awareness with useful, accessible learning.</p><p>Take the next step toward safer work practices.</p></FeatureCard>
      </section>

      <section className="kudos-band">
        <div className="site-container"><div className="section-title"><div><span className="eyebrow">STUDENT LEARNING</span><h2>Training that works for you</h2><p>Flexible learning for safer workplaces</p></div><a href="#contact" className="outline-button">Ask about training</a></div>
          <div className="testimonial-grid">{learnerBenefits.map((item) => <article className="testimonial learner-card" key={item.title}><div className="stars" aria-hidden="true">✓</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="site-container discover-section" aria-label="Training discovery">
        <div className="section-title discover-title"><div><span className="eyebrow">TRAIN WHEN IT WORKS FOR YOU</span><h2>Find the right training</h2></div><a className="text-link" href="#programs">Browse the catalog <span aria-hidden="true">›</span></a></div>
        <div className="discovery-grid">
          <ListPanel title="Recommended Training" entries={recommended} id="courses" cta="View All Courses" />
          <ListPanel title="Popular Programs" entries={programs} id="programs" cta="View All Programs" />
          <ListPanel title="Popular Courses" entries={courses} id="popular-courses" cta="View All Courses" />
        </div>
      </section>

      <section className="site-container community-strip">
        <div className="community-copy"><span className="eyebrow">LEARNING PARTNERSHIPS</span><h2>Training that can open doors.</h2><p>Learning partnerships can support professional development and help make safety training more accessible. Contact Kigali Safety Academy to ask about opportunities for your learners or organization.</p><a href="#contact" className="text-link">Ask about partnerships <span>›</span></a></div>
        <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="88" height="88" />
      </section>

      <section className="site-container editorial-grid">
        <article className="editorial-card"><div className="editorial-mark">KSA · WORKPLACE LEARNING</div><h3>Build a stronger safety culture.</h3><p>Make practical learning part of everyday conversations about workplace safety.</p><a href="#programs" className="text-link">Explore training <span>›</span></a></article>
        <article className="editorial-card safety-article"><div className="editorial-mark">SAFETY SPOTLIGHT</div><h3>Heat stress: plan ahead and stay safe</h3><p>Recognize the risks of working in hot conditions and take steps to protect your team.</p><a href="#courses" className="text-link">Explore safety topics <span>›</span></a></article>
        <article className="editorial-card"><span className="eyebrow">PRACTICAL RESOURCES</span><h3>Safer work begins with awareness.</h3><p>Build knowledge one safety topic at a time.</p><a href="#courses" className="text-link">Browse courses <span>›</span></a></article>
      </section>

      <section className="cta-section">
        <div className="site-container cta-inner"><div><span className="eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>Start building safer work habits.</h2><p>Explore training with Kigali Safety Academy.</p></div><a className="button button-orange" href="#contact">Contact Us <span aria-hidden="true">›</span></a></div>
      </section>

      <section className="site-container stats-row" aria-label="Kigali Safety Academy at a glance">
        {["Students", "Years of Learning", "Training Programs", "Courses"].map((label, index) => <div key={label}><strong>{["0", "0", "0", "0"][index]}</strong><span>{label}</span></div>)}
      </section>
    </main>
  );
}
