import { NextResponse } from "next/server";
import { isValidEmail, text } from "@/lib/validation";

/**
 * BACKEND: replace this preview handler with a call to the authentication
 * service, set an httpOnly session cookie, and return the signed-in user.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const email = text(payload.email);
  const password = text(payload.password);

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Enter a valid email address." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ ok: false, message: "Your password must be at least 8 characters." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Your details look valid. Sign-in will be enabled once the student portal is connected; until then, contact the academy if you need account help.",
  });
}
