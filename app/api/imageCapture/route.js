import { NextResponse } from "next/server";

var Image = "";

export async function GET(request) {
  return NextResponse.json({ Image: Image });
}

export async function POST(request) {
  const body = await request.json();
  Image = body.base64;
  return NextResponse.json({ message: "Success" });
}
