import { NextResponse } from "next/server";
import { verifyCertificate } from "@/lib/api";
import { text } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "The request could not be read." }, { status: 400 });
  }

  const certificateId = text(payload.certificateId);
  const lastName = text(payload.lastName);

  if (certificateId.length < 4) {
    return NextResponse.json({ ok: false, message: "Please enter the certificate ID." }, { status: 400 });
  }
  if (lastName.length < 2) {
    return NextResponse.json({ ok: false, message: "Please enter the learner's surname." }, { status: 400 });
  }

  const result = await verifyCertificate(certificateId, lastName);
  return NextResponse.json(result);
}
