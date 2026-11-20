export function formatDate(isoDate: string, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
    ...options,
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function formatShortDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function getDateParts(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return {
    day: new Intl.DateTimeFormat("en-GB", { day: "2-digit", timeZone: "UTC" }).format(date),
    month: new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" }).format(date).toUpperCase(),
    weekday: new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "UTC" }).format(date),
  };
}

export function isUpcoming(isoDate: string) {
  return isoDate >= new Date().toISOString().slice(0, 10);
}

export function formatEventDate(event: { startDate: string; endDate?: string }) {
  if (event.endDate && event.endDate !== event.startDate) {
    return `${formatShortDate(event.startDate)} – ${formatShortDate(event.endDate)}`;
  }
  return formatDate(event.startDate);
}

export function readingTimeLabel(minutes: number) {
  return `${minutes} min read`;
}
