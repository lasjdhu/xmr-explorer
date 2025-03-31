import { baseApiUrl } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ hash: string }> },
) {
  const { hash } = await params;

  const res = await fetch(`${baseApiUrl}/get_transaction_data/${hash}`);

  if (!res.ok) {
    return NextResponse.json(
      { message: "Failed to fetch transaction data" },
      { status: res.status },
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}
