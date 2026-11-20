import { NextResponse } from "next/server";
import { registerForEvent } from "@/lib/api";
import { isValidEmail, optionalText, text } from "@/lib/validation";

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const phone = optionalText(payload.phone);
  const organization = optionalText(payload.organization);
  const notes = optionalText(payload.notes);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, message: "Please enter your full name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await registerForEvent(slug, { name, email, phone, organization, notes });
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
