export const LOCAL_MONERO_API_URL = "https://localmonero.co/blocks/api";

export async function fetchBlock(hash: string) {
  const response = await fetch(`/api/blocks/${hash}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch block");
  }

  return response.json();
}

export async function fetchTransaction(hash: string) {
  const response = await fetch(`/api/tx/${hash}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch transaction");
  }

  return response.json();
}

export async function fetchStats() {
  const response = await fetch("/api/stats");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch statistics");
  }

  return response.json();
}
