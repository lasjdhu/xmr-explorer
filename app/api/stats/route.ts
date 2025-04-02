import { LOCAL_MONERO_API_URL } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${LOCAL_MONERO_API_URL}/get_stats`);
    const data = await response.json();

    if (data.status === "ERROR") {
      return NextResponse.json(data, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        error: "Failed to fetch statistics",
        method: "get_stats",
      },
      { status: 500 },
    );
  }
}
