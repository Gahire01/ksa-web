import { courses } from "@/lib/data/courses";

export const siteConfig = {
  name: "Kigali Safety Academy",
  shortName: "KSA",
  tagline: "Empowering safe workplaces",
  description:
    "Practical occupational safety, first aid, fire safety, and rigging training for individuals and organizations in Rwanda.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kigalisafetyacademy.rw",
  email: "info@kigalisafetyacademy.rw",
  phone: "+250 788 000 000",
  phoneHref: "+250788000000",
  address: "Kacyiru, Gasabo District, Kigali, Rwanda",
  hours: "Monday–Friday, 08:00–17:00 CAT",
  founded: "2020",
  socials: [
    { label: "Facebook", href: "/contact" },
    { label: "X", href: "/contact" },
    { label: "LinkedIn", href: "/contact" },
    { label: "TikTok", href: "/contact" },
    { label: "YouTube", href: "/contact" },
    { label: "Instagram", href: "/contact" },
  ],
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  icon?: "home";
  groups?: NavGroup[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  {
    label: "Training",
    href: "/courses",
    groups: [
      {
        title: "Explore training",
        links: [
          { label: "Course catalog", href: "/courses" },
          { label: "Training programs", href: "/programs" },
          { label: "Learning approach", href: "/about#approach" },
          { label: "Training for organizations", href: "/business" },
        ],
      },
      {
        title: "Core courses",
        links: courses.map((course) => ({ label: course.title, href: `/courses/${course.slug}` })),
      },
    ],
  },
  {
    label: "Events & Alerts",
    href: "/events",
    groups: [
      {
        title: "Stay informed",
        links: [
          { label: "Upcoming events", href: "/events" },
          { label: "Safety alerts", href: "/alerts" },
          { label: "Past events", href: "/events#past" },
        ],
      },
      {
        title: "Learn more",
        links: [
          { label: "Safety resources", href: "/resources" },
          { label: "Frequently asked questions", href: "/faq" },
          { label: "Student hub", href: "/students" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      {
        title: "Safety library",
        links: [
          { label: "Safety spotlight", href: "/resources" },
          { label: "Workplace topics", href: "/resources" },
          { label: "Safety alerts", href: "/alerts" },
          { label: "Upcoming events", href: "/events" },
        ],
      },
      {
        title: "Student tools",
        links: [
          { label: "Student hub", href: "/students" },
          { label: "Verify a certificate", href: "/verify" },
          { label: "Frequently asked questions", href: "/faq" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        title: "Kigali Safety Academy",
        links: [
          { label: "About us", href: "/about" },
          { label: "Our approach", href: "/about#approach" },
          { label: "Our instructors", href: "/about#instructors" },
          { label: "Learning partnerships", href: "/partnerships" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Contact us", href: "/contact" },
          { label: "Privacy information", href: "/privacy" },
          { label: "Terms of use", href: "/terms" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: NavGroup[] = [
  {
    title: "Training",
    links: [
      { label: "Course catalog", href: "/courses" },
      { label: "Training programs", href: "/programs" },
      { label: "For organizations", href: "/business" },
      { label: "Learning approach", href: "/about#approach" },
    ],
  },
  {
    title: "Students",
    links: [
      { label: "Student hub", href: "/students" },
      { label: "Sign in", href: "/login" },
      { label: "Create an account", href: "/register" },
      { label: "Verify a certificate", href: "/verify" },
    ],
  },
  {
    title: "Stay informed",
    links: [
      { label: "Upcoming events", href: "/events" },
      { label: "Safety alerts", href: "/alerts" },
      { label: "Safety resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About us", href: "/about" },
      { label: "Instructors", href: "/about#instructors" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
