import type { MetadataRoute } from "next";
import {
  getActiveAlerts,
  getArchivedAlerts,
  getAllEvents,
  getCourses,
  getPrograms,
  getResources,
} from "@/lib/api";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/courses",
    "/programs",
    "/events",
    "/alerts",
    "/resources",
    "/about",
    "/contact",
    "/business",
    "/partnerships",
    "/students",
    "/verify",
    "/faq",
    "/privacy",
    "/terms",
    "/login",
    "/register",
  ];

  const [courses, programs, events, resources, activeAlerts, archivedAlerts] = await Promise.all([
    getCourses(),
    getPrograms(),
    getAllEvents(),
    getResources(),
    getActiveAlerts(),
    getArchivedAlerts(),
  ]);

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route || "/"}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/events" || route === "/alerts" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/courses" || route === "/events" ? 0.9 : 0.7,
  }));

  return [
    ...entries,
    ...courses.map((course) => ({
      url: `${base}/courses/${course.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...programs.map((program) => ({
      url: `${base}/programs/${program.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...events.map((event) => ({
      url: `${base}/events/${event.slug}`,
      lastModified: new Date(`${event.startDate}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...resources.map((resource) => ({
      url: `${base}/resources/${resource.slug}`,
      lastModified: new Date(`${resource.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...[...activeAlerts, ...archivedAlerts].map((alert) => ({
      url: `${base}/alerts/${alert.slug}`,
      lastModified: new Date(`${alert.publishedAt}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
