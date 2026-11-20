export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

export interface Course {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  duration: string;
  level: CourseLevel;
  delivery: string;
  image: string;
  modules: string[];
  outcomes: string[];
  audience: string[];
  certificate: string;
  featured?: boolean;
  popular?: boolean;
  recommended?: boolean;
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  duration: string;
  image: string;
  courseSlugs: string[];
  outcomes: string[];
  audience: string;
}

export type AlertSeverity = "critical" | "warning" | "advisory" | "info";

export interface SafetyAlert {
  slug: string;
  title: string;
  severity: AlertSeverity;
  summary: string;
  publishedAt: string;
  effectiveUntil?: string;
  source?: string;
  active: boolean;
  body: string[];
  actionItems: string[];
}

export type EventFormat = "In person" | "Online" | "Hybrid";

export interface EventItem {
  slug: string;
  title: string;
  summary: string;
  description: string;
  format: EventFormat;
  location: string;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  timezone: string;
  price: string;
  seats?: number;
  seatsRemaining?: number;
  registrationOpen: boolean;
  focus: string;
  image: string;
  highlights: string[];
  agenda: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  featured?: boolean;
  sections: ArticleSection[];
}

export interface Instructor {
  name: string;
  role: string;
  focus: string;
  bio: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  group: string;
}

export interface SiteStat {
  label: string;
  value: string;
  detail: string;
}

export interface FormResult {
  ok: boolean;
  message: string;
}
