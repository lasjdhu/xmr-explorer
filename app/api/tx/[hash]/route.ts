import { LOCAL_MONERO_API_URL } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hash: string }> },
) {
  const { hash } = await params;

  try {
    const response = await fetch(
      `${LOCAL_MONERO_API_URL}/get_transaction_data/${hash}`,
    );
    const data = await response.json();

    if (data.status === "ERROR") {
      const statusCode = data.error?.includes("not found") ? 404 : 400;
      return NextResponse.json(data, { status: statusCode });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        error: "Failed to fetch transaction data",
        method: "get_transaction",
        param_value: hash,
      },
      { status: 500 },
    );
  }
}
