"use client";

import { useState } from "react";

const menuItems = [
  { label: "HOME", href: "#top", icon: "", items: [] },
  { label: "TRAINING", href: "#programs", items: [
    { title: "About Our Training", links: ["Learning at your own pace", "How training works", "Training for individuals", "Training for organizations"] },
    { title: "Programs", links: ["General Industry", "Construction", "Healthcare", "Oil & Gas", "Public Sector", "HAZWOPER"] },
    { title: "Courses", links: ["Course Catalog", "Popular Courses", "Student Learning"] },
  ] },
  { label: "BUSINESS SOLUTIONS", href: "#contact", items: [
    { title: "For Organizations", links: ["Team Training", "Workplace Safety Learning", "Ask about training"] },
    { title: "Resources", links: ["Safety Spotlight", "Workplace Topics", "Learning Partnerships"] },
  ] },
  { label: "STUDENTS", href: "#courses", items: [{ title: "Student Services", links: ["Course Catalog", "Recommended Training", "Learning at your own pace", "Ask about training"] }] },
  { label: "RESOURCES", href: "#courses", items: [{ title: "Safety Resources", links: ["Safety Spotlight", "Workplace Topics", "Training Programs", "Popular Courses"] }] },
  { label: "STORE", href: "#contact", items: [{ title: "Training Information", links: ["Course Catalog", "Training Programs", "Ask about training"] }] },
  { label: "ABOUT US", href: "#contact", items: [{ title: "Kigali Safety Academy", links: ["Our Approach", "Learning Partnerships", "Contact Us"] }] },
];

function linkFor(label: string) {
  if (/course|training|program|industry|construction|healthcare|HAZWOPER|oil|public/i.test(label)) return label.toLowerCase().includes("course") ? "#courses" : "#programs";
  if (/spotlight|resource|topic|student|learning/i.test(label)) return "#courses";
  return "#contact";
}

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-row-1 site-container">
        <a href="#top" className="brand" aria-label="Kigali Safety Academy home">
          <img src="/assets/kigali-safety-academy-logo.webp" alt="Kigali Safety Academy shield logo" width="64" height="64" />
          <span className="brand-copy"><strong>Kigali Safety Academy</strong><small>Occupational Safety &amp; Health Training</small></span>
        </a>
        <div className="header-row-1-right">
          <div className="account-links">
            <a href="#contact" className="login-link">
              <span className="account-icon login-ic" aria-hidden="true"></span> Login
            </a>
            <a href="#contact" className="register-link">
              <span className="account-icon register-ic" aria-hidden="true"></span> Register
            </a>
          </div>
          <div className="social-links" aria-label="Social media">
            <a href="#contact" aria-label="Facebook">f</a>
            <a href="#contact" aria-label="X">𝕏</a>
            <a href="#contact" aria-label="LinkedIn">in</a>
            <a href="#contact" aria-label="Pinterest">P</a>
          </div>
        </div>
      </div>
      <div className="header-row-2-wrapper">
        <div className="header-row-2 site-container">
          <button className="mobile-toggle" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span><span className="hamburger" aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          </button>
          <nav id="primary-navigation" className={`primary-navigation ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {menuItems.map((item) => (
              <div className={`nav-item ${openMenu === item.label ? "is-active" : ""}`} key={item.label} onMouseEnter={() => item.items.length && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
                {item.items.length ? (
                <button type="button" aria-expanded={openMenu === item.label} onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)} onFocus={() => setOpenMenu(item.label)}>
                  {item.label === "HOME" && <span className="nav-home-ic" aria-hidden="true"></span>}
                  <span>{item.label}</span><span className="nav-caret" aria-hidden="true"></span>
                </button>
              ) : (
                <a href={item.href}>
                  {item.label === "HOME" && <span className="nav-home-ic" aria-hidden="true"></span>}
                  {item.label}
                </a>
              )}
                {item.items.length > 0 && openMenu === item.label && (
                  <div className="mega-menu">
                    {item.items.map((group) => <section className="mega-group" key={group.title}>
                      <h3>{group.title}</h3>
                      {group.links.map((label) => <a key={label} href={linkFor(label)} onClick={() => setMobileOpen(false)}>{label}</a>)}
                    </section>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
