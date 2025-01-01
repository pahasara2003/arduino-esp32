import { NextResponse } from "next/server";

var LED_status = "fuck_you";

export async function GET(request) {
  return NextResponse.json({ LED: LED_status });
}
