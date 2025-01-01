import { NextResponse } from "next/server";

var takePhoto = 1;

export async function GET(request) {
  return NextResponse.json({ takePhoto: takePhoto });
}

export async function POST(request) {
  const body = await request.json();
  takePhoto = body.status;
  return NextResponse.json({ message: "Success" });
}
