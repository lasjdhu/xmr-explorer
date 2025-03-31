import { baseApiUrl } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(`${baseApiUrl}/get_stats`);

  if (!res.ok) {
    return NextResponse.json(
      { message: "Failed to fetch stats" },
      { status: 500 },
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
