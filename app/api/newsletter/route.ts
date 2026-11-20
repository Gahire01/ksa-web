import { NextResponse } from "next/server";
import { subscribeToUpdates } from "@/lib/api";
import { isValidEmail, text } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const email = text(payload.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await subscribeToUpdates(email);
  return NextResponse.json(result);
}
