"use client";

import { fetchBlock } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

export default function Block({
  params,
}: {
  params: Promise<{ hash: string }>;
}) {
  const { hash } = use(params);

  const { data, isLoading, error } = useQuery({
    queryKey: ["block", hash],
    queryFn: () => fetchBlock(hash),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
