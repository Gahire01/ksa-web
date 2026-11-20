import { NextResponse } from "next/server";
import { isValidEmail, isPhoneLike, optionalText, text } from "@/lib/validation";

/**
 * BACKEND: replace this preview handler with account creation, email
 * verification, and the student-portal provisioning flow.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const firstName = text(payload.firstName);
  const lastName = text(payload.lastName);
  const email = text(payload.email);
  const phone = optionalText(payload.phone);
  const password = text(payload.password);
  const confirmPassword = text(payload.confirmPassword);

  if (firstName.length < 2 || lastName.length < 2) {
    return NextResponse.json({ ok: false, message: "Enter your first and last name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Enter a valid email address." }, { status: 400 });
  }
  if (phone && !isPhoneLike(phone)) {
    return NextResponse.json({ ok: false, message: "Enter a valid phone number." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ ok: false, message: "Choose a password with at least 8 characters." }, { status: 400 });
  }
  if (password !== confirmPassword) {
    return NextResponse.json({ ok: false, message: "The two passwords do not match." }, { status: 400 });
  }
  if (payload.terms !== true) {
    return NextResponse.json({ ok: false, message: "Please accept the training terms to continue." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${firstName}! Your details look complete. Account creation will be enabled once the student portal is connected; the academy can also follow up at ${email}.`,
  });
}
