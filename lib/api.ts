import { courses, courseCategories, officialCourses } from "@/lib/data/courses";
import { programs } from "@/lib/data/programs";
import { events } from "@/lib/data/events";
import { safetyAlerts } from "@/lib/data/alerts";
import { resources } from "@/lib/data/resources";
import { faqs, instructors } from "@/lib/data/site-content";
import { siteConfig } from "@/lib/site";
import type {
  Course,
  EventItem,
  FormResult,
  Program,
  ResourceArticle,
  SafetyAlert,
  SiteStat,
} from "@/lib/types";

/**
 * DATA ACCESS LAYER
 * -----------------
 * Every page reads through these async functions instead of importing the
 * seed arrays directly. When the backend is ready, replace the body of each
 * function with a fetch to your API (or ORM call) and keep the return types.
 * Comments marked BACKEND show the intended integration point.
 */

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export async function getCourses(): Promise<Course[]> {
  // BACKEND: GET /courses
  return [...courses];
}

export async function getCourse(slug: string): Promise<Course | undefined> {
  // BACKEND: GET /courses/:slug
  return courses.find((course) => course.slug === slug);
}

export async function getCoursesBySlugs(slugs: string[]): Promise<Course[]> {
  return slugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is Course => Boolean(course));
}

export async function getRelatedCourses(slug: string, limit = 3): Promise<Course[]> {
  const current = courses.find((course) => course.slug === slug);
  if (!current) return [];
  const sameCategory = courses.filter((course) => course.slug !== slug && course.category === current.category);
  const others = courses.filter((course) => course.slug !== slug && course.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export async function getPrograms(): Promise<Program[]> {
  // BACKEND: GET /programs
  return [...programs];
}

export async function getProgram(slug: string): Promise<Program | undefined> {
  // BACKEND: GET /programs/:slug
  return programs.find((program) => program.slug === slug);
}

export async function getUpcomingEvents(limit?: number): Promise<EventItem[]> {
  // BACKEND: GET /events?status=upcoming
  const today = todayIso();
  const upcoming = events
    .filter((event) => event.startDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}

export async function getAllEvents(): Promise<EventItem[]> {
  return [...events].sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export async function getPastEvents(limit?: number): Promise<EventItem[]> {
  // BACKEND: GET /events?status=past
  const today = todayIso();
  const past = events
    .filter((event) => event.startDate < today)
    .sort((a, b) => b.startDate.localeCompare(a.startDate));
  return typeof limit === "number" ? past.slice(0, limit) : past;
}

export async function getEvent(slug: string): Promise<EventItem | undefined> {
  // BACKEND: GET /events/:slug
  return events.find((event) => event.slug === slug);
}

export async function getActiveAlerts(limit?: number): Promise<SafetyAlert[]> {
  // BACKEND: GET /alerts?active=true
  const severityRank = { critical: 0, warning: 1, advisory: 2, info: 3 } as const;
  const active = safetyAlerts
    .filter((alert) => alert.active)
    .sort((a, b) => {
      const bySeverity = severityRank[a.severity] - severityRank[b.severity];
      return bySeverity !== 0 ? bySeverity : b.publishedAt.localeCompare(a.publishedAt);
    });
  return typeof limit === "number" ? active.slice(0, limit) : active;
}

export async function getAlert(slug: string): Promise<SafetyAlert | undefined> {
  // BACKEND: GET /alerts/:slug
  return safetyAlerts.find((alert) => alert.slug === slug);
}

export async function getArchivedAlerts(): Promise<SafetyAlert[]> {
  return safetyAlerts
    .filter((alert) => !alert.active)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getResources(limit?: number): Promise<ResourceArticle[]> {
  // BACKEND: GET /resources
  const sorted = [...resources].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export async function getResource(slug: string): Promise<ResourceArticle | undefined> {
  // BACKEND: GET /resources/:slug
  return resources.find((resource) => resource.slug === slug);
}

export async function getRelatedResources(slug: string, limit = 3): Promise<ResourceArticle[]> {
  const current = resources.find((resource) => resource.slug === slug);
  if (!current) return [];
  const sameCategory = resources.filter((item) => item.slug !== slug && item.category === current.category);
  const others = resources.filter((item) => item.slug !== slug && item.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export async function getInstructors() {
  return [...instructors];
}

export async function getFaqs() {
  return [...faqs];
}

export async function getFaqGroups() {
  const groups = Array.from(new Set(faqs.map((item) => item.group)));
  return groups.map((group) => ({
    group,
    items: faqs.filter((item) => item.group === group),
  }));
}

export async function getSiteStats(): Promise<SiteStat[]> {
  const upcoming = await getUpcomingEvents();
  const activeAlerts = await getActiveAlerts();
  return [
    { label: "Core courses", value: String(courses.length), detail: "Focused, practical safety topics" },
    { label: "Training programs", value: String(programs.length), detail: "Pathways for teams and individuals" },
    { label: "Upcoming events", value: String(upcoming.length), detail: "Workshops, webinars, and drills" },
    { label: "Safety alerts", value: String(activeAlerts.length), detail: "Timely guidance from our safety desk" },
  ];
}

export async function getCourseCategories() {
  return [...courseCategories];
}

export { officialCourses };

/* ------------------------------------------------------------------ */
/* Form submission stubs                                              */
/* These are called only from route handlers under app/api.           */
/* Replace the preview response with the real service when ready.     */
/* ------------------------------------------------------------------ */

export const FORM_PREVIEW_NOTICE =
  "This preview is validated locally. Delivery and storage will be enabled when the backend is connected.";

export interface ContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

export async function submitContactMessage(input: ContactMessageInput): Promise<FormResult> {
  // BACKEND: POST to the contact service / CRM and send a confirmation email.
  // Example: await fetch(`${process.env.API_BASE_URL}/contact`, { method: "POST", ... })
  console.info("[contact] message validated", {
    name: input.name,
    email: input.email,
    topic: input.topic,
    length: input.message.length,
  });
  return {
    ok: true,
    message: `Thanks, ${input.name.split(" ")[0] || "there"}. Your message has been validated. The academy team can reply at ${input.email} once message delivery is connected. For an immediate response, email ${siteConfig.email}.`,
  };
}

export async function subscribeToUpdates(email: string): Promise<FormResult> {
  // BACKEND: POST to the newsletter service.
  console.info("[newsletter] subscriber validated", { email });
  return {
    ok: true,
    message: "You are on the preview list. Subscriber storage will be enabled when the backend is connected.",
  };
}

export interface EventRegistrationInput {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  notes?: string;
}

export async function registerForEvent(slug: string, input: EventRegistrationInput): Promise<FormResult> {
  // BACKEND: POST /events/:slug/registrations
  const event = await getEvent(slug);
  if (!event) {
    return { ok: false, message: "We could not find that event. Please check the events page and try again." };
  }
  if (!event.registrationOpen) {
    return { ok: false, message: "Registration for this event is closed. Browse the events page for upcoming dates." };
  }
  console.info("[events] registration validated", {
    slug,
    name: input.name,
    email: input.email,
    organization: input.organization,
  });
  return {
    ok: true,
    message: `Thanks, ${input.name.split(" ")[0] || "there"}. Your place request for ${event.title} has been validated. Confirmation will be sent to ${input.email} once event registration is connected.`,
  };
}

export async function verifyCertificate(certificateId: string, lastName: string): Promise<FormResult> {
  // BACKEND: GET /certificates/verify?id=...&lastName=...
  console.info("[verify] certificate lookup requested", { certificateId, lastName });
  return {
    ok: false,
    message:
      "Certificate verification is not connected yet. Please contact the academy with the certificate ID and learner name so the team can confirm it manually.",
  };
}
