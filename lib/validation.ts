export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function optionalText(value: unknown) {
  const result = text(value);
  return result.length ? result : undefined;
}

export function isValidEmail(value: string) {
  return emailPattern.test(value);
}

export function isPhoneLike(value: string) {
  return /^[+()\d\s-]{7,24}$/.test(value);
}
