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

const socialLinks = [
  { label: "Facebook", d: "M9.5 8H7V6c0-1 .5-1.5 1.6-1.5H10V1.5C9.6 1.5 8.5 1.5 7.4 1.5 5 1.5 3.2 3 3.2 5.7V8H1v3.4h2.2V22H6.5v-10.6h2.3L9.5 8z" },
  { label: "X", d: "M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.1L4.7 21H1.5l7.5-8.6L1 3h6.7l4.6 5.6L17.5 3zm-1.1 16.1h1.8L6.7 4.8H4.8l11.6 14.3z" },
  { label: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.5 4.7 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z" },
  { label: "TikTok", d: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { label: "YouTube", d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" },
  { label: "Instagram", d: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.45-1.3.85-.4.4-.65.8-.85 1.3-.16.4-.35 1-.4 2.1C2.5 8.5 2.5 8.9 2.5 12s0 3.5.07 4.8c.05 1.1.24 1.7.4 2.1.2.5.45.9.85 1.3.4.4.8.65 1.3.85.4.16 1 .35 2.1.4 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.45 1.3-.85.4-.4.65-.8.85-1.3.16-.4.35-1 .4-2.1.07-1.3.07-1.7.07-4.8s0-3.5-.07-4.8c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.85-1.3 3.5 3.5 0 0 0-1.3-.85c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.1a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" },
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
            {socialLinks.map((social) => (
              <a href="#contact" aria-label={social.label} key={social.label}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d={social.d} /></svg>
              </a>
            ))}
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
