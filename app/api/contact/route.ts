import { NextResponse } from "next/server";
import { submitContactMessage } from "@/lib/api";
import { isValidEmail, optionalText, text } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const phone = optionalText(payload.phone);
  const topic = text(payload.topic);
  const message = text(payload.message);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, message: "Please enter your full name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }
  if (!topic) {
    return NextResponse.json({ ok: false, message: "Please choose a topic." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, message: "Please add a little more detail to your message." }, { status: 400 });
  }

  const result = await submitContactMessage({ name, email, phone, topic, message });
  return NextResponse.json(result);
}
